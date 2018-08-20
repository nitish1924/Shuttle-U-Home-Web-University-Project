import React, { Component } from 'react';
import './App.css';
import Signin from './components/Signin/Signin';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Bookinglist from './components/Bookinglist/Bookinglist';
import Registerdriver from './components/Registerdriver/Registerdriver';
import Registersupervisor from './components/Registersupervisor/Registersupervisor';
import Errorvalidation from './components/Errorvalidation/Errorvalidation';
import Employees from './components/Employees/Employees';

const initialState = {
	isSignedIn : false,
	route : 'signin',
	homeRoute:'bookinglist',
  error:''
}

class App extends Component {
  constructor(){
  	super();
  	this.state = initialState;
  }
	
  onRouteChange = (route) => {
  	if(route==='home'){
      this.setState({isSignedIn:true, route:'home'});
    }
    else if(route === 'signin'){
      this.setState(initialState);
    }
    else if(route === 'signout'){
      this.setState(initialState);
    }
  }	

  onHomeRouteChange	= (homeRoute) => {
  	 if(homeRoute === 'bookinglist'){
      this.setState({homeRoute:'bookinglist'});
      this.setState({error:''});
    }
    else if(homeRoute === 'registerdriver'){
      this.setState({homeRoute:'registerdriver'});
       this.setState({error:''});
    }
    else if(homeRoute === 'registersupervisor'){
      this.setState({homeRoute:'registersupervisor'});
       this.setState({error:''});
    }
    else if(homeRoute === 'employees'){
      this.setState({homeRoute:'employees'});
       this.setState({error:''});
    }
  }

  errorValidation = (error) => {
    this.setState({error:error});
  }

  render() {
  	let homeRender;

	if(this.state.homeRoute === 'registersupervisor'){
		homeRender =<div> <Errorvalidation error = {this.state.error}/> 
                      <Registersupervisor errorValidation = {this.errorValidation}/>
                </div>;
	}
	else if(this.state.homeRoute === 'registerdriver'){
		homeRender = <div><Errorvalidation error = {this.state.error}/>
                      <Registerdriver errorValidation = {this.errorValidation}/>
                 </div>;
	}
  else if(this.state.homeRoute === 'employees'){
    homeRender = <div><Errorvalidation error = {this.state.error}/>
                      <Employees errorValidation = {this.errorValidation}/>
                 </div>;
  }

    return (
      <div className="App">
      <Logo/>
      <div>
      	<Navigation
      		isSignedIn = {this.state.isSignedIn} 
      		onRouteChange = {this.onRouteChange}
      		onHomeRouteChange = {this.onHomeRouteChange}
      	/>
        </div>
      	{
      		this.state.route === 'signin'
      		?   <div>
      				<Signin onRouteChange={this.onRouteChange}/>
      			</div>
      		: this.state.homeRoute === 'bookinglist'
      		  ?	<div>
            <Errorvalidation error = {this.state.error}/>
  					<Bookinglist errorValidation = {this.errorValidation}/>
      			</div>
      		  : <div>
      		 	 	{homeRender} 
      		 	</div>    
      	} 
      </div>
    );
  }
}

export default App;

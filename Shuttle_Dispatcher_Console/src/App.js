import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import Signin from './components/Signin/Signin';
import Welcome from './components/Welcome/Welcome';
import Navigation from './components/Navigation/Navigation';
import Book from './components/Book/Book';
import Viewbook from './components/Viewbook/Viewbook';
import Error from './components/Error/Error';


const initialState = {
  isSignedIn: false,
  route:'signin',
  error:'',
  supervisor:''
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  errorValidation = (error) => {
    this.setState({error:error});
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

  setSupervisor = (supervisorName) => {
    this.setState({supervisor:supervisorName});
  }
  

  render() {
    return (
      <div className="App">
        <div>
          <Logo/>
          <Navigation 
            isSignedIn={this.state.isSignedIn} 
            onRouteChange={this.onRouteChange} 
          />
          { this.state.route === 'home'
            ?  <div>
                  <Welcome supervisor = {this.state.supervisor}/>
                  <Error error = {this.state.error}/>
                  <Book supervisor = {this.state.upervisor} 
                    errorValidation = {this.errorValidation}
                  />
                  <Viewbook errorValidation = {this.errorValidation}/>
                </div>
            : <div>
                <Error error = {this.state.error}/>
                <Signin 
                  setSupervisor = {this.setSupervisor} 
                  onRouteChange={this.onRouteChange} 
                  errorValidation = {this.errorValidation}
                />
              </div>
          }
        </div>
      </div>
    );
  }
}

export default App;

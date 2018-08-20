import React from 'react';

class Signin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email : '',
			password : ''
		}
	}
	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}
	status='';
	onSubmit = () => {
		fetch('http://localhost:3000/signin',{
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({  //stringify javascript object
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(response=>{
			try{
				this.status=response.status;
			}
			catch(err){
				console.log(err);
			}
			
			return response.json();
		})
		.then(response=>{
			if(this.status === 400){
				this.props.errorValidation(response);
			}
			else{
				if(response==="not dispatcher"){
					this.props.errorValidation('The provided email id is not valid for dispatcher..try different email id');
				}
				else{
					this.props.setSupervisor(response);
					this.props.onRouteChange('home');
					this.props.errorValidation('');
				}
				
			}	
		})
		.catch(response=>this.props.errorValidation('Technical glitches...Contact Admin'))
	}

	render(){
		return(
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
						<main className="pa4 black-80">
							  <div className="measure">
							    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
							      <div className="mt3">
							        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
							        <input 
								        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
								        type="email" 
								        name="email-address"  
								        id="email-address" 
								        onChange = {this.onEmailChange}
							        />
							      </div>
							      <div className="mv3">
							        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
							        <input 
								        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
								        type="password" 
								        name="password"  
								        id="password" 
								        onChange = {this.onPasswordChange}
							        />
							      </div>
							    </fieldset>
							    <div className="">
							      <input
							      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
							      type="submit" value="Sign in" 
							      onClick={this.onSubmit}
							      //onClick={()=>this.props.onRouteChange('home')}
							      />
							    </div>
							  </div>
					    </main>
			</article>
  		)
	}
  
}

export default Signin;
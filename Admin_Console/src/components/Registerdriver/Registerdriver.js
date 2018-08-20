import React from 'react';

class Registerdriver extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email : '',
			password : '',
			name : ''
		}

	}

	
	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}
	

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onSubmitRegister = () => {

		fetch('http://localhost:3000/register',{
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({  //stringify javascript object
				email: this.state.email,
				password: this.state.password,
				name: this.state.name,
				role:'driver'

			})
		})
		.then(response=>response.json())
		.then(data=>{
			this.props.errorValidation(data);
		})
		.catch(error=>this.props.errorValidation(error))
		
	}

	render(){
	  return(
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Register Driver</legend>
				       <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
				        <input 
					        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="email" 
					        name="email-address"  
					        id="dname" 
					        onChange={this.onNameChange}
				        />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
					        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="email" 
					        name="email-address"  
					        id="demail-address" 
					        onChange={this.onEmailChange}
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
					        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
					        type="password" 
					        name="password"  
					        id="dpassword" 
					        onChange={this.onPasswordChange}
				        />
				      </div>
				    </fieldset>
				    <div className="">
				      <input
				      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      type="submit" value="Register" 
				      onClick={this.onSubmitRegister}
				      />
				    </div>
				  </div>
		    </main>
		</article>
	  )
	}
}

export default Registerdriver;
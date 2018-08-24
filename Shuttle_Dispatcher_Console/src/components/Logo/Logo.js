import React from 'react';
import logo from './logo.png'
import name from './name.png'


const Logo = () => {
	return(
			 <div className="pa3 br2 shadow-2 ma4 mt0" style={{marginTop:'20px'}}> 
			 	<img style={{height: 150, width: 150, float:'left'}} alt='logo' src={logo}/>
			 	<img style={{height: 150, width: 700, float:'center'}} alt='name' src={name}/>
			 </div>
	)
}

export default Logo;
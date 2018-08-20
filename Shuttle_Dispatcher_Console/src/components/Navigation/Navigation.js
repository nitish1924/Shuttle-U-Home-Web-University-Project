import React from 'react';

const Navigation = ({isSignedIn, onRouteChange, onHomeRouteChange}) => {
	if(!isSignedIn){
		return(
			<nav style={{display:'flex',justifyContent:'flex-end'}}>
				<p onClick={()=>onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
			</nav>
		);
    }else{
    	return(
			<nav style={{display:'flex',justifyContent:'flex-end'}}>
				{/*<p onClick={()=>onHomeRouteChange('book')} className='f3 link dim black underline pa3 pointer'>Book</p>
				<p onClick={()=>onHomeRouteChange('viewbook')}className='f3 link dim black underline pa3 pointer'>View Booking</p>*/}
				<p onClick={()=>onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
			</nav>
		);
    }
}

export default Navigation;
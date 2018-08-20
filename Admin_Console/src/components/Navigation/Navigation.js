import React from 'react';

const Navigation = ({isSignedIn, onRouteChange, onHomeRouteChange}) => {
	if(isSignedIn){
		return(
		<nav style={{display:'flex',justifyContent:'flex-end'}}>
			<p onClick={()=>onHomeRouteChange('bookinglist')} className='f3 link dim black underline pa3 pointer'>Booking List</p>
			<p onClick={()=>onHomeRouteChange('registerdriver')} className='f3 link dim black underline pa3 pointer'>Register Driver</p>
			<p onClick={()=>onHomeRouteChange('registersupervisor')} className='f3 link dim black underline pa3 pointer'>Register Supervisor</p>
			<p onClick={()=>onHomeRouteChange('employees')} className='f3 link dim black underline pa3 pointer'>Employees</p>
			<p onClick={()=>onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
		</nav>
	);
	}
	else{
		return(
		<nav style={{display:'flex',justifyContent:'flex-end'}}>
			<p onClick={()=>onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
		</nav>
	);

	}
}

export default Navigation;
import React from 'react';
import logo from './logo.jpg'
import './Logo.css'

const Logo = () => {
	return(
		<div className='ma4 mt0'>
			<img className='SUlogo br2 shadow-2' alt='logo' src={logo}/>
		</div>
	)
}

export default Logo;
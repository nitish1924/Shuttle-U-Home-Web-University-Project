import React from 'react';

const Error = ({error}) => {
	return(
		<div className='tc'>
			<h1 style={{color:'red'}}>{error}</h1>
		</div>
	)
}

export default Error;
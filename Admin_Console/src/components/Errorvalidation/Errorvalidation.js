import React from 'react';

const Errorvalidation = ({error}) => {
	return(
		<div>
			<h2 className='tc' style={{color:'red'}}>{error}</h2>
		</div>
	);
}

export default Errorvalidation;
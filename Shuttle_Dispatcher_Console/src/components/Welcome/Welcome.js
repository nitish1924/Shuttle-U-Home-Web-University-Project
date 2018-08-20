import React from 'react';

const Welcome = ({supervisor}) => {
	return(
		<div >
			<h2 className='tl'>&nbsp;&nbsp;Welcome {`${supervisor}`}</h2>
		</div>
	)
}

export default Welcome;
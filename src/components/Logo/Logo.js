import React from 'react';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<img src={brain} alt='Logo' style={{paddingTop: '3px'}} /> 
		</div>
	);
}

export default Logo;
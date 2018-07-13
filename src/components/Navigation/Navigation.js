import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<nav className='nav-bar'>
				<p onClick={() => onRouteChange('signout')} className='nav-comp dim'>Sign Out</p>
			</nav>	
		);
	}
	else {
		return (
			<div className='nav-bar'>
				<p onClick={() => onRouteChange('signin')} className='nav-comp dim'>Sign In</p>
				<p onClick={() => onRouteChange('signup')} className='nav-comp dim'>Sign Up</p>
			</div>	
		);
	}
}

export default Navigation;
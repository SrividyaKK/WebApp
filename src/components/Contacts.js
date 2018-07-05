import React from 'react';

const Contacts = ({ name, number, key }) => {
	return (
		<div className='tl'>
			<ul>
				<li><b>Name: </b>{name}</li>
				<li><b>Ph: </b>{number}</li>
			</ul>
		</div>
	);
}

export default Contacts;
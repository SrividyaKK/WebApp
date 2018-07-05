import React from 'react';

const Contacts = ({ name, number, key, relation }) => {
	return (
		<div className='tl'>
			<ul>
				<li><b>Name: </b>{name}</li>
				<li><b>Ph: </b>{number}</li>
				<li><b>Relation: </b>{relation}</li>
			</ul>
		</div>
	);
}

export default Contacts;
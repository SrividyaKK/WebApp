import React from 'react'; 
import Card from '../Card/Card';
import './CardList.css';

const CardList = ({ users }) => {
	return (	
		<div className='mt4 ml3 mr3'>
			<h1 className='tc f1 white shadow-2'>SYNDRIVE</h1>
			{
				users.map((user, i) => {
					return (
						<Card key={i} 
							id={users[i].id} 
							name={users[i].name} 
							dob={users[i].dob}
							bloodGroup={users[i].bloodGroup}
							//location
							// photo={'http://i0.wp.com/www.coldashpreschool.org.uk/wp-content/uploads/2017/01/Blank-Profile-Pic.jpg'}
							contacts={users[i].contacts}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;
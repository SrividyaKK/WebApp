import React from 'react';
import Contacts from '../Contacts';
import './Card.css'
// import SimpleMap from '../SimpleMap';
import MapWithAMarker from '../Map/Map';

const Card = ({ name, dob, bloodGroup, id, contacts, lat, lng }) => {
	const year = Number(dob.substr(4, 4));
	const month = Number(dob.substr(2, 2)) - 1;
	const day = Number(dob.substr(0, 2));
	let today = new Date();
	let age = today.getFullYear() - year;
	if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)) {
		age--;
	}

	return (
		<div className = 'tc bg-lightest-white dib br3 pa3 ma2 bw2 shadow-3 h-25 w-40'>
			<img src={`https://robohash.org/${id}?size=200x200`} alt='profile photo' 
				className='br-100 h4 w4 dib ba b--black-05 pa2 grow' 
			/>
			<div>
				<p className='f4'><b>Name: </b>{name}</p>
				<hr class="mw3 bb bw1 b--black-10" />
				<p className='f5 tl'><b>DOB: </b>{day}.{month+1}.{year} (Age: {age})</p>
				<p className='f5 tl'><b>Blood Group: </b>{bloodGroup}</p>
				<p className='f5 tl'></p>
				{/*<SimpleMap />*/}
				<MapWithAMarker
  					googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDBgA7QvYJPhmHlWV5mMskI28-3S_T0VVo&v=3.exp&libraries=geometry,drawing,places"
  					loadingElement={<div style={{ height: `100%` }} />}
  					containerElement={<div style={{ height: `400px` }} />}
  					mapElement={<div style={{ height: `100%` }} />}
  					latitude={lat}
  					longitude={lng}
				/>

				<div className='card-body'>
					<p className='f5 tl'><b>Emergency Contacts: </b></p>
					{
						contacts.map((contact, i) => {
							return (
								<Contacts key={i}
									name={contacts[i].name} 
									number={contacts[i].number}
									relation={contacts[i].relation}
								/>
							);
						})
					}
				</div>
				<input 
					className='addressbox'
					type='checkbox'
					name='action'
					value='addressed'
				/> Issue Addressed
			</div>
		</div>
	);
}

export default Card;
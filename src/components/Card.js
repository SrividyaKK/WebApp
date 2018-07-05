import React from 'react';
//const mapsapi = require( 'google-maps-api' )( 'AIzaSyBI-f0FOJkTgdaurY2Zy41GimJIFHRukGc' );

const Card = ({ name, dob, bloodGroup, id }) => {
	const year = Number(dob.substr(4, 4));
	const month = Number(dob.substr(2, 2)) - 1;
	const day = Number(dob.substr(0, 2));
	let today = new Date();
	let age = today.getFullYear() - year;
	if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)) {
		age--;
	}

	// const initMap = () => {
	// 	// The location of Uluru
	// 	var uluru = {lat: -25.344, lng: 131.036};
	// 	// The map, centered at Uluru
	// 	var map = new google.maps.Map(
	// 	    document.getElementById('map'), {zoom: 4, center: uluru});
	// 	// The marker, positioned at Uluru
	// 	var marker = new google.maps.Marker({position: uluru, map: map});
	// }

	return (
		<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
			<img src={`https://robohash.org/${id}?size=200x200`} alt='photo' />
			<div>
				<p className='f4'><b>Name: </b>{name}</p>
				<p className='f5'><b>DOB: </b>{day}.{month+1}.{year} (Age: {age})</p>
				<p className='f5'><b>Blood Group: </b>{bloodGroup}</p>
				{/*<div id="map"></div>
					<script async defer
				    	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBI-f0FOJkTgdaurY2Zy41GimJIFHRukGc&callback=initMap">
				    </script>*/}
			</div>
		</div>
	);
}

export default Card;
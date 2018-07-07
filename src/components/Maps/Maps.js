import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  	render() {
    	return (
     		<Map 
     			google={this.props.google} 
     			zoom={14} style={{width: '100%', height: '100%', position: 'relative'}} 
     			className={'map'}
     		>
	     		<Marker
				    name={'Your position'}
				    position={{lat: 37.762391, lng: -122.439192}}
				    icon={{
				    	url: "./Marker.png",
				     	anchor: new this.props.google.maps.Point(32,32),
				     	scaledSize: new this.props.google.maps.Size(64,64)
				    }} 
				/>	      
      		</Map>
    	);
  	}
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBI-f0FOJkTgdaurY2Zy41GimJIFHRukGc')
})(MapContainer)
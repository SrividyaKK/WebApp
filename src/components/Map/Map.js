import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    //const {lat, lng} = this.props;
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 10.028116, lng: 76.329238 }}
    >
        <Marker
            position={{ lat: 10.028116, lng: 76.329238 }}
        />
    </GoogleMap>
));

export default MapWithAMarker;
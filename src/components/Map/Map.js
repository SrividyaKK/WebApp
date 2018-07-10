import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    {
        const {latitude, longitude} = props;
        return (
            <GoogleMap
                defaultZoom={16}
                defaultCenter={{ lat: latitude, lng: longitude }}
            >
                <Marker
                    position={{ lat: latitude, lng: longitude }}
                />
            </GoogleMap>
        )
    }
));

export default MapWithAMarker;
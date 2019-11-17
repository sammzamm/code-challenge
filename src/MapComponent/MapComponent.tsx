import React from 'react';
import './MapComponent.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api'

// const AnyReactComponent = ({text}: any) => <div>{text}</div>;

const MapComponent: React.FC = () => {
  return (
    <div className="map-container">
      <h2>Map</h2>
      <div className="map">
        <LoadScript
          id="script-loader"
          googleMapsApiKey="KEY"

          // {...other props}
        >
          <GoogleMap
            id='map-container'
            // {...other props }
          >
            // ...Your map components
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );


}

export default MapComponent;

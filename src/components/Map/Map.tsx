import React from 'react';
import GoogleMapReact from 'google-map-react';
import { LocationOn } from '@mui/icons-material';
import { ILocation } from '../../state/interfaces';
import { API_KEY } from '../../constants/AppConstants';

interface IProps {
    location: ILocation
}

function Map({ location }: IProps) {
  return (
    <div data-testid="map" className="google-map" style={{ height: '50vh', width: '100%' }}>

      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={location}
        defaultZoom={15}
        center={location}
      >
        <LocationOn />
      </GoogleMapReact>
    </div>
  );
}

export default Map;

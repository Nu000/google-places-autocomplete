// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import { Container, Box } from '@mui/material';
import { useAppDispatch } from '../../state/reduxHooks';
import { addLocation } from '../../state/applicationSlice';
import RecentLocations from '../RecentLocations/RecentLocations';
import Map from '../Map/Map';
import { ILocation } from '../../state/interfaces';

const initialLocation: ILocation = {
  lat: 37.42216,
  lng: -122.08427,
  name: 'initial',
};

function Home() {
  const dispatch = useAppDispatch();

  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    fields: ['formatted_address', 'geometry', 'name'],
    strictBounds: false,
    types: ['establishment'],
  };

  const [location, setLocation] = useState(initialLocation);

  useEffect(() => {
    if (window.google) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        inputRef.current,
        options,
      );
      autoCompleteRef.current = autocomplete;
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry || !place.geometry.location) {
          console.log(`No details available for input: '${place.name}'`);
        } else {
          setLocation((prevState) => (
            {
              ...prevState,
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
              name: place.name || 'No name',
            }
          ));
          dispatch(addLocation({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place.name,
          }));
        }
      });
    }
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ p: 2 }}>
        <label htmlFor="address">
          Address
          <input data-testid="address" ref={inputRef} style={{ width: '400px' }} label="Type Address" />
        </label>
      </Box>
      <Map location={location} />
      <RecentLocations />
    </Container>
  );
}

export default Home;

import React from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../state/reduxHooks';
import { getLocations } from '../../state/selectors';

function RecentLocations() {
  const locations = useAppSelector(getLocations);

  return (
    <Box sx={{ p: 2 }}>
      {locations.length > 0 && <h3>Recent Locations</h3>}
      {locations.map((location) => <p key={location.lat}>{location.name}</p>)}
    </Box>
  );
}

export default RecentLocations;

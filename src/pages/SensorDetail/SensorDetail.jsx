import React from 'react';
import { Button } from '@mui/material';
import SensorMap from '../SensorMap/SensorMap';

const SensorDetail = ({ sensor, onBackClick }) => {
  return (
    <div>
      <h2>{sensor.name}</h2>
      <p>
        Coordinates: {sensor.coordinates[1]}, {sensor.coordinates[0]}
      </p>
      <SensorMap coordinates={sensor.coordinates} />
      <Button onClick={onBackClick}>Back to Overview</Button>
    </div>
  );
};

export default SensorDetail;

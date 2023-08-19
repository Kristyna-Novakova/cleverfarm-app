import React from 'react';
import { Button } from '@mui/material';
import SensorMap from '../SensorMap/SensorMap';
import '../App/app.css';

const SensorDetail = ({ sensor, onBackClick }) => {
  return (
    <div className="sensor-detail">
      <h2>{sensor.name}</h2>
      <p>
        Coordinates: {sensor.coordinates[1]}, {sensor.coordinates[0]}
      </p>
      <div className="map-container">
        <SensorMap coordinates={sensor.coordinates} />
      </div>
      <Button onClick={onBackClick}>Back to Overview</Button>
    </div>
  );
};

export default SensorDetail;

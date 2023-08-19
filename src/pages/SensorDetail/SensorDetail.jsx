import React from 'react';
import { Button, Card, CardContent } from '@mui/material';
import SensorMap from '../SensorMap/SensorMap';
import '../App/app.css';

const SensorDetail = ({ sensor, onBackClick }) => {
  return (
    <Card>
      <CardContent>
        <div className="sensor-detail">
          <h2>{sensor.name}</h2>
          <p>
            Coordinates: {sensor.coordinates[1]}, {sensor.coordinates[0]}
          </p>
          <div className="map-container">
            <SensorMap coordinates={sensor.coordinates} />
          </div>
          <Button
            variant="outlined"
            onClick={onBackClick}
            style={{ marginTop: '16px' }}
          >
            Back to Overview
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SensorDetail;

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Button,
  CssBaseline,
  Container,
} from '@mui/material';
import SensorCard from '../SensorCard/SensorCard';
import SensorDetail from '../SensorDetail/SensorDetail';
import sensorsData from '../../data/sensors.json';
import './app.css';

const App = () => {
  const [selectedSensor, setSelectedSensor] = useState(null);

  const handleSensorClick = (sensorId) => {
    const sensor = sensorsData.find((sensor) => sensor.id === sensorId);
    setSelectedSensor(sensor);
  };

  const handleBackClick = () => {
    setSelectedSensor(null);
  };

  if (selectedSensor) {
    return (
      <Container>
        <CssBaseline />
        <div className="sensor-detail">
          <SensorDetail sensor={selectedSensor} onBackClick={handleBackClick} />
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <CssBaseline />
      <div className="App">
        <h1>Farm Sensor Overview</h1>
        <div className="sensor-list">
          {sensorsData.map((sensor) => (
            <div key={sensor.id} className="sensor-card">
              <SensorCard sensor={sensor} onClick={handleSensorClick} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default App;

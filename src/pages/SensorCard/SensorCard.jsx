import React from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';

const SensorCard = ({ sensor, onClick }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {sensor.name}
        </Typography>
        <Typography>{sensor.description}</Typography>
        <Button variant="outlined" onClick={() => onClick(sensor.id)}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default SensorCard;

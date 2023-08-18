import React, { useRef, useEffect } from 'react';
import { Map, View } from 'ol';
import { Tile } from 'ol/layer';
import { OSM } from 'ol/source';

const SensorMap = ({ coordinates }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = new Map({
        target: mapRef.current,
        layers: [new Tile({ source: new OSM() })],
        view: new View({
          center: coordinates,
          zoom: 12,
        }),
      });
    }
  }, [coordinates]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default SensorMap;

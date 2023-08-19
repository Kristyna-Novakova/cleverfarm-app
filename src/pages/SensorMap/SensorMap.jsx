import React, { useRef, useEffect } from 'react';
import { Map, View } from 'ol';
import { Tile } from 'ol/layer';
import { OSM } from 'ol/source';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Style, Circle, Fill } from 'ol/style';
import '../App/app.css';

const SensorMap = ({ coordinates }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = new Map({
        target: mapRef.current,
        layers: [new Tile({ source: new OSM() })],
        view: new View({
          center: fromLonLat(coordinates),
          zoom: 12,
        }),
      });

      const sensorFeature = new Feature({
        geometry: new Point(fromLonLat(coordinates)),
      });

      sensorFeature.setStyle(
        new Style({
          image: new Circle({
            radius: 6,
            fill: new Fill({ color: 'red' }),
          }),
        }),
      );

      const vectorLayer = new VectorLayer({
        source: new VectorSource({
          features: [sensorFeature],
        }),
      });

      map.addLayer(vectorLayer);
    }
  }, [coordinates]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
};

export default SensorMap;

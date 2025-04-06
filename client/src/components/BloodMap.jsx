import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const BloodMap = () => {
  useEffect(() => {
    // This code will run after the map is rendered
    const map = L.map('map').setView([51.505, -0.09], 13); // Default to London coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker to the map
    L.marker([51.505, -0.09]).addTo(map)
      .bindPopup('This is a marker.')
      .openPopup();
              
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="h-screen w-full">
      {/* Tailwind will handle the height and width of the map */}
      <div id="map" className="w-full h-full"></div>
    </div>
  );
};

export default BloodMap;
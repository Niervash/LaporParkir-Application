import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Define a custom blue icon
const blueIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const BerandaMaps = ({
  positions = [], // Positions should be an array of [latitude, longitude]
  center = [], // Default center
  zoomLevel = 13, // Default zoom level
  className = "", // Optional className for additional styling
  onMarkerClick = (position) => {}, // Optional callback function for marker click
}) => {
  return (
    <MapContainer
      center={center}
      zoom={zoomLevel}
      style={{ height: "100%", width: "100%" }}
      className={`leaflet-container ${className}`}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {Array.isArray(positions) &&
        positions.map((position, index) => (
          <Marker
            key={index}
            position={position}
            icon={blueIcon}
            eventHandlers={{
              click: () => onMarkerClick(position),
            }}
          >
            <Popup>
              <div>
                Lokasi Petugas: {position[0]}, {position[1]}
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default BerandaMaps;

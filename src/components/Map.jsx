import { memo } from 'react';

import { useSelector } from 'react-redux';

import { MapContainer, TileLayer, useMap } from 'react-leaflet';

const Map = memo(function Map() {
  const geolocation = useSelector(({ location }) => location.geolocation);

  const MapComponent = () => {
    const map = useMap();
    map.panTo([geolocation.latitude, geolocation.longitude]);
    return null;
  };

  return (
    <div>
      <MapContainer
        center={[geolocation.latitude, geolocation.longitude]}
        zoom={10}
        scrollWheelZoom={false}
        className="map"
      >
        <MapComponent />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
});

export default Map;

import { memo } from 'react';

import { useSelector } from 'react-redux';

import { MapContainer, TileLayer, useMap } from 'react-leaflet';

const Map = memo(function Map() {
  const geolocation = useSelector(({ location }) => location.geolocation);
  const loc = geolocation.loc.split(',');

  const MapComponent = () => {
    const map = useMap();
    map.panTo([+loc[0], +loc[1]]);
    return null;
  };

  return (
    <div>
      <MapContainer
        center={[+loc[0], +loc[1]]}
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

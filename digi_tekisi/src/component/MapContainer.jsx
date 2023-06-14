

import React from "react";
import GoogleMapReact from "google-map-react";

const MapContainer = () => {
  const defaultProps = {
    center: {
      lat: 37.7749,
      lng: -122.4194,
    },
    zoom: 12,
  };

  // const renderMarkers = (map, maps) => {
  //   // Render markers for roads and taxis here
  // };

  const renderMarkers = (map, maps) => {
    const roadLocations = [
      { lat: 37.7749, lng: -122.4194 },
      { lat: 37.7751, lng: -122.4196 },
      { lat: 37.7753, lng: -122.4198 },
    ];

    const taxiLocations = [
      { lat: 37.7729, lng: -122.4301 },
      { lat: 37.7741, lng: -122.4234 },
      { lat: 37.7722, lng: -122.4201 },
    ];

    roadLocations.forEach((location) => {
      const marker = new maps.Marker({
        position: location,
        map,
        title: "Road",
        icon: {
          url: "https://maps.google.com/mapfiles/kml/shapes/road_shield3.png",
          scaledSize: new maps.Size(40, 40),
        },
      });
    });

    taxiLocations.forEach((location) => {
      const marker = new maps.Marker({
        position: location,
        map,
        title: "Taxi",
        icon: {
          url: "https://maps.google.com/mapfiles/kml/paddle/grn-blank.png",
          scaledSize: new maps.Size(40, 40),
        },
      });
    });
  };

  return (
    <div className='w-full h-[365px]'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      />
    </div>
  );
};

export default MapContainer;
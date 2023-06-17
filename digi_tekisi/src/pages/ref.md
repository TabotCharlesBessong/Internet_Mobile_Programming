import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const MapContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const defaultProps = {
    center: {
      lat: 37.7749,
      lng: -122.4194,
    },
    zoom: 12,
  };

  const renderMarkers = (map, maps) => {
    // Render markers for roads and taxis here
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    if (event.target.value.trim() !== "") {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: event.target.value }, (results, status) => {
        if (status === window.google.maps.GeocoderStatus.OK) {
          setSearchResults(
            results.map((result) => ({
              lat: result.geometry.location.lat(),
              lng: result.geometry.location.lng(),
              name: result.formatted_address,
            }))
          );
        } else {
          setSearchResults([]);
        }
      });
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (result) => {
    defaultProps.center.lat = result.lat;
    defaultProps.center.lng = result.lng;
  };

  return (
    <div className='w-full h-[365px]'>
      <div className='absolute top-0 left-0 z-10 p-4'>
        <input
          type='text'
          placeholder='Search for a location'
          value={searchValue}
          onChange={handleSearchChange}
          className='w-full px-4 py-2 text-gray-800 bg-white rounded-lg shadow-md focus:outline-none focus:shadow-outline'
        />
        {searchResults.length > 0 && (
          <ul className='py-2 mt-1 bg-white rounded-lg shadow-md'>
            {searchResults.map((result) => (
              <li
                key={result.name}
                onClick={() => handleResultClick(result)}
                className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
              >
                {result.name}
              </li>
            ))}
          </ul>
        )}
      </div>
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
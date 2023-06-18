import React from "react";
import GoogleMapReact from "google-map-react";
import { useState } from "react";

const MapContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const defaultProps = {
    center: {
      lat: 4.1521,
      lng: 9.2412,
    },
    zoom: 15,
  };

  const renderMarkers = (map, maps) => {
    function generateLocations(start, end, numPoints) {
      const locations = [start];
      const latDiff = (end.lat - start.lat) / (numPoints - 1);
      const lngDiff = (end.lng - start.lng) / (numPoints - 1);

      for (let i = 1; i < numPoints - 1; i++) {
        const lat =
          locations[i - 1].lat + latDiff + (Math.random() - 0.8) * 0.006;
        const lng =
          locations[i - 1].lng + lngDiff + (Math.random() - 0.9) * 0.006;
        locations.push({ lat, lng });
      }

      locations.push(end);
      return locations;
    }

    const bueaStart = { lat: 4.1596, lng: 9.2316 };
    const bueaEnd = { lat: 4.1343, lng: 9.2677 };

    const roadLocations = generateLocations(bueaStart, bueaEnd, 20);

    const taxiLocations = generateLocations(bueaStart, bueaEnd, 10);

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

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    if (event.target.value.trim() !== "") {
      const geocoder = new window.google.maps.Geocoder();
      const bueaBounds = {
        north: 4.1873,
        south: 4.1091,
        east: 9.2924,
        west: 9.1946,
      };
      geocoder.geocode(
        { address: event.target.value, bounds: bueaBounds },
        (results, status) => {
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
        }
      );
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (result) => {
    defaultProps.center.lat = result.lat;
    defaultProps.center.lng = result.lng;
  };

  return (
    <div className="w-full h-[365px]">
      <div className="absolute max-w-md mx-auto top-0 left-0 z-10 p-4">
        <input
          type="text"
          placeholder="Search for a location in Buea"
          value={searchValue}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 text-gray-800 bg-white rounded-lg shadow-md focus:outline-none focus:shadow-outline"
        />
        {searchResults.length > 0 && (
          <ul className="py-2 mt-1 bg-white rounded-lgshadow-md">
            {searchResults.map((result) => (
              <li
                key={result.name}
                onClick={() => handleResultClick(result)}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
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

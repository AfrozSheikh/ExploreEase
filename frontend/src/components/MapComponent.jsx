// // components/MapComponent.js
// import React, { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";



// const MapComponent = ({ destinationName }) => {
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [destinationCoords, setDestinationCoords] = useState(null);
//   const [route, setRoute] = useState([]);

//   // Fetch the traveler's current location
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.watchPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setCurrentLocation([latitude, longitude]);

//           // Update the route if destination coordinates are available
//           if (destinationCoords) {
//             setRoute([[latitude, longitude], [destinationCoords.lat, destinationCoords.lng]]);
//           }
//         },
//         (error) => {
//           console.error("Error fetching location:", error);
//         },
//         { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
//       );
//     } else {
//       console.error("Geolocation is not supported by this browser.");
//     }
//   }, [destinationCoords]);

//   // Fetch destination coordinates
//   useEffect(() => {
//     const fetchDestinationCoords = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/destination/coordinates/${destinationName}`
//         );
//         const data = await response.json();
//         setDestinationCoords(data);
//       } catch (err) {
//         console.error("Error fetching destination coordinates:", err);
//       }
//     };

//     fetchDestinationCoords();
//   }, [destinationName]);

//   if (!currentLocation || !destinationCoords) {
//     return <p>Loading map...</p>;
//   }

//   return (
//     <MapContainer
//       center={currentLocation}
//       zoom={13}
//       style={{ height: "500px", width: "100%" }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker position={currentLocation}>
//         <Popup>Your Current Location</Popup>
//       </Marker>
//       <Marker position={[destinationCoords.lat, destinationCoords.lng]}>
//         <Popup>Destination: {destinationName}</Popup>
//       </Marker>
//       <Polyline positions={route} color="blue" />
//     </MapContainer>
//   );
// };

// export default MapComponent; 

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const MapComponent = ({ destinationName }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);
  const [route, setRoute] = useState([]);
  const [distance, setDistance] = useState(null);

  // Fetch the traveler's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation([latitude, longitude]);

          // Fetch the route along roads if destination coordinates are available
          if (destinationCoords) {
            fetchRouteAlongRoads([latitude, longitude], [destinationCoords.lat, destinationCoords.lng]);
            console.log(destinationCoords);
            
          }
        },
        (error) => {
          console.error("Error fetching location:", error);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [destinationCoords]);

  // Fetch destination coordinates
  useEffect(() => {
    const fetchDestinationCoords = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/destination/coordinates/${destinationName}`
        );
        const data = await response.json();
        setDestinationCoords(data);
      } catch (err) {
        console.error("Error fetching destination coordinates:", err);
      }
    };

    fetchDestinationCoords();
  }, [destinationName]);

  // Fetch route along roads using OSRM
  const fetchRouteAlongRoads = async (start, end) => {
    try {
      const response = await axios.get(
        `http://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`
      );
      const data = response.data;
      if (data.routes && data.routes.length > 0) {
        // Extract the route coordinates
        const routeCoordinates = data.routes[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
        setRoute(routeCoordinates);

        // Extract the distance (in meters) and convert to kilometers
        const distanceInKm = (data.routes[0].distance / 1000).toFixed(2);
        setDistance(distanceInKm);
      }
    } catch (err) {
      console.error("Error fetching route along roads:", err);
    }
  };

  if (!currentLocation || !destinationCoords) {
    return <p>Loading map...</p>;
  }

  return (
    <div>
      <MapContainer
        center={currentLocation}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        {/* <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        /> */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         
        />
        <Marker position={currentLocation}>
          <Popup>Your Current Location</Popup>
        </Marker>
        <Marker position={[destinationCoords.lat, destinationCoords.lng]}>
          <Popup>Destination: {destinationName}</Popup>
        </Marker>
        <Polyline positions={route} color="blue" />
      </MapContainer>

      {/* Display Distance */}
      {distance && (
        <div>
          <p><strong>Distance:</strong> {distance} km</p>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
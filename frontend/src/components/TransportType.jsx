import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const transportTypes = ['Bus', 'Train', 'Plane'];
const transportTimes = [
  '2025-02-10 09:00 AM', '2025-02-10 10:00 AM', '2025-02-10 11:00 AM', 
  '2025-02-10 12:00 PM', '2025-02-10 01:00 PM', '2025-02-10 02:00 PM'
]; // Available departure times

// Price ranges for transport types
const transportPriceRanges = {
  Bus: { min: 600, max: 800 },
  Train: { min: 200, max: 250 },
  Plane: { min: 8000, max: 12000 },
};

function TransportType() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [transportOptions, setTransportOptions] = useState([]);
  const [selectedTransport, setSelectedTransport] = useState(null);

  useEffect(() => {
    const selectedDestination = JSON.parse(localStorage.getItem('selectedDestination'));
    if (!selectedDestination) {
      navigate('/'); // Redirect to home if no destination is selected
    } else {
      setDestination(selectedDestination);
      generateRandomTransportOptions(selectedDestination);
    }
  }, [navigate]);

  // Function to generate random transport options for the selected destination
  const generateRandomTransportOptions = (destination) => {
    const randomTransportOptions = [];
    const numberOfBuses = 2;
    const numberOfTrains = 2;
    const numberOfPlanes = 2;

    // Generate random transport options for buses, trains, and planes
    for (let i = 0; i < numberOfBuses; i++) {
      randomTransportOptions.push({
        type: 'Bus',
        departureTime: transportTimes[Math.floor(Math.random() * transportTimes.length)],
        source: 'New York',
        destination: destination.name,
        price: getRandomPrice('Bus'),
      });
    }
    for (let i = 0; i < numberOfTrains; i++) {
      randomTransportOptions.push({
        type: 'Train',
        departureTime: transportTimes[Math.floor(Math.random() * transportTimes.length)],
        source: 'Los Angeles',
        destination: destination.name,
        price: getRandomPrice('Train'),
      });
    }
    for (let i = 0; i < numberOfPlanes; i++) {
      randomTransportOptions.push({
        type: 'Plane',
        departureTime: transportTimes[Math.floor(Math.random() * transportTimes.length)],
        source: 'Chicago',
        destination: destination.name,
        price: getRandomPrice('Plane'),
      });
    }

    setTransportOptions(randomTransportOptions);
  };

  // Function to get a random price based on transport type
  const getRandomPrice = (type) => {
    const { min, max } = transportPriceRanges[type];
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Function to handle ticket booking (save selected transport to localStorage)
  const handlePayment = (transport) => {
    localStorage.setItem('selectedTransport', JSON.stringify(transport));
    navigate('/payment'); // Navigate to the payment page
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Transport Options to {destination ? destination.name : ''}
      </h2>
  
      {destination && (
        <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">{destination.name}</h3>
          <p><strong>City:</strong> {destination.city}</p>
          <p><strong>State:</strong> {destination.state}</p>
        </div>
      )}
  
      <div className="transport-list">
        <h4 className="text-lg font-medium mb-4">Available Transport:</h4>
        {transportOptions.length > 0 ? (
          transportOptions.map((option, index) => (
            <div key={index} className="transport-card mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h5 className="text-xl font-bold">{option.type}</h5>
              <p><strong>Departure Time:</strong> {option.departureTime}</p>
              <p><strong>From:</strong> {option.source}</p>
              <p><strong>To:</strong> {option.destination}</p>
              <p><strong>Price:</strong> ${option.price}</p>
              <button
                onClick={() => handlePayment(option)}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Proceed to Payment
              </button>
            </div>
          ))
        ) : (
          <p>No transport options available.</p>
        )}
      </div>
    </div>
  );
  
}

export default TransportType;
// components/TransportType.js
// components/TransportType.js
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import MapComponent from "./MapComponent";

// function TransportType() {
//   const navigate = useNavigate();
//   const [destination, setDestination] = useState(null);

//   useEffect(() => {
//     const selectedDestination = JSON.parse(localStorage.getItem("selectedDestination"));
//     if (!selectedDestination) {
//       navigate("/");
//     } else {
//       setDestination(selectedDestination);
//     }
//   }, [navigate]);

//   return (
//     <div>
//       <h2>Transport Options to {destination ? destination.name : ""}</h2>
//       {destination && (
//         <div>
//           <h3>{destination.name}</h3>
//           <p><strong>City:</strong> {destination.city}</p>
//           <p><strong>State:</strong> {destination.state}</p>
//         </div>
//       )}

//       {/* Display the map */}
//       {destination && <MapComponent destinationName={destination.name} />}
//     </div>
//   );
// }

// export default TransportType;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function TransportType() {
//   const navigate = useNavigate();
//   const [destination, setDestination] = useState(null);

//   useEffect(() => {
//     // Retrieve and store the selected destination in localStorage
//     const selectedDestination = JSON.parse(localStorage.getItem("selectedDestination"));
//     if (!selectedDestination) {
//       navigate("/");
//     } else {
//       setDestination(selectedDestination);
//     }
//   }, [navigate]);

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6 text-center">
//         Transport Options to {destination ? destination.name : ""}
//       </h2>

//       {destination && (
//         <div className="p-6 bg-gray-100 shadow-lg rounded-lg text-center">
//           <h3 className="text-xl font-semibold">{destination.name}</h3>
//           <p><strong>City:</strong> {destination.city}</p>
//           <p><strong>State:</strong> {destination.state}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TransportType;

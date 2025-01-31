import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import destinations from '../data/destinations';
import AuthContext from '../context/AuthContext';

function Destinations() {
  const navigate = useNavigate();
const {user} = useContext(AuthContext)
  const handleSelectDestination = (destination) => {
    // Save selected destination information to localStorage
    localStorage.setItem('selectedDestination', JSON.stringify(destination));
    // Navigate to Transport Type page
    navigate('/transport-type');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Destinations to Visit</h2>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-800">{destination.name}</h3>
            <p className="text-gray-600"><strong>City:</strong> {destination.city}</p>
            <p className="text-gray-600"><strong>State:</strong> {destination.state}</p>
            <p className="text-gray-600"><strong>Opens at:</strong> {destination.opensAt}</p>
            <p className="text-gray-600"><strong>Closes at:</strong> {destination.closesAt}</p>
  
           {
            user?.role==="traveler" ? ( <button
              onClick={() => handleSelectDestination(destination)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Select Destination
            </button>) : (<span> </span>) 
           }
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Destinations;

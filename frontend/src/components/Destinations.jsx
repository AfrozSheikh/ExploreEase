import React, { useContext, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import destinations from '../data/destinations';
import AuthContext from '../context/AuthContext';

function Destinations() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // State to track selected state for filtering
  const [selectedState, setSelectedState] = useState("All");
  // State to control dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Ref for detecting clicks outside the dropdown
  const dropdownRef = useRef(null);

  // Get unique states from destinations for the dropdown
  const states = ["All", ...new Set(destinations.map((destination) => destination.state))];

  // Handle destination selection
  const handleSelectDestination = (destination) => {
    localStorage.setItem('selectedDestination', JSON.stringify(destination));
    navigate('/transport-type');
  };

  // Filter destinations based on selected state
  const filteredDestinations = selectedState === "All"
    ? destinations
    : destinations.filter((destination) => destination.state === selectedState);

  // Handle click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      {/* Navbar and Dropdown */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Destinations to Visit</h2>
        <div className="relative" ref={dropdownRef}>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Filter by State
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg z-10">
              {states.map((state, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedState(state);
                    setDropdownOpen(false); // Close dropdown after selecting a state
                  }}
                  className="block w-full text-gray-800 px-4 py-2 text-left hover:bg-blue-100"
                >
                  {state}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {filteredDestinations.map((destination, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <img 
              src={destination.imageUrl} 
              alt={destination.name} 
              className="w-full h-48 object-cover transition duration-300 hover:opacity-80"
            />
            <h3 className="text-xl font-semibold text-gray-800">{destination.name}</h3>
            <p className="text-gray-600"><strong>City:</strong> {destination.city}</p>
            <p className="text-gray-600"><strong>State:</strong> {destination.state}</p>
            <p>
              {destination.opensAt === "24 hours" && destination.closesAt === "24 hours"
                ? <p className="text-gray-600">Open 24 hours</p>
                : (<div> 
                     <p className="text-gray-600"><strong>Opens at:</strong> {destination.opensAt}</p>
                     <p className="text-gray-600"><strong>Closes at:</strong> {destination.closesAt}</p>
                   </div>)}
            </p>
            <p className="text-gray-600"><strong>Best Time to Visit:</strong> {destination.bestTimeToVisit}</p>
  
            {user?.role === "traveler" ? (
              <button
                onClick={() => handleSelectDestination(destination)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Select Destination
              </button>
            ) : (
              <span></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;

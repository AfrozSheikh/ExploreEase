import React, { useState, useEffect } from "react";
import MapComponent from "../components/MapComponent"; // Adjust path if needed
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
const Location = () => {
  const [destination, setDestination] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    // Retrieve the saved destination from localStorage
    const savedDestination = JSON.parse(localStorage.getItem("selectedDestination"));
    if (savedDestination) {
      setDestination(savedDestination);
    }
  }, []);

  return (
    <div className="container mx-auto p-6">
     {
user ? (<div> <h2 className="text-2xl font-bold mb-4 text-center">Your Selected Destination</h2>

    {destination  ? (
      <div className="p-6 bg-gray-100 shadow-lg rounded-lg text-center">
        <h3 className="text-xl font-semibold">{destination.name}</h3>
        <p><strong>City:</strong> {destination.city}</p>
        <p><strong>State:</strong> {destination.state}</p>

        {/* Display MapComponent for this destination */}
        <div className="mt-6">
          <MapComponent destinationName={destination.name} />
        </div>
      </div>
    ) : (
      <p className="text-center text-red-500">No destination selected.</p>
    )} </div>) :(<div> You Are Not Authorized to access this page  </div>) 

     }
    </div>
  );
};

export default Location;

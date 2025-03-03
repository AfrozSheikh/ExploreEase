import React, { useState, useEffect } from "react";
import MapComponent from "../components/MapComponent"; // Adjust path if needed
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

const Location = () => {
  const [userCity, setUserCity] = useState(null);
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div className="text-center text-red-500">You are not authorized to access this page</div>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Show User's City on top */}
      {userCity && (
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold mb-4 text-center">
            <strong>Your Current Location:</strong> {userCity}
          </h3>
        </div>
      )}

      {/* Display Destination Details */}
      {user.selectedDestination ? (
        <div className="p-6 bg-gray-100 shadow-lg rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-center">Your Selected Destination</h2>
          <h3 className="text-xl font-semibold">{user.selectedDestination.name}</h3>
          <p><strong>City:</strong> {user.selectedDestination.city}</p>
          <p><strong>State:</strong> {user.selectedDestination.state}</p>

          {/* Display MapComponent for this destination */}
          <div className="mt-6">
            <MapComponent destinationName={user.selectedDestination.name} setUserCity={setUserCity} />
          </div>
        </div>
      ) : (
        <p className="text-center text-red-500">No destination selected.</p>
      )}
    </div>
  );
};

export default Location;

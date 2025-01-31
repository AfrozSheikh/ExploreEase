import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext'; // Import AuthContext
import { Link } from 'react-router-dom';
function Profile() {
  const { user } = useContext(AuthContext);  // Access user data from context
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [ticketDetails, setTicketDetails] = useState(null);  // State for ticket details

  useEffect(() => {
    // Get the selected guide from localStorage if available
    const guide = JSON.parse(localStorage.getItem('selectedGuide'));
    setSelectedGuide(guide);

    // Get the ticket details from localStorage if available
    const ticket = JSON.parse(localStorage.getItem('ticketDetails'));
    setTicketDetails(ticket);
  }, []);

  // Check if user is null or loading
  if (!user) {
    return <div className="text-center">Loading...</div>; // You can add a loading spinner or a message
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
        {user.role === "traveler" ? "Traveler's Profile" : "Guide Profile"}
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
  
        {/* Display user details fetched from context */}
        <div className="mb-4">
          <p className="text-lg"><strong>Name:</strong> {user?.name}</p>
          <p className="text-lg"><strong>Email:</strong> {user?.email}</p>
         
    

        </div>
  
        {user.role === "traveler" && (
          <div>
            {/* If a guide is selected, display the guide details */}
            {selectedGuide && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Booked Guide:</h3>
                <p className="text-lg">{selectedGuide.name}</p>
                <p className="text-lg">{selectedGuide.email}</p>
                <p className="text-lg">{selectedGuide.gender}</p>
              </div>
            )}
  
            {/* Display ticket details if available */}
            {ticketDetails && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Your Ticket:</h3>
                <p className="text-lg"><strong>Transport:</strong> {ticketDetails.transport.type}</p>
                <p className="text-lg"><strong>Departure Time:</strong> {ticketDetails.transport.departureTime}</p>
                <p className="text-lg"><strong>From:</strong> {ticketDetails.transport.source}</p>
                <p className="text-lg"><strong>To:</strong> {ticketDetails.transport.destination}</p>
                <p className="text-lg"><strong>Price:</strong> ${ticketDetails.transport.price}</p>


                <div className="mt-4">
    <Link
      to="/location"
      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
    >
      Track
    </Link>
  </div>
              </div>
            )}
          </div>
        )}




      </div>
    </div>
  );
}

export default Profile;

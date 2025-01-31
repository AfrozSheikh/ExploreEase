import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookTicket() {
  const navigate = useNavigate();
  const [selectedTransport, setSelectedTransport] = useState(null);

  useEffect(() => {
    const transport = JSON.parse(localStorage.getItem('selectedTransport'));
    if (!transport) {
      navigate('/'); // Redirect to home if no transport is selected
    } else {
      setSelectedTransport(transport);
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Ticket</h2>
      
      {selectedTransport ? (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Ticket for {selectedTransport.type}</h3>
          <p className="text-gray-600"><strong>Departure Time:</strong> {selectedTransport.departureTime}</p>
          <p className="text-gray-600"><strong>From:</strong> {selectedTransport.source}</p>
          <p className="text-gray-600"><strong>To:</strong> {selectedTransport.destination}</p>
          <p className="text-gray-800 font-semibold mt-4"><strong>Price:</strong> ${selectedTransport.price}</p>
        </div>
      ) : (
        <p className="text-gray-600 text-lg">No transport selected.</p>
      )}
    </div>
  );
  
}

export default BookTicket;

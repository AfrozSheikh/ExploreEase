// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import AuthContext from '../context/AuthContext'; // Import AuthContext

// function Payment() {
//   const { user } = useContext(AuthContext); // Access user data and token from context
//   console.log(user);

//   const navigate = useNavigate();
//   const [selectedTransport, setSelectedTransport] = useState(null);
//   const [paymentStatus, setPaymentStatus] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [progress, setProgress] = useState(0); // For simulating progress
//   const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);

//   useEffect(() => {
//     const transport = JSON.parse(localStorage.getItem('selectedTransport'));
//     if (!transport) {
//       navigate('/'); // Redirect to home if no transport is selected
//     } else {
//       setSelectedTransport(transport);
//     }
//   }, [navigate]);

//   // Ensure user data is available before proceeding
//   if (!user) {
//     return <div>Loading...</div>; // Or redirect the user to login page or handle the case
//   }

//   const handlePayment = () => {
//     setLoading(true);
//     setPaymentStatus("Processing payment... Please wait.");
//     let paymentProgress = 0;

//     const interval = setInterval(() => {
//       if (paymentProgress < 100) {
//         paymentProgress += 10;
//         setProgress(paymentProgress);
//       } else {
//         clearInterval(interval);
//         // Simulate a successful transaction after payment progress is 100%
//         setPaymentStatus('Payment Successful! Thank you for your booking.');
//         setIsPaymentConfirmed(true);

//         // Store ticket details along with user info in localStorage after payment success
//         const ticketDetails = {
//           name: user.name,  // Use user data from context
//           email: user.email, // Use user data from context
//           transport: selectedTransport,
//         };
//         localStorage.setItem('ticketDetails', JSON.stringify(ticketDetails));

//         // Optionally, clear the transport details after payment
//         // localStorage.removeItem('selectedTransport');

//         // Redirect to profile page or booking confirmation after a brief delay
//         setTimeout(() => {
//           navigate('/book-guide');
//         }, 2000);
//       }
//     }, 500); // Simulate progress every 500ms
//   };

//   return (
//     <div className="container mx-auto p-6">
//       {user.role === "traveler" ? (
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
//           {selectedTransport ? (
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold mb-4">Your Transport: {selectedTransport.type}</h3>
//               <p><strong>Departure Time:</strong> {selectedTransport.departureTime}</p>
//               <p><strong>From:</strong> {selectedTransport.source}</p>
//               <p><strong>To:</strong> {selectedTransport.destination}</p>
//               <p><strong>Price:</strong> ${selectedTransport.price}</p>

//               {/* Pre-Transaction Step */}
//               {!isPaymentConfirmed && !loading && (
//                 <div className="mt-4">
//                   <h4 className="text-lg font-semibold">Confirm Payment</h4>
//                   <p>Please confirm the payment details before proceeding.</p>
//                   <button
//                     onClick={handlePayment}
//                     className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
//                   >
//                     Proceed to Payment
//                   </button>
//                 </div>
//               )}

//               {/* Payment Processing Section */}
//               {loading && !isPaymentConfirmed && (
//                 <div className="mt-4">
//                   <h4 className="text-lg font-semibold">Processing Your Payment...</h4>
//                   <p>{paymentStatus}</p>
//                   <div className="relative pt-1">
//                     <div className="flex mb-2 items-center justify-between">
//                       <div>
//                         <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
//                           Transaction Progress: {progress}%
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex mb-2">
//                       <div className="w-full bg-gray-200 rounded-full h-2.5">
//                         <div
//                           className="bg-teal-500 h-2.5 rounded-full"
//                           style={{ width: `${progress}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Payment Confirmation */}
//               {isPaymentConfirmed && (
//                 <div className="mt-4 text-green-600">
//                   <h4 className="text-lg font-semibold">{paymentStatus}</h4>
//                   <p>Your payment was successfully processed!</p>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <p>No transport selected.</p>
//           )}
//         </div>
//       ) : (
//         <div>You are not authorized to access this page</div>
//       )}
//     </div>
//   );
// }

// export default Payment;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import {QRCodeSVG} from 'qrcode.react'; // Import QRCode generator

function Payment() {
  const { user } = useContext(AuthContext);
  console.log(user);

  const navigate = useNavigate();
  const [selectedTransport, setSelectedTransport] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);
  const [showGateway, setShowGateway] = useState(false);

  useEffect(() => {
    const transport = JSON.parse(localStorage.getItem('selectedTransport'));
    if (!transport) {
      navigate('/');
    } else {
      setSelectedTransport(transport);
    }
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleProceedToGateway = () => {
    setShowGateway(true);

    setTimeout(() => {
      setShowGateway(false);
      handlePayment();
    }, 6000);
  };

  const handlePayment = () => {
    setLoading(true);
    setPaymentStatus("Processing payment... Please wait.");
    let paymentProgress = 0;

    const interval = setInterval(() => {
      if (paymentProgress < 100) {
        paymentProgress += 50;
        setProgress(paymentProgress);
      } else {
        clearInterval(interval);
        setPaymentStatus('Payment Successful! Thank you for your booking.');
        setIsPaymentConfirmed(true);

        const ticketDetails = {
          name: user.name,
          email: user.email,
          transport: selectedTransport,
        };
        localStorage.setItem('ticketDetails', JSON.stringify(ticketDetails));

        setTimeout(() => {
          navigate('/book-guide');
        }, 2000);
      }
    }, 500);
  };

  return (
    <div className="container mx-auto p-6">
      {user.role === "traveler" ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
          {selectedTransport ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Your Transport: {selectedTransport.type}</h3>
              <p><strong>Departure Time:</strong> {selectedTransport.departureTime}</p>
              <p><strong>From:</strong> {selectedTransport.source}</p>
              <p><strong>To:</strong> {selectedTransport.destination}</p>
              <p><strong>Price:</strong> ${selectedTransport.price}</p>

              {/* Payment Gateway with QR Code */}
              {showGateway && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-semibold mb-4">Scan to Pay</h3>
                    <p>Use any QR scanner to simulate the payment.</p>
                    
                    {/* QR Code Generator */}
                    <div className="flex justify-center my-4">
                      <QRCodeSVG
                        value={`PAYMENT:${selectedTransport.price} USD for ${selectedTransport.type}`}
                        size={150}
                        bgColor="#ffffff"
                        fgColor="#000000"
                      />
                    </div>

                    <p className="text-gray-500">Waiting for confirmation...</p>
                  </div>
                </div>
              )}

              {!isPaymentConfirmed && !loading && !showGateway && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Confirm Payment</h4>
                  <p>Please confirm the payment details before proceeding.</p>
                  <button
                    onClick={handleProceedToGateway}
                    className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Proceed to Payment
                  </button>
                </div>
              )}

              {loading && !isPaymentConfirmed && !showGateway && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Processing Your Payment...</h4>
                  <p>{paymentStatus}</p>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                          Transaction Progress: {progress}%
                        </span>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-teal-500 h-2.5 rounded-full"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {isPaymentConfirmed && (
                <div className="mt-4 text-green-600">
                  <h4 className="text-lg font-semibold">{paymentStatus}</h4>
                  <p>Your payment was successfully processed!</p>
                </div>
              )}
            </div>
          ) : (
            <p>No transport selected.</p>
          )}
        </div>
      ) : (
        <div>You are not authorized to access this page</div>
      )}
    </div>
  );
}

export default Payment;

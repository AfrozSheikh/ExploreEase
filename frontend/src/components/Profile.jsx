import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Clock, IndianRupee, Bus, Mail, Ticket } from 'lucide-react';

function Profile() {
  const { user } = useContext(AuthContext);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [ticketDetails, setTicketDetails] = useState(null);

  useEffect(() => {
    const guide = JSON.parse(localStorage.getItem('selectedGuide'));
    setSelectedGuide(guide);

    const ticket = JSON.parse(localStorage.getItem('ticketDetails'));
    setTicketDetails(ticket);
  }, []);

  if (!user) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center items-center h-screen"
      >
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </motion.div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        {/* Profile Header */}
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-2xl p-8 text-white"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-full">
              <User size={40} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">
                {user.role === "traveler" ? "Traveler's Profile" : "Guide Profile"}
              </h2>
              <p className="text-blue-100 mt-1">{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
            </div>
          </div>
        </motion.div>

        {/* User Details Card */}
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-b-2xl shadow-lg p-8"
        >
          <div className="space-y-4">
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-3"
            >
              <User className="text-blue-600" />
              <p className="text-lg"><strong>Name:</strong> {user?.name}</p>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-3"
            >
              <Mail className="text-blue-600" />
              <p className="text-lg"><strong>Email:</strong> {user?.email}</p>
            </motion.div>
          </div>

          {user.role === "traveler" && (
            <motion.div variants={containerVariants} className="mt-8 space-y-6">
              {selectedGuide && (
                <motion.div 
                  variants={itemVariants}
                  className="bg-blue-50 p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <User className="mr-2 text-blue-600" />
                    Booked Guide
                  </h3>
                  <div className="space-y-2 ml-8">
                    <p className="text-lg">{selectedGuide.name}</p>
                    <p className="text-lg">{selectedGuide.email}</p>
                    <p className="text-lg">{selectedGuide.gender}</p>
                  </div>
                </motion.div>
              )}

              {ticketDetails && (
                <motion.div 
                  variants={itemVariants}
                  className="bg-blue-50 p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Ticket className="mr-2 text-blue-600" />
                    Your Ticket
                  </h3>
                  <div className="space-y-3 ml-8">
                    <div className="flex items-center space-x-3">
                      <Bus className="text-blue-600" />
                      <p className="text-lg"><strong>Transport:</strong> {ticketDetails.transport.type}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="text-blue-600" />
                      <p className="text-lg"><strong>Departure:</strong> {ticketDetails.transport.departureTime}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-blue-600" />
                      <p className="text-lg"><strong>From:</strong> {ticketDetails.transport.source}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-blue-600" />
                      <p className="text-lg"><strong>To:</strong> {ticketDetails.transport.destination}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <IndianRupee className="text-blue-600" />
                      <p className="text-lg"><strong>Price:</strong> ₹{ticketDetails.transport.price}</p>
                    </div>
                  </div>

                  <motion.div 
                    variants={itemVariants}
                    className="mt-6"
                  >
                    <Link
                      to="/location"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                    >
                      <MapPin className="mr-2" />
                      Track Journey
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Profile;
import React, { useContext, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import destinations from '../data/destinations';
import AuthContext from '../context/AuthContext';

function Destinations() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [selectedState, setSelectedState] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  
  const dropdownRef = useRef(null);

  const states = ["All", ...new Set(destinations.map((destination) => destination.state))];

  const handleSelectDestination = (destination) => {
    localStorage.setItem('selectedDestination', JSON.stringify(destination));
    navigate('/transport-type');
  };

  const filteredDestinations = selectedState === "All"
    ? destinations
    : destinations.filter((destination) => destination.state === selectedState);

  // Calculate pagination
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredDestinations.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(filteredDestinations.length / cardsPerPage);

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedState]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center bg-gray-100 p-6"
    >
      <div className="w-full max-w-6xl flex justify-between items-center mb-6">
        <motion.h2 
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-gray-800"
        >
          Destinations to Visit
        </motion.h2>
        <div className="relative" ref={dropdownRef}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Filter by State
          </motion.button>
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg z-10"
              >
                {states.map((state, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ backgroundColor: '#EBF5FF' }}
                    onClick={() => {
                      setSelectedState(state);
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-gray-800 px-4 py-2 text-left"
                  >
                    {state}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
      >
        <AnimatePresence mode="wait">
          {currentCards.map((destination, index) => (
            <motion.div
              key={destination.name}
              variants={item}
              layout
              className="bg-white shadow-lg rounded-lg p-6"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={destination.imageUrl} 
                alt={destination.name} 
                className="w-full h-48 object-cover"
              />
              <motion.h3 className="text-xl font-semibold text-gray-800 mt-4">
                {destination.name}
              </motion.h3>
              <p className="text-gray-600"><strong>City:</strong> {destination.city}</p>
              <p className="text-gray-600"><strong>State:</strong> {destination.state}</p>
              <div>
                {destination.opensAt === "24 hours" && destination.closesAt === "24 hours"
                  ? <p className="text-gray-600">Open 24 hours</p>
                  : (<div> 
                       <p className="text-gray-600"><strong>Opens at:</strong> {destination.opensAt}</p>
                       <p className="text-gray-600"><strong>Closes at:</strong> {destination.closesAt}</p>
                     </div>)}
              </div>
              <p className="text-gray-600"><strong>Best Time to Visit:</strong> {destination.bestTimeToVisit}</p>
    
              {user?.role === "traveler" && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelectDestination(destination)}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Select Destination
                </motion.button>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 flex gap-2"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === 1 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Previous
          </motion.button>
          <span className="flex items-center px-4">
            Page {currentPage} of {totalPages}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Next
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Destinations;
import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-6 py-12">

      {/* Hero Section with Animation */}
      <motion.section 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold text-blue-600 md:text-5xl">
          Welcome to ExploreEase
        </h1>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Your Ultimate Travel Companion – Plan, Explore & Experience!
        </p>
      </motion.section>

      {/* Features Section with Animation */}
      <motion.section 
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full mb-16"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div 
          className="bg-white shadow-xl rounded-lg p-8 text-center transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-800">🌍 Discover Destinations</h3>
          <p className="text-gray-600 mt-2">
            Explore top-rated destinations with detailed info on location, hours, and transport options.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white shadow-xl rounded-lg p-8 text-center transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-800">🚌 Book Your Transport</h3>
          <p className="text-gray-600 mt-2">
            Choose from bus, train, or plane transport options for your trip – all in one place.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white shadow-xl rounded-lg p-8 text-center transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-800">👨‍💼 Hire a Guide</h3>
          <p className="text-gray-600 mt-2">
            Book a professional guide (male/female) to enhance your travel experience.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white shadow-xl rounded-lg p-8 text-center transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-800">📍 Live Travel Tracking</h3>
          <p className="text-gray-600 mt-2">
            Track your journey in real-time and never miss an update on your travel progress.
          </p>
        </motion.div>
      </motion.section>

      {/* Additional Content - Why Choose Us Section */}
      <motion.section 
        className="text-center max-w-5xl w-full mb-16"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Why Choose ExploreEase?</h2>
        <p className="text-lg text-gray-600 mb-8">
          At ExploreEase, we simplify travel planning by offering a complete solution to help you plan, book, and enjoy your trip without stress.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8">
          <motion.div
            className="bg-white shadow-xl rounded-lg p-8 w-72 text-center transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-gray-800">✈️ Seamless Booking</h3>
            <p className="text-gray-600 mt-2">
              Book your entire trip, from transport to hotels, in one place with minimal effort.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-xl rounded-lg p-8 w-72 text-center transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-gray-800">🌍 Global Reach</h3>
            <p className="text-gray-600 mt-2">
              Whether you're traveling locally or internationally, we have you covered.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-xl rounded-lg p-8 w-72 text-center transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-gray-800">🗺️ Customizable Plans</h3>
            <p className="text-gray-600 mt-2">
              Tailor your travel plans to suit your preferences with ease, anytime.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Call-to-Action with Animation */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 1.5 }}
      >
        <a 
          href="/destinations" 
          className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          Start Exploring
        </a>
      </motion.div>
    </div>
  );
}

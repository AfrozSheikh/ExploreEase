import React from 'react';

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-600 md:text-5xl">
          Welcome to ExploreEase
        </h1>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Your Ultimate Travel Companion – Plan, Explore & Experience!
        </p>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold text-gray-800">🌍 Discover Destinations</h3>
          <p className="text-gray-600 mt-2">
            Explore top-rated destinations with details like location, hours, and transport options.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold text-gray-800">🚌 Book Your Transport</h3>
          <p className="text-gray-600 mt-2">
            Choose from multiple transport options – Bus, Train, or Plane, all at your fingertips.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold text-gray-800">👨‍💼 Hire a Guide</h3>
          <p className="text-gray-600 mt-2">
            Need help? Book a professional guide (male/female) and enhance your experience.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold text-gray-800">📍 Live Travel Tracking</h3>
          <p className="text-gray-600 mt-2">
            Track your trip in real-time and never miss an update.
          </p>
        </div>
      </section>

      {/* Call-to-Action */}
      <div className="mt-12">
        <a 
          href="/destinations" 
          className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          Start Exploring
        </a>
      </div>
    </div>
  );
}



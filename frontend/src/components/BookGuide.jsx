import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
function BookGuide() {
  const [guides, setGuides] = useState([]);
  const navigate = useNavigate();

  // Fetch guides when the component mounts
  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const response = await axios.get('http://localhost:5000/guides/all');
        setGuides(response.data); // Assuming the API returns an array of guides
      } catch (error) {
        console.error('Error fetching guides:', error);
      }
    };

    fetchGuides();
  }, []);

  const handleBookGuide = async (guide) => {
    try {
      // Send the selected guide to the backend
      const response = await axios.post(
        "http://localhost:5000/user/book-guide",
        {
          guideId: guide._id,
          guideName: guide.name,
          guideEmail: guide.email,
          guideGender: guide.gender,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure user is authenticated
          },
        }
      );
  
      // Store the selected guide in localStorage (optional)
      localStorage.setItem("selectedGuide", JSON.stringify(guide));
  
      // Show success message
      toast.success(response.data.message);
  
      // Navigate to profile after 3 seconds
      setTimeout(() => {
        navigate("/profile");
      }, 3000);
    } catch (error) {
      console.error("Error booking guide:", error);
      toast.error("Failed to book guide. Please try again.");
    }
  };
  

  const handleSkip = () => {
    // Navigate back to the BookGuide page if traveler skips booking
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Book a Guide</h2>
      <p className="text-lg text-gray-600 mb-6">Select a guide for your journey:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {guides.map((guide, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">{guide.name}</h3>
            <p className="text-gray-600">{guide.email}</p>
            <p className="text-gray-600">{guide.gender}</p>
            <button 
              onClick={() => handleBookGuide(guide)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Book Guide
            </button>
          </div>
        ))}
      </div>
  
      {/* Skip Button */}
      <button 
        className="mt-6 px-6 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 transition duration-300"
        onClick={handleSkip}
      >
        Skip
      </button>
    </div>
  );
  
}

export default BookGuide;

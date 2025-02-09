import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import toast from 'react-hot-toast';

function GuideDashboard() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [availability, setAvailability] = useState(user?.availability || false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch guide's current availability on component mount
  useEffect(() => {
    if (user?.role === 'traveler') {
      navigate('/'); // Redirect non-guides to the home page
    }
  }, [user, navigate]);

  // Function to update availability
  const handleUpdateAvailability = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.put(
        'http://localhost:5000/guides/update-availability',
        { availability },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      toast.success(response.data.message);
    } catch (err) {
      setError("Updated" || 'Failed to update availability');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Guide Dashboard</h2>
  
      {user && (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
          <h3 className="text-xl font-semibold text-gray-800">Welcome, {user.name}!</h3>
          <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
          <p className="text-gray-600"><strong>Role:</strong> {user.role}</p>
          <p className="text-gray-600"><strong>Gender:</strong> {user.gender}</p>
       
          <p className="text-gray-600">
            <strong>Current Availability:</strong>{' '}
            <span className={availability ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
              {availability ? 'Available' : 'Not Available'}
            </span>
          </p>
  
          <div className="mt-4 flex flex-col items-center">
            <label className="flex items-center space-x-2 text-gray-700">
              <span>Update Availability:</span>
              <input
                type="checkbox"
                checked={availability}
                onChange={(e) => setAvailability(e.target.checked)}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
            </label>
  
            <button
              onClick={handleUpdateAvailability}
              disabled={loading}
              className={`mt-4 px-4 py-2 rounded-lg transition ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {loading ? 'Updating...' : 'Update'}
            </button>
          </div>
  
          {error && <p className="mt-4 text-red-600">{error}</p>}
        </div>
      )}
    </div>
  );
  
}

export default GuideDashboard;
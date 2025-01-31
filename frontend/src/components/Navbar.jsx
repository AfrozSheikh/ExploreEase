import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";


function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to home after logout
  };
  return (
    <nav className="bg-blue-600 p-4">
      <div className="flex justify-between items-center container mx-auto">
        <div className="text-white font-bold text-xl">
          <Link to="/" className="hover:text-gray-300">
            ExploreEase
          </Link>
        </div>
        <div className="space-x-6 text-white">
          <Link to="/" className="hover:text-gray-300">Home</Link>
         <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/destinations" className="hover:text-gray-300"> Destinations</Link>
          
          
  
          {user ? (
           <div> <Link to="/profile" className="hover:text-gray-300">Profile</Link>
             <button
              className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded-md"
              onClick={handleLogout}
            >
              Logout
            </button>
           </div>
          ) : (
            <Link to="/login" className="hover:text-gray-300">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
  
}

export default Navbar;

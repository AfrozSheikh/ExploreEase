import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false); // For profile dropdown

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to home after logout
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold hover:text-gray-300 transition">
          ExploreEase
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white items-center">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition">About</Link>
          <Link to="/destinations" className="hover:text-gray-300 transition">Destinations</Link>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="hover:text-gray-300 transition focus:outline-none"
              >
                Profile ▼
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md py-2 text-gray-800 z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setProfileOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                    onClick={() => {
                      handleLogout();
                      setProfileOpen(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="hover:text-gray-300 transition">Login</Link>
          )}

          {user?.role === "guide" && (
            <Link to="/guide-dashboard" className="hover:text-gray-300 transition">Dashboard</Link>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 text-white p-4 space-y-4">
          <Link to="/" className="block hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/destinations" className="block hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>Destinations</Link>

          {user ? (
            <>
              <Link to="/profile" className="block hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>Profile</Link>
              <button
                className="block w-full text-left hover:text-red-400 transition"
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="block hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>Login</Link>
          )}

          {user?.role === "guide" && (
            <Link to="/guide-dashboard" className="block hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;


// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import AuthContext from "../context/AuthContext";


// function Navbar() {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/"); // Redirect to home after logout
//   };
//   return (
//     <nav className="bg-blue-600 p-4">
//       <div className="flex justify-between items-center container mx-auto">
//         <div className="text-white font-bold text-xl">
//           <Link to="/" className="hover:text-gray-300">
//             ExploreEase
//           </Link>
//         </div>
//         <div className="space-x-6 text-white">
//           <Link to="/" className="hover:text-gray-300">Home</Link>
//          <Link to="/about" className="hover:text-gray-300">About</Link>
//           <Link to="/destinations" className="hover:text-gray-300"> Destinations</Link>
          
          
  
//           {user ? (
//            <div> <Link to="/profile" className="hover:text-gray-300">Profile</Link>
//              <button
//               className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded-md"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//            </div>
//           ) : (
//             <Link to="/login" className="hover:text-gray-300">Login</Link>
//           )}

//           {
//             user?.role==='guide' ? (<Link to="/guide-dashboard" className="hover:text-gray-300"> DashBoard</Link>) : (<span> </span>) 
//           }
//         </div>
//       </div>
//     </nav>
//   );
  
// }

// export default Navbar;


// import React, { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu
// import AuthContext from "../context/AuthContext";

// function Navbar() {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate("/"); // Redirect to home after logout
//   };

//   return (
//     <nav className="bg-blue-600 p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
        
//         {/* Logo */}
//         <Link to="/" className="text-white text-2xl font-bold hover:text-gray-300 transition">
//           ExploreEase
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 text-white">
//           <Link to="/" className="hover:text-gray-300 transition">Home</Link>
//           <Link to="/about" className="hover:text-gray-300 transition">About</Link>
//           <Link to="/destinations" className="hover:text-gray-300 transition">Destinations</Link>

//           {user ? (
//             <div className="relative group">
//               <button className="hover:text-gray-300 transition">
//                 Profile ▼
//               </button>
//               <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40 text-gray-800 mt-2">
//                 <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
//                 <button
//                   className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <Link to="/login" className="hover:text-gray-300 transition">Login</Link>
//           )}

//           {user?.role === "guide" && (
//             <Link to="/guide-dashboard" className="hover:text-gray-300 transition">Dashboard</Link>
//           )}
//         </div>

//         {/* Mobile Menu Icon */}
//         <button
//           className="md:hidden text-white text-2xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-blue-700 text-white p-4 space-y-4">
//           <Link to="/" className="block hover:text-gray-300 transition">Home</Link>
//           <Link to="/about" className="block hover:text-gray-300 transition">About</Link>
//           <Link to="/destinations" className="block hover:text-gray-300 transition">Destinations</Link>

//           {user ? (
//             <>
//               <Link to="/profile" className="block hover:text-gray-300 transition">Profile</Link>
//               <button
//                 className="block w-full text-left hover:text-red-400 transition"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <Link to="/login" className="block hover:text-gray-300 transition">Login</Link>
//           )}

//           {user?.role === "guide" && (
//             <Link to="/guide-dashboard" className="block hover:text-gray-300 transition">Dashboard</Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

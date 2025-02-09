import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Toaster, toast } from "react-hot-toast";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("traveler");
  const [gender, setGender] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { name, email, password, role };
      if (role === "guide") payload.gender = gender;

      const response = await axios.post("http://localhost:5000/auth/signup", payload);

      login(response.data.token, response.data.user);
      
      toast.success("Sign Up Successful"); // ✅ Show toast before navigating

      setTimeout(() => {
        navigate("/login");
      }, 1500); // ✅ Delay navigation slightly to ensure the toast is visible
    } catch (err) {
      toast.error("Signup Failed: " + (err.response?.data?.error || err.message)); // ✅ Error toast
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-600">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-4">
          Create an Account
        </h2>
        <p className="text-gray-600 text-center mb-6">Join us and explore amazing destinations!</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />

          <div className="flex flex-col space-y-2">
            <label className="text-gray-700 font-medium">Select Role</label>
            <select
              onChange={(e) => setRole(e.target.value)}
              value={role}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            >
              <option value="traveler">Traveler</option>
              <option value="guide">Guide</option>
            </select>
          </div>

          {role === "guide" && (
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700 font-medium">Select Gender</label>
              <select
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-700">Already have an account?</p>
          <button
            onClick={() => navigate("/login")}
            className="mt-2 text-blue-600 font-semibold hover:underline"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;




// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import AuthContext from '../context/AuthContext';

// function Signup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('traveler');
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/auth/signup', {
//         name,
//         email,
//         password,
//         role
//       });
//       alert('Signup Successful');
//       login(response.data.token, response.data.user); // Log the user in after signup
//       navigate('/');
//     } catch (err) {
//       alert('Error during signup: ' + err.response.data.error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
  
//         <div className="mb-4">
//           <input 
//             type="text" 
//             placeholder="Name" 
//             value={name} 
//             onChange={(e) => setName(e.target.value)} 
//             required 
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
  
//         <div className="mb-4">
//           <input 
//             type="email" 
//             placeholder="Email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             required 
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
  
//         <div className="mb-4">
//           <input 
//             type="password" 
//             placeholder="Password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             required 
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
  
//         <div className="mb-4">
//           <select 
//             onChange={(e) => setRole(e.target.value)} 
//             value={role} 
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="traveler">Traveler</option>
//             <option value="guide">Guide</option>
//           </select>
//         </div>
  
//         <button 
//           type="submit" 
//           className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
  
// }

// export default Signup;
// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import AuthContext from '../context/AuthContext';

// function Signup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('traveler');
//   const [gender, setGender] = useState(''); // New state for gender
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = { name, email, password, role };

//       // Include gender only if the role is "guide"
//       if (role === 'guide') {
//         payload.gender = gender;
//       }

//       const response = await axios.post('http://localhost:5000/auth/signup', payload);
//       alert('Signup Successful');
//       login(response.data.token, response.data.user); // Log the user in after signup
//       navigate('/');
//     } catch (err) {
//       alert('Error during signup: ' + err.response?.data?.error || err.message);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
  
//         <div className="mb-4">
//           <input 
//             type="text" 
//             placeholder="Name" 
//             value={name} 
//             onChange={(e) => setName(e.target.value)} 
//             required 
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
  
//         <div className="mb-4">
//           <input 
//             type="email" 
//             placeholder="Email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             required 
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
  
//         <div className="mb-4">
//           <input 
//             type="password" 
//             placeholder="Password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             required 
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
  
//         <div className="mb-4">
//           <select 
//             onChange={(e) => setRole(e.target.value)} 
//             value={role} 
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="traveler">Traveler</option>
//             <option value="guide">Guide</option>
//           </select>
//         </div>

//         {/* Show gender selection only if role is "guide" */}
//         {role === 'guide' && (
//           <div className="mb-4">
//             <select
//               onChange={(e) => setGender(e.target.value)}
//               value={gender}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//           </div>
//         )}
  
//         <button 
//           type="submit" 
//           className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Signup;

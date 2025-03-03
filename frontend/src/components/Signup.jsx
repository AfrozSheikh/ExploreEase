// import React, { useState, useContext } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import AuthContext from "../context/AuthContext";
// import { Toaster, toast } from "react-hot-toast";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("traveler");
//   const [gender, setGender] = useState("");
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = { name, email, password, role };
//       if (role === "guide") payload.gender = gender;

//       const response = await axios.post("http://localhost:5000/auth/signup", payload);

//       login(response.data.token, response.data.user);
      
//       toast.success("Sign Up Successful"); // ✅ Show toast before navigating

//       setTimeout(() => {
//         navigate("/login");
//       }, 1500); // ✅ Delay navigation slightly to ensure the toast is visible
//     } catch (err) {
//       toast.error("Signup Failed: " + (err.response?.data?.error || err.message)); // ✅ Error toast
//     }
//   };


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-600">
//       <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full">
//         <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-4">
//           Create an Account
//         </h2>
//         <p className="text-gray-600 text-center mb-6">Join us and explore amazing destinations!</p>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
//           />

//           <div className="flex flex-col space-y-2">
//             <label className="text-gray-700 font-medium">Select Role</label>
//             <select
//               onChange={(e) => setRole(e.target.value)}
//               value={role}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
//             >
//               <option value="traveler">Traveler</option>
//               <option value="guide">Guide</option>
//             </select>
//           </div>

//           {role === "guide" && (
//             <div className="flex flex-col space-y-2">
//               <label className="text-gray-700 font-medium">Select Gender</label>
//               <select
//                 onChange={(e) => setGender(e.target.value)}
//                 value={gender}
//                 required
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
//               >
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </select>
//             </div>
//           )}

//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
//           >
//             Sign Up
//           </button>
//         </form>

//         <div className="mt-6 text-center">
//           <p className="text-gray-700">Already have an account?</p>
//           <button
//             onClick={() => navigate("/login")}
//             className="mt-2 text-blue-600 font-semibold hover:underline"
//           >
//             Log In
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;


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
  
  // Validation state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    gender: ""
  });

  // Validate form fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      password: "",
      gender: ""
    };

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Full Name is required";
      isValid = false;
    }

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    // Gender validation (only if role is guide)
    if (role === "guide" && !gender) {
      newErrors.gender = "Please select your gender";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }
    
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
      <Toaster position="top-center" />
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-4">
          Create an Account
        </h2>
        <p className="text-gray-600 text-center mb-6">Join us and explore amazing destinations!</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-3 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>
          
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition`}
            />
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            {!errors.password && password.length > 0 && password.length < 8 && (
              <p className="mt-1 text-sm text-yellow-500">Password must be at least 8 characters</p>
            )}
          </div>

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
                className={`w-full px-4 py-3 border ${errors.gender ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition`}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && <p className="mt-1 text-sm text-red-500">{errors.gender}</p>}
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
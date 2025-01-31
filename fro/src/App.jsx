import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthContext from './context/AuthContext';
import Signup from './components/Signup';
import Login from './components/Login';
import Destinations from './components/Destinations';
import TransportType from './components/TransportType';
import Payment from './components/Payment';
import Profile from './components/Profile';
import BookGuide from './components/BookGuide';
import GuideDashboard from './components/GuideDashboard'; // Import the new component
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { About } from './components/About';
function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Navbar/>
      <div className="container mx-auto p-4">
        <Routes>

        <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/about' element={<About/>}  />
          <Route path="/book-guide" element={<BookGuide />} />
          <Route path="/guide-dashboard" element={<GuideDashboard />} /> {/* New route */}
          
          <Route path="/destinations" element={user ? <Destinations /> : <Navigate to="/login" />} />
          <Route path="/transport-type" element={user ? <TransportType /> : <Navigate to="/login" />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
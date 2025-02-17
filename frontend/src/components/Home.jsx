import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Map, CreditCard, Users, ChevronDown, Camera, Globe, Briefcase } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax effect for hero section
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{ opacity: 0.2, scale: 0 }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0, 1, 0],
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Interactive Gradient Overlay */}
        <motion.div 
          style={{ 
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-indigo-900/80 z-10" 
        />

        {/* Content with Parallax */}
        <motion.div 
          style={{ y: heroY, opacity: opacityHero }}
          className="relative z-20 text-white text-center px-4 max-w-4xl mx-auto space-y-6 md:space-y-8"
        >
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-4xl md:text-6xl font-bold"
          >
            Your Journey Begins Here
          </motion.h1>
          
          <motion.p 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl"
          >
            Discover extraordinary destinations, seamless travel arrangements, and unforgettable experiences with ExplorEase.
          </motion.p>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <Link
              to="/destinations"
              className="group relative px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold text-md transition-all overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-blue-900 transition-colors">
                Start Exploring
                <ArrowRight />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section with 3D Cards */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900"
          >
            Why Travel with ExplorEase?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ rotateY: 90, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="group p-6 rounded-lg bg-white shadow-lg"
              >
                <motion.div 
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 mb-4 text-blue-600 mx-auto"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-indigo-600 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            What Our Travelers Say
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white text-blue-900 p-8 rounded-lg shadow-lg"
              >
                <p className="italic text-lg mb-4">"{testimonial.feedback}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.city}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Wave Effect */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <motion.div 
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-70"
              style={{ 
                transform: `skewY(${3 + i * 2}deg)`,
                top: `${i * 10}%`,
              }}
              animate={{
                skewY: [3 + i * 2, 5 + i * 2, 3 + i * 2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-md mx-auto px-4 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of travelers who've discovered their perfect journey with ExplorEase.
          </p>
          <Link
            to="/destinations"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold text-md transition-all hover:bg-blue-50"
          >
            Book Your Journey
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight />
            </motion.div>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: <Map className="w-full h-full" />,
    title: "Curated Destinations",
    description: "Discover hand-picked locations and hidden gems, carefully selected to provide unique and authentic travel experiences."
  },
  {
    icon: <CreditCard className="w-full h-full" />,
    title: "Seamless Booking",
    description: "Enjoy our streamlined booking process with secure payments and instant confirmations for all your travel arrangements."
  },
  {
    icon: <Users className="w-full h-full" />,
    title: "Local Expertise",
    description: "Connect with certified local guides who share their intimate knowledge and passion for their homeland."
  }
];

const testimonials = [
  {
   
    feedback: "ExplorEase made my trip to Italy unforgettable. The local guides were amazing, and booking was so simple!"
  },
  {
   
    feedback: "The destinations were top-notch, and I loved how easy the booking process was. Highly recommend!"
  },
  {
   
    feedback: "From booking to exploring, ExplorEase delivered a seamless experience. Can't wait for my next trip!"
  }
];

export default Home;

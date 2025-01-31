import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Map, CreditCard, Users, ChevronDown } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-indigo-900/80 z-10" />
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/1080"
            alt="Travel Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 text-white text-center px-4 max-w-4xl mx-auto space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-up">
            Your Journey Begins Here
          </h1>
          <p className="text-lg md:text-xl animate-fade-in-up-delay-1">
            Discover extraordinary destinations, seamless travel arrangements, and unforgettable experiences with ExplorEase.
          </p>
          <p className="text-base md:text-lg animate-fade-in-up-delay-2">
            At ExplorEase, we believe that travel should be enriching and effortless. Our dedicated team curates unique experiences tailored to your preferences, ensuring that every journey is memorable and hassle-free.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up-delay-3">
            <Link
              to="/explore"
              className="group px-6 py-3 bg-white text-blue-900 rounded-full font-semibold text-md transition-all hover:bg-blue-50 flex items-center gap-2"
            >
              Start Exploring
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Why Travel with ExplorEase?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 mb-4 text-blue-600 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 skew-y-3 transform origin-bottom-right" />
        <div className="relative z-10 max-w-md mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg mb-8 opacity-90 animate-fade-in-up-delay-1">
            Join thousands of travelers who've discovered their perfect journey with ExplorEase.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold text-md transition-all hover:bg-blue-50"
          >
            Book Your Journey
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
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

import React from 'react';
import ItinerariesList from '../components/ItinerariesList';

const Home = () => (
  <div className="container mx-auto px-4 py-8">
    {/* Hero Section */}
    <h1 className="text-4xl font-bold text-center mb-4">Welcome to Kifaru Tours</h1>
    <p className="text-center mb-10 text-lg text-gray-700">
      From the wild heart of Arusha to the digital plains.
    </p>

    {/* Itineraries Section */}
    <ItinerariesList />
  </div>
);

export default Home;

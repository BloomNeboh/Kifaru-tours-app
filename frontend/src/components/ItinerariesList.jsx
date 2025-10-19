import React, { useEffect, useState } from 'react';
import api from '../axiosClient';

const ItinerariesList = () => {
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        const res = await api.get('/itineraries'); // calls backend
        setItineraries(res.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load itineraries');
      } finally {
        setLoading(false);
      }
    };

    fetchItineraries();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading itineraries...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Safari Itineraries</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {itineraries.map((item) => (
          <div key={item._id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{item.duration} nights</span>
              <span>{item.price ? `$${item.price}` : 'Contact for price'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItinerariesList;

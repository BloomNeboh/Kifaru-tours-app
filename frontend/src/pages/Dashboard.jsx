import { useEffect, useState } from 'react';
import api from '../api/axiosClient';
import ItineraryCard from '../components/ItineraryCard';

const Dashboard = () => {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    api.get('/itineraries').then(res => setItineraries(res.data));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {itineraries.map(it => <ItineraryCard key={it._id} itinerary={it} />)}
      {/* Stats: number of safaris, etc. */}
    </div>
  );
};

export default Dashboard;

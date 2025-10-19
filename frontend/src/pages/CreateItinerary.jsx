import { useState } from 'react';
import api from '../api/axiosClient';

const CreateItinerary = () => {
  const [form, setForm] = useState({ destination: '', duration: 0, pax: 0, dates: [], upsells: [] });

  const handleSubmit = async e => {
    e.preventDefault();
    await api.post('/itineraries', form);
    // Redirect or preview
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Destination" onChange={e => setForm({ ...form, destination: e.target.value })} />
      {/* Other fields */}
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateItinerary;

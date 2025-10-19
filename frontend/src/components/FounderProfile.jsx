import { motion } from 'framer-motion';
import api from '../api/axiosClient';
import { useEffect, useState } from 'react';

const FounderProfile = () => {
  const [founder, setFounder] = useState(null);

  useEffect(() => {
    api.get('/founder').then(res => setFounder(res.data));
  }, []);

  if (!founder) return null;

  return (
    <motion.div initial={{ y: 50 }} animate={{ y: 0 }}>
      <img src="/images/founder-neboh.jpg" alt="Founder" />
      <h2>{founder.name}</h2>
      <p>{founder.bio}</p>
      {/* Timeline animation */}
      {founder.timeline.map((item, i) => (
        <motion.div key={i} initial={{ x: -100 }} animate={{ x: 0 }} transition={{ delay: i * 0.2 }}>
          {item.year}: {item.event}
        </motion.div>
      ))}
      {/* Certifications with hover */}
      {founder.certifications.map(cert => (
        <motion.img
          src={`/assets/certificates/${cert.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}-cert.png`}
          whileHover={{ scale: 1.1 }}
          alt={cert}
        />
      ))}
    </motion.div>
  );
};

export default FounderProfile;

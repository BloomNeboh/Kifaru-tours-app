import { motion } from 'framer-motion';

const ItineraryCard = ({ itinerary }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="p-4 border"
  >
    <h3>{itinerary.destination}</h3>
    <p>Duration: {itinerary.duration} nights</p>
    <p>Total: ${itinerary.totalCost}</p>
  </motion.div>
);

export default ItineraryCard;

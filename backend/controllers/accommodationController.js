const Accommodation = require('../models/Accommodation');

exports.getAccommodations = async (req, res) => {
  const accommodations = await Accommodation.find();
  res.json(accommodations);
};

// Add CRUD for accommodations

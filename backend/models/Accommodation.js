const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rate: { type: Number, required: true }, // per night USD
  roomType: { type: String, enum: ['single', 'double', 'triple'] },
});

module.exports = mongoose.model('Accommodation', accommodationSchema);

const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  parkFee: { type: Number, required: true }, // per person per day USD
  description: { type: String },
});

module.exports = mongoose.model('Destination', destinationSchema);

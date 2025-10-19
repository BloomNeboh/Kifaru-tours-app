const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  destination: { type: String, required: true },
  duration: { type: Number, required: true }, // nights
  pax: { type: Number, required: true }, // passengers
  dates: { type: [Date], required: true },
  description: { type: String },
  costBreakdown: { type: Object },
  totalCost: { type: Number },
  upsells: { type: [String] },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  approved: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Itinerary', itinerarySchema);

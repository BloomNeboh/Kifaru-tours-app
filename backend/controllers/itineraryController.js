const Itinerary = require('../models/Itinerary');
const { calculatePricing } = require('../utils/pricingEngine');
const { generateDescription } = require('../utils/aiGenerator');

exports.createItinerary = async (req, res) => {
  const { destination, duration, pax, dates, upsells } = req.body;
  try {
    const costBreakdown = calculatePricing({ destination, duration, pax, upsells });
    const totalCost = costBreakdown.total;
    const description = await generateDescription({ destination, duration });
    const itinerary = new Itinerary({ ...req.body, description, costBreakdown, totalCost, user: req.user.id });
    await itinerary.save();
    res.status(201).json(itinerary);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getItineraries = async (req, res) => {
  const itineraries = await Itinerary.find({ user: req.user.id });
  res.json(itineraries);
};

// Add more: approve, export PDF using pdfkit, etc.

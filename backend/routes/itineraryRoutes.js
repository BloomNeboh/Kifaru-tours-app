const express = require('express');
const { createItinerary, getItineraries } = require('../controllers/itineraryController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createItinerary);
router.get('/', protect, getItineraries);

module.exports = router;

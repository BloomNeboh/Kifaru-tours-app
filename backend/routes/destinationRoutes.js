const express = require('express');
const Destination = require('../models/Destination');

const router = express.Router();

router.get('/', async (req, res) => {
  const destinations = await Destination.find();
  res.json(destinations);
});

module.exports = router;

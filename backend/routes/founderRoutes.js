const express = require('express');
const { getFounderInfo } = require('../controllers/founderController');

const router = express.Router();

router.get('/', getFounderInfo);

module.exports = router;

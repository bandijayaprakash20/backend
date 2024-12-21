const express = require('express');
const router = express.Router();
const { booking } = require('../models');

// Get all booking
router.get('/', async (req, res) => {
  try {
    const booking = await booking.findAll();
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new booking
router.post('/', async (req, res) => {
  try {
    const booking = await booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
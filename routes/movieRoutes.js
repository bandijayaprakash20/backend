const express = require('express');
const router = express.Router();
const { movie } = require('../models');

// Get all movie
router.get('/', async (req, res) => {
  try {
    const movie = await movie.findAll();
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new theater
router.post('/', async (req, res) => {
  try {
    const movie = await movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
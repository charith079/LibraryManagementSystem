const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../model/Books'); // Import the Book model

// GET route to fetch all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find(); // Fetch all books from the database
    res.status(200).json(books); // Respond with the books in JSON format
  } catch (err) {
    console.error('Error fetching books:', err);
    res.status(500).json({ message: 'Error fetching books', error: err });
  }
});

// GET route to search books by name or author
router.get('/search', async (req, res) => {
  const query = req.query.query || ""; // Get the search query from the request

  try {
    // Search books by name or author (case-insensitive)
    const books = await Book.find({
      $or: [
        { bookName: { $regex: query, $options: "i" } },
        { authorName: { $regex: query, $options: "i" } },
      ],
    });
    res.status(200).json(books); // Respond with the matching books
  } catch (err) {
    console.error('Error searching books:', err);
    res.status(500).json({ message: 'Failed to fetch books', error: err });
  }
});

module.exports = router;

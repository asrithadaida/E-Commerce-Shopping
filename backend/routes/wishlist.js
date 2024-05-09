// routes/wishlist.js

const express = require('express');
const router = express.Router();
const Wishlist = require('../models/Wishlist');

// Add product to wishlist
router.post('/wishlist', async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const wishlistItem = new Wishlist({ userId, productId });
    await wishlistItem.save();
    res.status(201).json({ message: 'Product added to wishlist' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Remove product from wishlist
router.delete('/wishlist/:userId/:productId', async (req, res) => {
  try {
    const { userId, productId } = req.params;
    await Wishlist.findOneAndDelete({ userId, productId });
    res.json({ message: 'Product removed from wishlist' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get wishlist for a user
router.get('/wishlist/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const wishlist = await Wishlist.find({ userId }).populate('productId');
    res.json(wishlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

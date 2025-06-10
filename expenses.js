const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// GET /api/expenses/search
router.get('/search', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching expenses' });
  }
});

// POST /api/expenses/add
router.post('/add', async (req, res) => {
  try {
    const expense = new Expense(req.body);
    const saved = await expense.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: 'Error adding expense' });
  }
});

module.exports = router;





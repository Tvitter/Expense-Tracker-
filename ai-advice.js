const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { summary } = req.body;
  if (!summary) {
    return res.status(400).json({ error: 'Summary is required' });
  }
  const dummyAdvice = `Based on your summary, consider reducing spending on non-essential items.`;
  res.json({ advice: dummyAdvice });
});

module.exports = router;


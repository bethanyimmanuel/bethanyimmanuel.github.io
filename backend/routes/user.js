const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'User data will go here' });
});

module.exports = router;

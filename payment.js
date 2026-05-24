const express = require('express');
const router = express.Router();
const { validateAmount, validateIBAN } = require('./validators');

router.post('/', (req, res) => {
  const { amount, iban } = req.body;
  if (!validateAmount(amount) || !validateIBAN(iban)) {
    return res.status(400).send("Invalid input");
  }
  res.send("Payment processed securely");
});

module.exports = router;

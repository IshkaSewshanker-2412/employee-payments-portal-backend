const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

// Pre-created employee accounts
const users = [
  { email: "employee1@company.com", passwordHash: bcrypt.hashSync("SecurePass123!", 10) },
  { email: "employee2@company.com", passwordHash: bcrypt.hashSync("StrongPass456!", 10) }
];

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).send("Invalid credentials");

  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) return res.status(401).send("Invalid credentials");

  res.send("Login successful");
});

module.exports = router;

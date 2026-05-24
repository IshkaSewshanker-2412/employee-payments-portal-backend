// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(express.json());
// app.use(cors());

// // Import routes
// const authRoutes = require('./auth');
// const paymentRoutes = require('./payment');

// app.use('/auth', authRoutes);
// app.use('/payment', paymentRoutes);

// app.listen(5000, () => console.log("Backend running on http://localhost:5000"));

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Import routes
const authRoutes = require('./auth');
const paymentRoutes = require('./payment');

app.use('/auth', authRoutes);
app.use('/payment', paymentRoutes);

// Use Render's dynamic port or fallback to 5000 locally
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

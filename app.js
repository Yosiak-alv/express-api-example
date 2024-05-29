require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const bookRoutes = require('./src/v1/routes/bookRoutes');
const errorHandler = require('./src/v1/middlewares/errorHandler');
const cors = require('cors');

const app = express();

// Apply CORS middleware
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to database
connectDB();

app.use('/api/v1', bookRoutes);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
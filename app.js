const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes
app.post('/api/data', (req, res) => {
  // Here you can handle the POST request, e.g., save the data to a database
  // You can send back any response you want, in this case, just a success message
  res.status(200).json({ message: 'Success' });
});

module.exports = app;


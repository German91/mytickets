if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// Handle Errors
mongoose.connection.on('open', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('close', () => {
  console.log('Error connecting to MongoDB');
});

const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const route = require('./route/user');
const authRoute = require('./route/auth');
const taskRoute = require('./route/task');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

// Middleware setup
app.use(express.json());  // Parse JSON request bodies
app.use(cookieParser());  // Parse cookies

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Mongoose is connected"))
  .catch(err => console.log("Error", err));

// Route setup
app.use(route);
app.use(authRoute);
app.use(taskRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Server startup
app.listen(port, () => { 
  console.log(`App is running on port ${port}`);
});

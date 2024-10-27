const express = require('express');
const route = express.Router();
const { verify } = require('../middleware/verify');
const {
  createTask,
  updateTask,
  deleteTask,
  getTasks
  // getTaskById
} = require('../controllers/task');

// Middleware to protect routes
route.use(verify);

// Route for creating a new task
route.post('/tasks', createTask);
// Route for getting all tasks for the logged-in user
route.get('/tasks', getTasks);
// Route for updating a task
route.put('/tasks/:id', updateTask);
// Route for deleting a task
route.delete('/tasks/:id', deleteTask);

module.exports = route;

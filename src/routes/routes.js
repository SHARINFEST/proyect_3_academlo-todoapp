const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userControllers');
const TaskController = require('../controllers/taskController')


router.post('/users', UserController.createUser);
router.post('/users/:username/tasks', TaskController.createTask);
router.get('/users/:username/tasks', TaskController.getTasksByUser);
router.put('/tasks/:id/completion', TaskController.updateTaskCompletion);
router.delete('/tasks/:id', TaskController.deleteTask);

module.exports = router;



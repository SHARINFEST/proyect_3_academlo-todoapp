const Task = require('../models/tasks.model');
const Categoryies = require('../models/categories.model');
const User = require('../models/users.model');

async function createTask(req, res) {
  try {
    const { title, description, category_id } = req.body;
    const { username } = req.params;
    const task = await Task.create({ title, description, category_id, user_id: username });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).send(console.log(error));
  }
}

async function getTasksByUser(req, res) {
  try {
    const { username } = req.params;
    const tasks = await Task.findAll({ where: { user_id: username },});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send(console.log(error));
  }
}

async function updateTaskCompletion(req, res) {
    try {
        const {id} = req.params;
        const { completed } = req.body;
        await Task.update({completed}, {
            where: {id}
        });
        res.status(204).send(console.log(Task.findByPk(id)));
//   try {
//     const { id } = req.params;
//     console.log(id)
//     const task = await Task.findByPk(id);
//     if (!task) {
//       return res.status(400).json( {message:'la tarea no fue encontrada'} );
//     }

//     task.completed = !task.completed;
//     await task.save();

//     res.status(200).json(task);
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
}

async function deleteTask(req, res) {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }

    await task.destroy();
    res.status(200).json({ message: 'Task deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting task.' });
  }
}

module.exports = {
  createTask,
  getTasksByUser,
  updateTaskCompletion,
  deleteTask,
};

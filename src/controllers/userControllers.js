const User = require('../models/users.model');

async function createUser(req, res) {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(console.log(error));
  }
}

// Implementación de otros endpoints relacionados con usuarios (si es necesario)
// ...

module.exports = {
  createUser,
  // ...
};

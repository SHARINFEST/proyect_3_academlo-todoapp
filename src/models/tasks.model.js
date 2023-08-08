const { DataTypes } = require('sequelize');
const db = require('../utils/database');
const User = require('./users.model');
const Category = require('./categories.model')

const Task = db.define('tasks', {
 
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
        model:'users',
        key: 'id'
    }

  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
        model:"Categories",
        key : "id"
    }
  },
});

module.exports = Task;

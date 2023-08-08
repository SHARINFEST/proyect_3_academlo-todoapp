const User = require('./users.model');
const Category = require('./categories.model');
const Task = require('./tasks.model');

const initModels = ()=> {
Task.belongsTo(User, { foreignKey: 'user_id' });
Task.belongsTo(Category, { foreignKey: 'category_id' });

User.hasMany(Task, { foreignKey: 'user_id' });
Category.hasMany(Task, { foreignKey: 'category_id' });
};
module.exports = initModels;

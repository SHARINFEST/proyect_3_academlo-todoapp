const { Sequelize } = require('sequelize');

const db = new Sequelize({
    host: 'localhost',
    port: 5432,
    database: 'proyect_3',
    username: 'name password',
    password: '',
    dialect : 'postgres'
});

module.exports = db;
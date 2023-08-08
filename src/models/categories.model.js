const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Categories = db.define('Category', {
 
     
       
        name:{
            type :DataTypes.STRING(50),
            allowNull:false
            
            },
            description:{
                type :DataTypes.TEXT,
            },
         },{
            timestamps: false
         }
);

module.exports = Categories;
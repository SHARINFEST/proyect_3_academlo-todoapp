const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const User = db.define('users', {
  
    username:{
        type:DataTypes.STRING(30),
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
    }
},
password:{
    type:DataTypes.STRING(32),
    allowNull: false,

}
}
);

module.exports = User;
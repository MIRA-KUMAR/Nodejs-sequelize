const {Model, DataTypes} = require('sequelize');
const sequelize = require('./database');

class User extends Model {}

// We pass three parameters in User class
// 1. User table attributes
// 2. Sequelize 
// 3. Model name

User.init ({
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'user'
})

module.exports = User;
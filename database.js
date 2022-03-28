const { Sequelize } = require('sequelize');

// Defining database, username and password
const sequelize = new Sequelize('test-db', 'user', 'pass', {
    dialect: 'sqlite',          // MySQL, SQLite, PostGreSQL....
    host: './dev.sqlite'        // Creates database
});  

module.exports = sequelize;

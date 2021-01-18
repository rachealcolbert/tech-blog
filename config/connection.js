const Sequelize = require('sequilize');

require('dotenv').config();

// create connection to db 
const sequelize = process.env.JAWSBD_URL ?
    new Sequelize(process.env.JAWSBD_URL) :
    new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'local host',
        dialect: 'mysql',
        port: 3306
    });

module.exports = sequelize;
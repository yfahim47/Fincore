const {Sequelize} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USRENAME,
    process.env.DB_PASSWORD,
     {
        host : process.env.DB_HOST,
        dialect: 'mysql'
     }
);

module.exports = sequelize;
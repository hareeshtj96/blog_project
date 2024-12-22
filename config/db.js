const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blog_app', 'root', 'Mackintosh1@', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;
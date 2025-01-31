const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User')

const Post = sequelize.define('Post', {
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false },
    image: { type: DataTypes.STRING }
});

Post.belongsTo(User, { foreignKey: 'userId' });
module.exports = Post;

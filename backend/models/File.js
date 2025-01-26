const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class File extends Model {}

File.init({
    path: DataTypes.STRING,
    type: DataTypes.STRING,
    size: DataTypes.INTEGER
}, { sequelize, modelName: 'file' });

module.exports = File;

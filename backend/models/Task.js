const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Task extends Model {}

Task.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING
}, { sequelize, modelName: 'task' });

module.exports = Task;

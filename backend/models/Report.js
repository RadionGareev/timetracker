const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Report extends Model {}

Report.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT
}, { sequelize, modelName: 'report' });

module.exports = Report;

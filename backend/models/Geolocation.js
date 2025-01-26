const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Geolocation extends Model {}

Geolocation.init({
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    timestamp: DataTypes.DATE
}, { sequelize, modelName: 'geolocation' });

module.exports = Geolocation;

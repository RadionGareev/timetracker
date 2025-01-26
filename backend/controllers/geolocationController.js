const Geolocation = require('../models/Geolocation');

exports.recordGeolocation = async (req, res) => {
    try {
        const geoData = await Geolocation.create(req.body);
        res.status(201).json(geoData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getAllGeolocationData = async (req, res) => {
    try {
        const geodata = await Geolocation.findAll();
        res.json(geodata);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const Report = require('../models/Report');

exports.getAllReports = async (req, res) => {
    try {
        const reports = await Report.findAll();
        res.json(reports);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createReport = async (req, res) => {
    try {
        const report = await Report.create(req.body);
        res.status(201).json(report);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getReportById = async (req, res) => {
    try {
        const report = await Report.findByPk(req.params.id);
        if (report) {
            res.json(report);
        } else {
            res.status(404).send('Report not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

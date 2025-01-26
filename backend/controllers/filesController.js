const File = require('../models/File');

exports.uploadFile = async (req, res) => {
    try {
        // Здесь должна быть логика для загрузки файла
        // Для примера мы просто создаем запись файла
        const file = await File.create({ path: req.body.path, type: req.body.type, size: req.body.size });
        res.status(201).send(file);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getFileById = async (req, res) => {
    try {
        const file = await File.findByPk(req.params.id);
        if (file) {
            res.json(file);
        } else {
            res.status(404).send('File not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const Task = require('../models/Task');

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).send('Task not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateTask = async (req, res) => {
    try {
        const updated = await Task.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            res.send('Task updated');
        } else {
            res.status(404).send('Task not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const deleted = await Task.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.send('Task deleted');
        } else {
            res.status(404).send('Task not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

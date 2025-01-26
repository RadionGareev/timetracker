const express = require('express');
const router = express.Router();
const usersRouter = require('./users');
const tasksRouter = require('./tasks');
const reportsRouter = require('./reports');
const filesRouter = require('./files');
const geolocationRouter = require('./geolocation');

router.use('/users', usersRouter);
router.use('/tasks', tasksRouter);
router.use('/reports', reportsRouter);
router.use('/files', filesRouter);
router.use('/geolocation', geolocationRouter);

module.exports = router;

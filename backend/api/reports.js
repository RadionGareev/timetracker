const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { res.send('Get all reports'); });
router.post('/', (req, res) => { res.send('Create a new report'); });
router.get('/:id', (req, res) => { res.send('Get a single report by id'); });

module.exports = router;

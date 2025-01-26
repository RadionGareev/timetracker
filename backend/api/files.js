const express = require('express');
const router = express.Router();

router.post('/upload', (req, res) => { res.send('File uploaded'); });
router.get('/:id', (req, res) => { res.send('Get a file by id'); });

module.exports = router;

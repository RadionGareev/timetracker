const express = require('express');
const router = express.Router();

router.post('/', (req, res) => { res.send('Geolocation data recorded'); });
router.get('/', (req, res) => { res.send('Get all geolocation data'); });

module.exports = router;

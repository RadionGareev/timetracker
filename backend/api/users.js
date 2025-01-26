const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { res.send('Get all users'); });
router.post('/', (req, res) => { res.send('Create a new user'); });
router.get('/:id', (req, res) => { res.send('Get a single user by id'); });
router.put('/:id', (req, res) => { res.send('Update a user by id'); });
router.delete('/:id', (req, res) => { res.send('Delete a user by id'); });

module.exports = router;

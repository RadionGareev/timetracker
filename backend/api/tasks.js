const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { res.send('Get all tasks'); });
router.post('/', (req, res) => { res.send('Create a new task'); });
router.get('/:id', (req, res) => { res.send('Get a single task by id'); });
router.put('/:id', (req, res) => { res.send('Update a task by id'); });
router.delete('/:id', (req, res) => { res.send('Delete a task by id'); });

module.exports = router;

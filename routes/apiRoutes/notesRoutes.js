const router = require('express').Router();
//const { createNewAnimal, validateAnimal } = require('../../lib/animals');
const { notes } = require('../../data/notes');

router.get('api/notes', (req, res) => {
  res.json(notes);
});

router.post('api/notes', (req, res) => {
  req.body.id = notes.length.toString();
    const note = req.body;
    res.json(note);
});

module.exports = router;

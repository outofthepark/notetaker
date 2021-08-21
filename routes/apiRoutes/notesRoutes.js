const router = require('express').Router();
const notes = require('../../data/notes');
const {createNewNote, findById, deleteNote} = require('../../lib/notes');

router.get('/notes', (req, res) => {
  //console.log(notes);
  res.json(notes);
});

router.get('/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.delete('/notes/:id', (req, res) => {
  const result = deleteNote(req.params.id, notes);;
  console.log(result);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404)
  }
});

router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();
  const note = createNewNote(req.body, notes);
  res.json(note);
});

module.exports = router;

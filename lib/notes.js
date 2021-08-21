const fs = require('fs');
const path = require('path');

function findById(id, notes) {
  const result = notes.filter(note => note.id === id)[0];
  return result;
}

function createNewNote(body, notesArr) {
  const note = body;
  notesArr.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../data/notes.json'),
    JSON.stringify(notesArr, null, 2)
  );
  return note;
}

function deleteNote(id, notes) {
    const exists = findById(id, notes)
    if(exists){
        var deletetdNoteArray = notes.splice(id, 1);
        for(var i = 0; i < notes.length; i++){
            notes[i].id = i.toString();
        }
        fs.writeFileSync(
            path.join(__dirname, '../data/notes.json'),
            JSON.stringify(notes, null, 2)
          );
        return deletetdNoteArray[0];
    }
}

module.exports = {
  findById,
  createNewNote,
  deleteNote
};

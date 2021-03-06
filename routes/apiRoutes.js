const path = require('path');
const Notes = require('../lib/Notes.js');
let storedNotes = new Notes;

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.send(storedNotes.getNotes());
  })

  app.post("/api/notes", (req, res) => {
    storedNotes.addNote(req.body);
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  })

  app.delete("/api/notes/:id", (req, res) => {
    const { id } = req.params;
    storedNotes.delNote(id);
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  })
};

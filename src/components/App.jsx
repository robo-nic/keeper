import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((_, index) => {
        return index !== id;
      });
    });
  }

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function generateNote(note, index) {
    return (
      <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        deleteNote={deleteNote}
      />
    );
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map(generateNote)}
      <Footer />
    </div>
  );
}

export default App;

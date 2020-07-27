import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addnote(note) {
    setNotes(prevnotes => {
      return [...prevnotes, note];
    });
  }
  function deleteNote(id) {
    setNotes(prevnotes => {
      return prevnotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addnote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          delete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;

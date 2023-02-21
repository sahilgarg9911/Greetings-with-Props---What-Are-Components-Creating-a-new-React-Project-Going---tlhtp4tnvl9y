import React, { useState } from 'react';
import "../styles/NoteKeeper.css";

function NoteKeeper() {
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState([]);
  const [count, setCount] = useState(0);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { title, tagline, description };
    setNotes([...notes, newNote]);
    setTitle('');
    setTagline('');
    setDescription('');
    setCount(count + 1);
  };

  const handleEdit = (index, field, value) => {
    const updatedNote = { ...notes[index], [field]: value };
    const updatedNotes = [...notes];
    updatedNotes[index] = updatedNote;
    setNotes(updatedNotes);
  };

  const handleDelete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const handlePin = (index) => {
    const updatedNotes = [...notes];
    const pinnedNote = updatedNotes.splice(index, 1);
    updatedNotes.unshift(pinnedNote[0]);
    setNotes(updatedNotes);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='Add Title' className='addinputs' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input placeholder='Add Tagline' className='addinputs' type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} />
        <input placeholder='Add Description' className='addinputs' value={description} onChange={(e) => setDescription(e.target.value)}></input>
        <button type="submit" className='savebtn' >Save Note</button>
        <span>Total keeps : {count}</span>
      </form>
      <div className="notes-grid noteskeep">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <h2 contentEditable={true} onBlur={(e) => handleEdit(index, 'title', e.target.innerText)}>{note.title}</h2>
            <p contentEditable={true} onBlur={(e) => handleEdit(index, 'tagline', e.target.innerText)}>{note.tagline}</p>
            <p contentEditable={true} onBlur={(e) => handleEdit(index, 'description', e.target.innerText)}>{note.description}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handlePin(index)}>Pin to Top</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </div>
        ))}
      </div>

 
    </div>
  );
}

export default NoteKeeper;

import React, { useState } from 'react';
// import './App.css';
import "../styles/NoteForm.css";

function NoteForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, tagline, description });
    setTitle('');
    setTagline('');
    setDescription('');
  };

  return (
    <div className="note-form addnotediv">
      <h2>Add Note</h2>
      <form onSubmit={handleSubmit}>
        {/* <label>Title</label> */}
        <input placeholder='Title'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        {/* <label>Tagline</label> */}
        <input placeholder='Tagline'
          type="text"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          required
        />
        {/* <label>Description</label> */}
        <textarea placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" className='savebtn'>Save</button>
      </form>
    </div>
  );
}

export default NoteForm;

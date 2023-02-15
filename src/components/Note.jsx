import React, { useState } from 'react';
// import './App.css';
import "../styles/Note.css";

function Note({ title, tagline, description, onDelete }) {

  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };
  return (
    <div className="wrapper">
    <div className="note notediv ">

      <h2>{title}</h2>
      <h4>{tagline}</h4>
      <p>{description}</p>
      <div className="actions ">
      {editing ? (
          <span className="save" onClick={() => setEditing(false)}>Save</span>
        ) : (
          <span className="edit" onClick={handleEdit}>Edit</span>
        )}
        <span className="delete" onClick={onDelete}>Delete</span>
      </div>
      {/* {editing ? (
        <>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </>
      ) : (
        <>
          <h2>{title}</h2>
          <h4>{tagline}</h4>
          <p>{description}</p>
        </>
      )} */}
      
    </div>
    </div>
    
   
  );
}

export default Note;

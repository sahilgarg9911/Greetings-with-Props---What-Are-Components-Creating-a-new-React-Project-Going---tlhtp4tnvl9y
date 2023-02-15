import React, { useState } from "react";
import Navbar from "./Navbar";
import NoteKeeper from "./NoteKeeper";
import "../styles/App.css";

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <NoteKeeper />
      </div>
    </>
  );
}

export default App;

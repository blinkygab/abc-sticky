import React from 'react';
import '../styles/note.css';

const Note = ({text}) => (
  <li className="sticky-note" contenteditable="true">
    <p className="sticky-note--text">{text}</p>
  </li>
);

export default Note;

// Note component
import React from 'react';
import "./note.sass";

const Note = ({ content }) => {
  return (
    <div className="note">
      {content}
    </div>
  );
};

export default Note;

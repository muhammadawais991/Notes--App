import React from 'react';

const Note = ({ note }) => {
    return (
        <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold">{note.title}</h2>
            <p>{note.content}</p>
        </div>
    );
};

export default Note;

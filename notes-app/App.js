import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

const App = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/notes')
            .then((response) => response.json())
            .then((data) => setNotes(data));
    }, []);

    const addNote = (note) => {
        fetch('http://localhost:5000/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        })
            .then((response) => response.json())
            .then((newNote) => setNotes([...notes, newNote]));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Notes App</h1>
            <NoteForm addNote={addNote} />
            <NoteList notes={notes} />
        </div>
    );
};

export default App;

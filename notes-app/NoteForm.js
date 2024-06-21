import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote({
            title,
            content,
        });
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 rounded w-full mb-2"
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="border p-2 rounded w-full mb-2"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Add Note
            </button>
        </form>
    );
};

export default NoteForm;

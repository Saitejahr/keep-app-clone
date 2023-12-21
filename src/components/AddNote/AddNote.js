import React, { useState } from 'react'
import './AddNote.css'
const AddNote = ({ addNote }) => {
  const [note, setNote] = useState({ title: '', content: '', color: '#ffffff' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (note.title.trim() !== '' || note.content.trim() !== '') {
      addNote({
        ...note,
        id: Date.now(),
      })
      setNote({ title: '', content: '', color: '#ffffff' })
    }
  }

  return (
    <div className="add-note">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        />
        <textarea
          placeholder="Take a note..."
          value={note.content}
          onChange={(e) => setNote({ ...note, content: e.target.value })}
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddNote

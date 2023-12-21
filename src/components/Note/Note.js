import React, { useState } from 'react'
import './Note.css'

const Note = ({ note, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedNote, setEditedNote] = useState(note)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    onEdit(note.id, editedNote)
    setIsEditing(false)
  }

  const handleColorChange = (color) => {
    setEditedNote({
      ...editedNote,
      color: color,
    })
  }

  return (
    <div className="note" style={{ backgroundColor: editedNote.color }}>
      {isEditing ? (
        <div>
          <input
            className="inputText"
            type="text"
            value={editedNote.title}
            onChange={(e) =>
              setEditedNote({ ...editedNote, title: e.target.value })
            }
          />
          <textarea
            className="inputText"
            value={editedNote.content}
            onChange={(e) =>
              setEditedNote({ ...editedNote, content: e.target.value })
            }
          ></textarea>
          <input
            type="color"
            value={editedNote.color}
            onChange={(e) => handleColorChange(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(note.id)}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default Note

import React, { useState, useEffect } from 'react'
import './App.css'
import AddNote from './components/AddNote/AddNote'
import Search from './components/Search/Search'
import NoteList from './components/NoteList/NoteList'

const App = () => {
  const [notes, setNotes] = useState([])
  const [filteredNotes, setFilteredNotes] = useState([])

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || []
    setNotes(storedNotes)
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = (newNote) => {
    setNotes([newNote, ...notes])
  }

  const editNote = (id, updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, ...updatedNote } : note
    )
    setNotes(updatedNotes)
  }

  const deleteNote = (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this note?'
    )
    if (confirmed) {
      const updatedNotes = notes.filter((note) => note.id !== id)
      setNotes(updatedNotes)
    }
  }

  const filterNotes = (term) => {
    const filtered = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(term.toLowerCase()) ||
        note.content.toLowerCase().includes(term.toLowerCase())
    )
    setFilteredNotes(filtered)
  }

  return (
    <div className="app">
      <h1>Google Keep Clone</h1>
      <AddNote addNote={addNote} />
      <Search filterNotes={filterNotes} />
      <NoteList
        notes={filteredNotes.length > 0 ? filteredNotes : notes}
        onEdit={editNote}
        onDelete={deleteNote}
      />
    </div>
  )
}

export default App

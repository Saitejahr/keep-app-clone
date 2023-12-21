import React, { useState } from 'react'
import './Search.css'

const Search = ({ filterNotes }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    filterNotes(term)
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search

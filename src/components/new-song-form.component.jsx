import React, { useState } from 'react'

const NewSongForm = ({ addSong }) => {

  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addSong(title)
  }

  // the callback inside it always run when the component render/re-render <=> when the data of the comp change

  return (
    <form onSubmit = {handleSubmit}>
      <label>Song name:</label>
      <input type = "text" required onChange = {(e) => setTitle(e.target.value)} />
      <input type = "submit" />
    </form>
  )
}

export default NewSongForm

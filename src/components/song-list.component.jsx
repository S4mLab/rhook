import React, {useState, useEffect} from 'react'
import uuid from 'uuid/v1'
import NewSongForm from './new-song-form.component'

const SongList = () => {

  const [songs, setSongs] = useState([
    {title: "almost home", id: 1},
    {title: "memory gospel", id: 2},
    {title: "this wild darkness", id: 3},
  ])

  const [age, setAge] = useState(15)

  const addSong = (title) => {
    setSongs([...songs, {title, id: uuid()}])
  }

  // only run when songs data changed/ 1st rendered
  useEffect(
    () => console.log('useEffect for songs ran' ,songs),
    [songs]
  )
  
  // only run when the age data change/ 1st render
  useEffect(
    () => console.log('useEffect for age ran', age),
    [age]
  )

  return (
    <div>
      <ul>
        {songs.map(
          song => (<li key = {song.id}> {song.title} </li>)
        )}
      </ul>
      <NewSongForm addSong = {addSong} />
      <button onClick = {() => setAge(age + 1)}> Add 1 to age: {age} </button>
    </div>
  )
}

export default SongList
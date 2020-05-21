import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Context } from '../../context'

const Search = () => {
  const [state, setState] = useContext(Context)
  const [userInput, setUserInput] = useState('')
  const [trackTitle, setTrackTitle] = useState('')

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        let track_list = res.data.message.body.track_list
        setState({ track_list: track_list })
        setUserInput('')
      })
      .catch(err => console.log(err))
  }, [trackTitle]) //only fetch if trackTitle changes

  const findTrack = e => {
    e.preventDefault()
    setTrackTitle(userInput)
    window.scrollTo({
      top: 350,
      left: 0,
      behavior: 'smooth'
    })
  }

  const onChange = e => {
    setUserInput(e.target.value)
  }

  return (
    <div className='header'>
      <div className='input-icon-wrap animated fadeIn'>
        <span className='input-icon'>
          <i className='fas fa-search'></i>
        </span>
        <form onSubmit={findTrack} className='search-form'>
          <input
            type='text'
            className='input-with-icon'
            id='form-name'
            name='userInput'
            autoComplete='off'
            placeholder='search for music, albums, artists ...'
            value={userInput}
            onChange={onChange}
          />
        </form>
      </div>
    </div>
  )
}

export default Search

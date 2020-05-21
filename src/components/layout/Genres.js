import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../../context'
import axios from 'axios'

const Genres = () => {
  const [state, setState] = useContext(Context)
  const [genreId, setGenreId] = useState('')

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?f_music_genre_id=${genreId}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        let track_list = res.data.message.body.track_list
        setState({ track_list: track_list })
      })
      .catch(err => console.log(err))
  }, [genreId, setGenreId])

  return (
    <section className='section-a section-gray'>
      <div className='container container-icons animated fadeIn delay-1s'>
        <div
          className='genre-icon'
          onClick={e => {
            e.preventDefault()
            setGenreId(53)
					}}
					style={{ cursor: 'pointer' }}
        >
          <i className='fas fa-th' />
          <span className='genre-title'>Instrumental</span>
        </div>
        <div
          onClick={e => {
            e.preventDefault()
            setGenreId(1149)
          }}
          style={{ cursor: 'pointer' }}
          className='genre-icon'
        >
          <i className='fas fa-headphones-alt' />
          <span className='genre-title'>Metal</span>
        </div>
        <div
          className='genre-icon'
          onClick={e => {
            e.preventDefault()
            setGenreId(1150)
          }}
          style={{ cursor: 'pointer' }}
        >
          <i className='fas fa-guitar' />
          <span className='genre-title'>Rock</span>
        </div>
        <div
          className='genre-icon'
          onClick={e => {
            e.preventDefault()
            setGenreId(1027)
          }}
          style={{ cursor: 'pointer' }}
        >
          <i className='fas fa-compact-disc' />
          <span className='genre-title'>classic</span>
        </div>
        <div
          className='genre-icon'
          onClick={e => {
            e.preventDefault()
            setGenreId(1107)
          }}
          style={{ cursor: 'pointer' }}
        >
          <i className='fas fa-drum' />
          <span className='genre-title'>Jazz</span>
        </div>
        <div
          className='genre-icon'
          onClick={e => {
            e.preventDefault()
            setGenreId(1133)
          }}
          style={{ cursor: 'pointer' }}
        >
          <i className='fas fa-music' />
          <span className='genre-title'>Pop</span>
        </div>
      </div>
    </section>
  )
}

export default Genres

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import Moment from 'react-moment'
import Footer from '../layout/Footer'
import './lyrics.css'
import Header from '../layout/Header'

const Lyrics = props => {
  const [track, setTrack] = useState({})
  const [lyrics, setLyrics] = useState({})
  const [album, setAlbum] = useState("")

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        let lyrics = res.data.message.body.lyrics
        setLyrics({ lyrics })

        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
        )
      })
      .then(res => {
				let track = res.data.message.body.track
				let album = res.data.message.body.track.album_name
				console.log('album', res.data.message.body.track.album_name)
				setTrack({ track })
				setAlbum( album )
      })
      .catch(err => console.log(`Error: ` + err))
			

  }, [props.match.params.id])

  if (
    track === undefined ||
    lyrics === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics).length === 0
  ) {
    return <Spinner />
  } else {
    return (
      <React.Fragment>
        <Header style={{color: 'white', fontSize:"2rem"}}
          artist={track.track.artist_name}
          content={track.track.track_name}
        />

        <div className='lyrics-section-a'>
          <div className='lyrics-details'>
            <ul>
              <li>
								<strong>Album</strong>:{' '}
								{album === 0
                  ? 'NO ALBUM AVAILABLE'
                  : album}
              </li>
              <li>
                <strong>Genre</strong>:{' '}
                {track.track.primary_genres.music_genre_list.length === 0
                  ? 'NO GENRE AVAILABLE'
                  : track.track.primary_genres.music_genre_list[0].music_genre
                      .music_genre_name}
              </li>
              <li>
                <strong>Explicid Words</strong>:{' '}
                {track.track.explicit === 0 ? 'No' : 'Yes'}
              </li>
              <li>
                <strong>Release Date</strong>:{' '}
                <Moment format='MM/DD/YYYY'>
                  {track.track.first_release_date}
                </Moment>
              </li>
            </ul>
            <div>
              <Link to='/'>
                <button className='back-button'>
                  <i className='fas fa-arrow-left'></i> Back
                </button>
              </Link>
            </div>
          </div>
          <div>
            <h3>
              {track.track.track_name} by{' '}
              <span className='text-secondary'>{track.track.artist_name}</span>
            </h3>
            <p>{lyrics.lyrics.lyrics_body}</p>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    )
  }
}

export default Lyrics

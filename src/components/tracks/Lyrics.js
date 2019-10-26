import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Moment from 'react-moment';
import Footer from '../layout/Footer';
import './lyrics.css';

const Lyrics = (props) => {
	const [ track, setTrack ] = useState({});
	const [ lyrics, setLyrics ] = useState({});

	useEffect(
		() => {
			axios
				.get(
					`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props
						.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
				)
				.then((res) => {
					let lyrics = res.data.message.body.lyrics;
					setLyrics({ lyrics });

					return axios.get(
						`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${props
							.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
					);
				})
				.then((res) => {
					let track = res.data.message.body.track;
					setTrack({ track });
				})
				.catch((err) => console.log(err));
		},
		[ props.match.params.id ]
	);

	if (
		track === undefined ||
		lyrics === undefined ||
		Object.keys(track).length === 0 ||
		Object.keys(lyrics).length === 0
	) {
		return <Spinner />;
	} else {
		return (
			<React.Fragment>
        <div className="header-bg">
          <div className="header-text">
          {track.track.track_name} by{' '}
          <span className="text-secondary">{track.track.artist_name}</span>
          </div>
        </div>
				<div className="lyrics-section-a">
					<div className="lyrics-details">
						<ul>
							<li><strong>Album_Id</strong>:{track.track.album_id}</li>
							<li><strong>
								Genre</strong>:{' '}
								{track.track.primary_genres.music_genre_list.length === 0 ? (
									'NO GENRE AVAILABLE'
								) : (
									track.track.primary_genres.music_genre_list[0].music_genre.music_genre_name
								)}
							</li>
							<li><strong>Explicid Words</strong>: {track.track.explicit === 0 ? 'No' : 'Yes'}</li>
							<li>
              <strong>Release Date</strong>: <Moment format="MM/DD/YYYY">{track.track.first_release_date}</Moment>
							</li>
						</ul>
					</div>
					<div>
						<h3>
							{track.track.track_name} by{' '}
							<span className="text-secondary">{track.track.artist_name}</span>
						</h3>
						<p>{lyrics.lyrics.lyrics_body}</p>
          </div>
          <div>
            <Link to="/">
              <button className="back-button">Back</button>
            </Link>
          </div>
        </div>
        
				<Footer />
			</React.Fragment>
		);
	}
};

export default Lyrics;

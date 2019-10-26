import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Spinner from '../layout/Spinner';

const Album = (props) => {
  const [album, setAlbum] = useState({});
  const [trackList, setTrackList] = useState({});

  useEffect(
    () => {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/album.get?album_id=${props
          .match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
        )
        .then((res) => {
          let album = res.data.message.body.album;
          setAlbum({album});

          return axios.get(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/album.track.get?album_id=${props
							.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
          );
        })
        .then((res) => {
					let trackList = res.data.message.body.track_list;
					setTrackList({ trackList });
				})
        .catch((err) => console.log(err));
    }, 
  [props.match.params.id]
  );

  if (
		album === undefined ||
		Object.keys(album).length === 0 
	) {
		return <Spinner />;
	} else {
      return(
        <React.Fragment>
          <Header artist={album.album.artist_name}
                  content={album.album.album_name}/>

          <div className="album-section-a">
            <div className="album-details">
              <ul>
                <li><strong>Album:</strong>{album.album.album_name}</li>
                <li><strong>Release Date:</strong>{album.album.album_release_date}</li>
                <li><strong>Artist:</strong>{album.album.artist_name}</li>
              </ul>
            </div>
            <div className="tracks-table">

            </div>
          </div>

          <Footer />
        </React.Fragment>
      );
  }
}

export default Album;
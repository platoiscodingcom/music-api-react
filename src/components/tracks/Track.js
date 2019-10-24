import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../../img/cover.png';

const Track = (props) => {
  const { track } = props;
  const shortTitle = track.track_name.substring(0, 22);
  const shortArist = track.artist_name.substring(0, 22);
  const shortAlbum = track.album_name.substring(0, 22);

	return (
		<div className="card">
			<div className="album-cover">
				<img src={Cover} alt="img" />
        <div className="overlay overlayFade">
          <Link to={`lyrics/track/${track.track_id}`} className="text">
            Read More
          </Link>
				</div>
			</div>
			<div className="card-body">
				<div className="card-body">
					<p className="music-title">{shortTitle}</p>
					<p className="music-artist">{shortArist}</p>
					<p className="music-info">{shortAlbum}</p>
				</div>
			</div>
		</div>
	);
};

export default Track;

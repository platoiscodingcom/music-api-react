import React, { useContext } from 'react';
import { Context } from '../../context';
import Spinner from '../layout/Spinner';
import Pagination from '../layout/Pagination';
import Genres from '../layout/Genres';
import Track from '../tracks/Track';

const Tracks = () => {
	const [ state ] = useContext(Context);
	const { track_list, heading } = state;

	if (track_list === undefined || track_list.length === 0) {
		return <Spinner />;
	} else {
		return (
			<React.Fragment>
				<Genres />
				<div className="section-b">
          <div className="container container-gallery animated fadeIn">
          
            {track_list.map(item => (
              <Track key={item.track.track_id} track={item.track} />
            ))}

          </div>
          <Pagination />
				</div>
			</React.Fragment>
		);
	}
};

export default Tracks;

import React, { useContext, useState} from 'react'
import { Context } from '../../context'
import Spinner from '../layout/Spinner'
import Genres from '../layout/Genres'
import Track from '../tracks/Track'
import Pagination from '../Pagination'

const Tracks = () => {
  const [state] = useContext(Context)
	const { track_list, heading } = state
	const [currentPage, setCurrentPage] = useState(1);
  const [tracksPerPage] = useState(8);
	
	// Get current tracks
  const indexOfLastTrack = currentPage * tracksPerPage;
  const indexOfFirstTrack = indexOfLastTrack - tracksPerPage;
  const currentTracks = track_list ? track_list.slice(indexOfFirstTrack, indexOfLastTrack) : []

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (track_list === undefined || track_list.length === 0) {
    return <Spinner />
  } else {
    return (
      <React.Fragment>
        <Genres />
        <div className='section-b'>
					<div className='container container-gallery animated fadeIn'>
					
            {currentTracks ? currentTracks.map(item => (
              <Track key={item.track.track_id} track={item.track} />
            )) : 'loading ...'}

            
          </div>
          <Pagination
						  tracksPerPage={tracksPerPage}
              totalTracks={track_list.length}
              paginate={paginate}
            />
        </div>
      </React.Fragment>
    )
  }
}

export default Tracks

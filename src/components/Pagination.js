import React from 'react'

const Pagination = ({ tracksPerPage, totalTracks, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalTracks / tracksPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className='container-pagination animated fadeIn delay-1s'>
      <nav className='pagination'>
        <ul>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <div className='page'>
                <a style={{color: "white"}} onClick={() => paginate(number)} href='/#'>
                  {number}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Pagination

import React from 'react';
import './Header.css';

const Header = ({content, artist}) => {

  return (
    <div className="header-bg">
          <div className="header-text">
          {content} by{' '}
          <span className="text-secondary">{artist}</span>
          </div>
        </div>
  );
}

export default Header;
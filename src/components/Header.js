import React from 'react';
import '../css/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <p className="header-left">Jason Marsh</p>
        <p className="header-right">Story</p>
      </header>
    )
  }
}

export default Header;

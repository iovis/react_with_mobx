import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__title">
          RubiconMD Retro
        </h1>

        <div className="header__columns">
          <h2>The Good</h2>
          <h2>The Bad</h2>
          <h2>The What?</h2>
        </div>
      </div>
    );
  }
}

export default Header;

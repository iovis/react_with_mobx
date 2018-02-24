import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
  render() {
    return (
      <div className="board">
        <div className="board__column"></div>
        <div className="board__column"></div>
        <div className="board__column"></div>
      </div>
    );
  }
}

export default Board;

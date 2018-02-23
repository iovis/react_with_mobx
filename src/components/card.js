import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  render() {
    return (
      <textarea className="card" value={this.props.body}></textarea>
    );
  }
}

export default Card;

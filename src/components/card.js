import React, { Component } from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import './card.css';

@observer
class Card extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
  }

  @action
  handleChange(event) {
    this.props.card.body = event.target.value;
  }

  handleDragStart(event) {
    this.clientX = event.clientX;
    this.clientY = event.clientY;
  }

  @action
  handleDragEnd(event) {
    const movedX = event.clientX - this.clientX;
    const movedY = event.clientY - this.clientY;

    this.props.card.moveX(movedX);
    this.props.card.moveY(movedY);
  }

  render() {
    const { card } = this.props;

    return (
      <textarea
        className="card"
        draggable="true"
        style={{left: card.x, top: card.y}}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
        onChange={this.handleChange}
        value={card.body}>
      </textarea>
    );
  }
}

export default Card;

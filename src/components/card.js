import React, { Component } from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import './card.css';

@observer
class Card extends Component {
  constructor() {
    super();

    this.handleChange    = this.handleChange.bind(this);
    this.handleDragEnd   = this.handleDragEnd.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleResize    = this.handleResize.bind(this);
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

  @action
  handleResize(event) {
    this.props.card.setWidth(event.target.offsetWidth);
    this.props.card.setHeight(event.target.offsetHeight);
    console.log(`
      width: ${event.target.offsetWidth}
      height: ${event.target.offsetHeight}
    `);
  }

  render() {
    const { card } = this.props;

    return (
      <textarea
        className="card"
        draggable="true"
        style={{
          width: card.width,
          height: card.height,
          left: card.x,
          top: card.y
        }}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
        onMouseUp={this.handleResize}
        onChange={this.handleChange}
        value={card.body}>
      </textarea>
    );
  }
}

export default Card;

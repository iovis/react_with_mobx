import React, { Component } from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import './card.css';

@observer
class Card extends Component {
  constructor() {
    super();

    this.handleChange    = this.handleChange.bind(this);
    this.handleDrag      = this.handleDrag.bind(this);
    this.handleDragEnd   = this.handleDragEnd.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleResize    = this.handleResize.bind(this);
  }

  @action
  handleChange(event) {
    this.props.card.body = event.target.value;
  }

  handleDragStart(event) {
    // Don't show the copy cursor
    event.dataTransfer.effectAllowed = 'move';

    // Set empty jpeg to hide the ghost image
    const img = new Image();
    img.src = 'empty.png';
    event.dataTransfer.setDragImage(img, 0, 0);

    // Distance from where the user clicked to
    // our coordinates
    this.offsetX = event.clientX - this.props.card.x;
    this.offsetY = event.clientY - this.props.card.y;
  }

  handleDrag(event) {
    const x = event.clientX - this.offsetX;
    const y = event.clientY - this.offsetY;

    requestAnimationFrame(this.moveCard.bind(this, x, y));
  }

  handleDragEnd(event) {
    this.handleDrag(event);
  }

  @action
  moveCard(x, y) {
    this.props.card.setX(x);
    this.props.card.setY(y);
  }

  handleDragOver(event) {
    // Prevent from resetting event.clientX/Y to zero when finishing drag
    event.preventDefault();
  }

  @action
  handleResize(event) {
    this.props.card.setWidth(event.target.offsetWidth);
    this.props.card.setHeight(event.target.offsetHeight);
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
        onDrag={this.handleDrag}
        onDragEnd={this.handleDragEnd}
        onDragOver={this.handleDragOver}
        onMouseUp={this.handleResize}
        onChange={this.handleChange}
        value={card.body}>
      </textarea>
    );
  }
}

export default Card;

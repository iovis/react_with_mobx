import React, { Component, Fragment } from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import icon from '../images/empty.png';
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
    this.moveCard        = this.moveCard.bind(this);
    this.removeCard      = this.removeCard.bind(this);
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
    img.src = icon;
    event.dataTransfer.setDragImage(img, 0, 0);

    // Distance from where the user clicked to
    // our coordinates
    this.offsetX = event.clientX - this.props.card.x;
    this.offsetY = event.clientY - this.props.card.y;
  }

  handleDrag(event) {
    this.x = event.clientX - this.offsetX;
    this.y = event.clientY - this.offsetY;

    requestAnimationFrame(this.moveCard);
  }

  handleDragEnd(event) {
    this.handleDrag(event);
  }

  @action
  moveCard() {
    this.props.card.setX(this.x);
    this.props.card.setY(this.y);
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

  @action
  removeCard() {
    this.props.removeCard(this.props.card.id);
  }

  render() {
    const { card } = this.props;

    return (
      <Fragment>
        <textarea
          className="card"
          draggable="true"
          style={{
            width: card.width,
            height: card.height,
            transform: `translate(${card.x}px, ${card.y}px)`
          }}
          onDragStart={this.handleDragStart}
          onDrag={this.handleDrag}
          onDragEnd={this.handleDragEnd}
          onDragOver={this.handleDragOver}
          onMouseUp={this.handleResize}
          onChange={this.handleChange}
          value={card.body}>
        </textarea>
        <div
          className="card__close"
          style={{
            transform: `translate(${card.x + card.width - 12}px, ${card.y - 12}px)`
          }}
          onClick={this.removeCard}
        >
          &times;
        </div>
      </Fragment>
    );
  }
}

export default Card;

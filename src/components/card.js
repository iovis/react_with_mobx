import React, { Component } from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import './card.css';

@observer
class Card extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  @action
  handleChange(event) {
    this.props.card.body = event.target.value;
  }

  render() {
    return (
      <textarea
        className="card"
        onChange={this.handleChange}
        value={this.props.card.body}>
      </textarea>
    );
  }
}

export default Card;

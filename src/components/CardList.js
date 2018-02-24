import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Card from './card';
import './CardList.css';

@observer
class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.store.cards.map(card => (
          <Card key={card.id} card={card} removeCard={this.props.store.removeCard}/>
        ))}
      </div>
    );
  }
}

export default CardList;

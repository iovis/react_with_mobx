import { observable, action } from 'mobx';
import Card from './card';

class Store {
  @observable cards = [];

  @action
  addCard = (body, x, y, width, height) => {
    this.cards.push(new Card(body, x, y, width, height));
  }

  @action
  removeCard = (id) => {
    this.cards = this.cards.filter(card => card.id !== id);
  }
}

export default Store;

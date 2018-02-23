import { observable, action } from 'mobx';
import Card from './card';

class Store {
  @observable cards = [];

  @action
  addCard(body) {
    this.cards.push(new Card(body));
  }
}

export default Store;

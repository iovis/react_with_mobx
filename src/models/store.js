import { observable, action } from 'mobx';
import Card from './card';

class Store {
  @observable cards = [];

  @action
  addCard = (body, x, y, width, height) => {
    this.cards.push(new Card(body, x, y, width, height));
  }
  }
}

export default Store;

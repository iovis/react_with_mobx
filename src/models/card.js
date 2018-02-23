import { observable } from 'mobx';

export default class Card {
  id = Date.now();
  @observable body;

  constructor(body) {
    this.body = body;
  }
}

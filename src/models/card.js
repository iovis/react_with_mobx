import { observable } from 'mobx';

export default class Card {
  id = Date.now();
  @observable body;
  @observable x = 0;
  @observable y = 0;

  constructor(body) {
    this.body = body;
  }
}

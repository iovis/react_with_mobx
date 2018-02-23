import { observable, action } from 'mobx';

export default class Card {
  id = Date.now();
  @observable body;
  @observable x = 0;
  @observable y = 0;

  constructor(body) {
    this.body = body;
  }

  @action
  moveX(movedX) {
    this.x += movedX;
    if (this.x < 0) this.x = 0;
  }

  @action
  moveY(movedY) {
    this.y += movedY;
    if (this.y < 0) this.y = 0;
  }
}

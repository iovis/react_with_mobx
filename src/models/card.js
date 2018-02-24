import { observable, action } from 'mobx';

const MINIMUM_WIDTH = 80;
const MINIMUM_HEIGHT = 50;

export default class Card {
  id = Date.now();
  @observable body;
  @observable x = 0;
  @observable y = 0;
  @observable width = 100;
  @observable height = 50;

  constructor(body) {
    this.body = body;
  }

  @action
  moveX(movedX) {
    this.x += movedX;

    if (this.x < 0) {
      return this.x = 0;
    }

    // Don't let it go out of bounds
    if (this.x > window.innerWidth - this.width) {
      this.x = window.innerWidth - this.width;
    }
  }

  @action
  moveY(movedY) {
    this.y += movedY;

    if (this.y < 0) {
      return this.y = 0;
    }

    // Don't let it go out of bounds
    if (this.y > window.innerHeight - this.height) {
      this.y = window.innerHeight - this.height;
    }
  }

  @action
  setWidth(width) {
    this.width = (width < MINIMUM_WIDTH) ? MINIMUM_WIDTH : width;
  }

  @action
  setHeight(height) {
    this.height = (height < MINIMUM_HEIGHT) ? MINIMUM_HEIGHT : height;
  }
}

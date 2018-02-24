import { observable, action } from 'mobx';

const MINIMUM_WIDTH = 80;
const MINIMUM_HEIGHT = 50;

export default class Card {
  id = Date.now();
  @observable body;
  @observable x;
  @observable y;
  @observable width;
  @observable height;

  constructor(body, x = 0, y = 0, width = MINIMUM_WIDTH * 2, height = MINIMUM_HEIGHT * 2) {
    this.body = body;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  @action
  setX(x) {
    if (x < 0) return this.x = 0;

    // Don't let it go out of bounds
    if (x > window.innerWidth - this.width) {
      return this.x = window.innerWidth - this.width;
    }

    this.x = x;
  }

  @action
  setY(y) {
    if (y < 0) return this.y = 0;

    // Don't let it go out of bounds
    if (y > window.innerHeight - this.height) {
      return this.y = window.innerHeight - this.height;
    }

    this.y = y;
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

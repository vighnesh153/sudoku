export default class Cell {
  #value;
  #color;

  get color() {
    return this.#color;
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    this.#value = value;
  }

  constructor({ value, fixed }) {
    this.#value = value || '--';
    this.#color = fixed ? 'red' : 'black';
  }

};

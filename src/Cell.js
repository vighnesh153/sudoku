export default class Cell {
  value;
  color;

  constructor({ value, fixed }) {
    this.value = value || '--';
    this.color = fixed ? 'red' : 'black';
  }
};

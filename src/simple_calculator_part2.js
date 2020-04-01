let LAST = 0;

class Calc {
  constructor() {
    this.results = [];
    this.memorySlots = [];
  }

  add() {
    let sum = 0,
      i;
    for (i = 0; i < arguments.length; i++) {
      if (arguments[i] == "LAST") {
        sum += this.last();
      } else if (
        typeof arguments[i] === "string" &&
        arguments[i].includes("SLOT_")) {
        let pos = arguments[i].match(/\d+/g);
        parseInt(pos);
        sum += this.get_slot(pos);
      } else
        sum += arguments[i];
    }
    this.results.push(sum);
    return sum;
  }

  multiply() {
    let product = 1,
      i;

    for (i = 0; i < arguments.length; i++) {
      if (arguments[i] == "LAST") {
        product *= this.last();
      } else if (
        typeof arguments[i] === "string" &&
        arguments[i].includes("SLOT_")) {
        let pos = arguments[i].match(/\d+/g);
        parseInt(pos);
        product *= this.get_slot(pos);
      } else
        product *= arguments[i];
    }
    this.results.push(product);
    return product;
  }
  
  last() {
    LAST = this.results[this.results.length - 1];
    return LAST;
  }

  set_slot(num1) {
    this.memorySlots.push(this.results[num1 - 1]);
  }

  get_slot(num1) {
    return this.memorySlots[num1 - 1];
  }
}


module.exports = Calc;
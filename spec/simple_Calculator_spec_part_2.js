describe("the calculations", () => {
  beforeEach(function () {
    global.Calculator = require("../src/simple_Calculator_part2");
    global.calculator = new Calculator();
  })

  //add function
  it("should add two integers", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  it("should add three or more integers", () => {
    expect(calculator.add(1, 3, 5)).toBe(9);
  });
});

describe("the calculations", () => {
  beforeEach(function () {
    global.Calculator = require("../src/simple_Calculator_part2");
    global.calculator = new Calculator();
  });
  //multiply function
  it("should multiply two integers", () => {
    expect(calculator.multiply(6, 2)).toBe(12);
  });
  it("should multiply two or more integers ", () => {
    expect(calculator.multiply(6, 3, 2)).toBe(36);
  });
});

// last, get && get_slot functions
describe("various calculations (last, get_slot, Last, get_slot)", () => {
  beforeEach(() => {
    global.Calculator = require("../src/simple_Calculator_part2");
    global.calculator = new Calculator();
  });

  
  it("it should output the last results in the calculator", () => {
    calculator.add(2, 3);
    calculator.add(7, 13);
    expect(calculator.last()).toBe(20);
  });

  // set_slot
  it("assigns a slot to the answer in the calculator", () => {
    spyOn(calculator, "set_slot");
    calculator.add(1, 4);
    calculator.set_slot(1);
    expect(calculator.set_slot).toHaveBeenCalledWith(1);
  });

  // get_slot
  it("gets the answer from a specific slot", () => {
    calculator.add(1, 20);
    calculator.last();
    calculator.set_slot(1);
    expect(calculator.get_slot(1)).toBe(21);
  });
});
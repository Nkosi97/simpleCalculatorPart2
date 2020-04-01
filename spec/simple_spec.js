describe("the calculations", () => {
  beforeEach(function () {
    global.Calc = require("../src/simple_calculator_part2");
    global.calculator = new Calc();
  })

  //add
  it("should add two integers", () => {
    expect(calculator.add(2, 2)).toBe(4);
  });
  it("should add three or more integers", () => {
    expect(calculator.add(3, 3, 5)).toBe(11);
  });
});

describe("the calculations", () => {
  beforeEach(function () {
    global.Calc = require("../src/simple_calculator_part2");
    global.calculator = new Calc();
  });

  //multiply
  it("should multiply two integers", () => {
    expect(calculator.multiply(5, 2)).toBe(10);
  });
  it("should multiply two or more integers ", () => {
    expect(calculator.multiply(2, 2, 1)).toBe(4);
  });
});

// last, get && get_slot functions
describe("various calculations (last, get_slot, Last, get_slot)", () => {
  beforeEach(() => {
    global.Calc = require("../src/simple_calculator_part2");
    global.calculator = new Calc();
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
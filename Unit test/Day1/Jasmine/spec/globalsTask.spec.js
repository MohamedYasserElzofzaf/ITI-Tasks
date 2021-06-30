const { sum, positive } = require("../index");

describe("testing math utilities", () => {
  let pos_vals;
  let neg_vals;
  let vals;
  let sum_of_vals;

  beforeAll(() => {
    pos_vals = [1, 2, 3, 4, 5];
    neg_vals = [-1, -2, -3, -4];
    vals = pos_vals.concat(neg_vals);
    sum_of_vals = vals.reduce((x, y) => x + y, 0);
  });

  beforeEach(() => {
    console.log(pos_vals);
    console.log(neg_vals);
    console.log(vals);
    console.log(sum_of_vals);
  });

  afterEach(() => {
    console.log("done");
  });

  afterAll(() => {
    pos_vals = 0;
    neg_vals = 0;
    vals = 0;
    sum_of_vals = 0;
  });

  it("sum function should equal the sum of the values", () => {
    expect(sum(vals)).toBe(sum_of_vals);
  });

  it("positive function should equal the positive values", () => {
    expect(positive(vals)).toEqual(pos_vals);
  });
  
});

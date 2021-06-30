// const { capitalizeText } = require("../index");
// const expect = require("chai").expect;
// const assert = require("chai").assert;
// const should = require("chai").should();

describe("Test capitalText function return capitalized string", () => {
  it("should output capitalized string ", () => {
    capitalizeText("hamada").should.equal("HAMADA");
    // expect(capitalizeText("hamada")).to.equal("SOMETEXT");
    // assert.equal(capitalizeText("hamada"), "SOMETEXT");
  });

  it("should output string type", () => {
    capitalizeText("hamada").should.be.a("string");
    // expect(capitalizeText("someText")).to.be.a("string");
    // assert.isString(capitalizeText("someText"));
  });

  it("should throw error", () => {
    expect(capitalizeText).to.throw(TypeError, "parameter should be string");
  });
});

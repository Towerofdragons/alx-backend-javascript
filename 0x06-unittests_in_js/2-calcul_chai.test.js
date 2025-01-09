const calculateNumber = require("./2-calcul_chai.js");
const { describe, it } = require("mocha");
const expect = require('chai').expect;


describe("Test 1-calcul SUM", () => {
  it("has correct output for SUM", () => {
    expect(calculateNumber("SUM", 2, 3)).to.equal(5);
  });

  it("has correct output for DIVIDE", () => {
    expect(calculateNumber("DIVIDE", 10, 2)).to.equal(5);
  });

  it("has correct output for DIVIDE when b is 0", () => {
    expect(calculateNumber("DIVIDE", 2, 0)).to.equal("Error");
  });

  it("has correct output for SUBTRACT", () => {
    expect(calculateNumber("SUBTRACT", 5, 2)).to.equal(3);
  });

  it("has correct output for SUBTRACT with decimal values", () => {
    expect(calculateNumber("SUBTRACT", 1.4, 2.2)).to.equal(-1);
  });
});

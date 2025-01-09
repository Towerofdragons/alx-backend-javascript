const { describe } = require("node:test");
const calculateNumber = require("./1-calcul.js");
const assert =  require("assert");


describe("Test 1-calcul", ()=> {
    it("has correct output for SUM", () => {
        assert.equal(calculateNumber("SUM",2,3),5);
    });

    it("has correct output for SUBTRACT", () => {
        assert.equal(calculateNumber("SUBTRACT",5,2),3);
    });

    it("has correct output for DIVIDE", () => {
        assert.equal(calculateNumber("DIVIDE",10,2),5);
    });

    it("has correct output for DIVIDE when b is 0", () => {
        assert.equal(calculateNumber("SUM",2,3), Error);
    })
});

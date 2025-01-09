const calculateNumber = require("./0-calcul");

const assert = require("assert");

describe("addition test", function(){
    it("check equality - integers", function(){
        assert.equal(calculateNumber(2,3),5);
    });

    it("rounds a", function(){
        assert.equal(calculateNumber(2.5, 0), 3);
    });

    it('rounds b', () => {
        assert.strictEqual(calculateNumber(0, -3.7), -4); 
    });
    it('produces a rounded number', () => {
        assert.strictEqual(calculateNumber(0, -3.7), -4)
    });
})
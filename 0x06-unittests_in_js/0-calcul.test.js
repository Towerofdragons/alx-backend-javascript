const calculateNumber = require("./0-calcul");

const assert = require("assert");

describe("addition test", function(){
    it("check equality - integers", function(){
        assert.equal(calculateNumber(2,3),5);
    });

    it("check equality - float", function(){
        assert.equal(calculateNumber(2.5, 2.5), 6);
    });


    it('should handle negative numbers', () => {
        assert.strictEqual(calculateNumber(-1.4, -3.7), -5); // -1 + (-4) = -5
        assert.strictEqual(calculateNumber(-1.5, -3.7), -6); // -2 + (-4) = -6
        assert.strictEqual(calculateNumber(-1.6, -3.2), -5); // -2 + (-3) = -5
      });
    
    it('should handle a mix of positive and negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.3, 3.7), 3); // -1 + 4 = 3
    assert.strictEqual(calculateNumber(1.6, -3.2), -1); // 2 + (-3) = -1
    assert.strictEqual(calculateNumber(-1.5, 2.5), 1); // -2 + 3 = 1
    });

    it('should handle zero', () => {
    assert.strictEqual(calculateNumber(0, 0), 0); // 0 + 0 = 0
    assert.strictEqual(calculateNumber(0, 3.7), 4); // 0 + 4 = 4
    assert.strictEqual(calculateNumber(-1.5, 0), -2); // -2 + 0 = -2
    });
})
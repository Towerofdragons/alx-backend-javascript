const calculateNumber = require("./0-calcul");

const assert = require("assert");

describe("addition test", function(){
    it("check equality - integers", function(){
        assert.equal(calculateNumber(2,3),5);
    });

    it("check equality - float", function(){
        assert.equal(calculateNumber(2.5, 2.5), 6);
    });
})
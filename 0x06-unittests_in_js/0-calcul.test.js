const calculateNumber = require("./0-calcul");

const assert = require("assert");

describe("addition test", function(){
    it("check equality", function(){
        assert.equal(calculateNumber(2,3),5);
    })
})
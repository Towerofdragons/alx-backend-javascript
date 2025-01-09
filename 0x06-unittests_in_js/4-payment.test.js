const sinon = require("sinon");
const { expect } = require('chai');
const { describe, it } = require("mocha");
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Testing sendPaymentRequestToApi', () => {
  it('uses Utils.calculateNumber to compute the sum', () => {
    //const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    const consoleLogSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(calculateNumberStub);
    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
    
    // expect(calculateNumberSpy.calledOnce).to.be.true;
    // expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 10');

    // Restore the spy
    //calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });
});
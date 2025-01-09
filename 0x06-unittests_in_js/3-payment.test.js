const sinon = require("sinon");
const { expect } = require('chai');
const { describe, it } = require("mocha");
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Testing sendPaymentRequestToApi', () => {
  it('uses Utils.calculateNumber to compute the sum', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce).to.be.true;

    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    // Restore the spy
    calculateNumberSpy.restore();
  });
});
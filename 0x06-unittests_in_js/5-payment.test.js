const sinon = require("sinon");
const { expect } = require('chai');
const { describe, it } = require("mocha");
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('Testing sendPaymentRequestToApi', () => {
  beforeEach("Set up one spy for each test", () => {
    sinon.spy(console, "log");
  });

  afterEach("Reset the spy", () => {
    console.log.restore();
  });

  it('Check the log for correct args', () => {
    sendPaymentRequestToApi(100, 20);

	  expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
  });

  it('Check the log for correct args', () => {
    sendPaymentRequestToApi(10, 10);

	  expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
  });  

});

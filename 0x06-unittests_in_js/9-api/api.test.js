const { expect } = require('chai');
const {describe, it} = require("mocha");
// const app = require('./api')
const request = require('request');


describe('Testing Index page', () => {

  const options = {
    url: 'http://localhost:7865',
    method: 'GET',
  };

  it('Has route', (done) => {
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Returns correct status code', (done) => {
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Returns correct result', (done) => {
    request(options, (error, response, body) => {
      expect(body == 'Welcome to the payment system').to.be.true;
      done();
    });
  });
});

describe('Testing Card route', () => {

  it('Returns correct status code if id is a number', (done) => {

    const options = {
      url: 'http://localhost:7865/cart/12',
      method: 'GET',
    };

    request(options, (error, response, body) => {
      expect(body == 'Payment methods for cart 12').to.be.true;
      done();
    });
  });

  it('Returns correct status body if id is a number', (done) => {

    const options = {
      url: 'http://localhost:7865/cart/12',
      method: 'GET',
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Returns correct status code if id is not a number', (done) => {

    const options = {
      url: 'http://localhost:7865/text',
      method: 'GET',
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
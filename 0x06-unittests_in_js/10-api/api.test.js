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


describe('Testing Login route', () => {

  it('Returns correct message with username ', (done) => {
    const user = { userName: 'Betty' };
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      body: user,
      json: true
    };

    request(options, (error, response, body) => {
      expect(body).to.equal("Welcome Betty");
      done();
    });
  });

});

describe('Testing available_payments route', () => {

  it('Returns correct body', (done) => {

    const options = {
      url: 'http://localhost:7865/available_payments',
      method: 'GET',
    };

    request(options, (error, response, body) => {
      expect(JSON.parse(body)).to.deep.equal({
        'payment_methods': {
          'credit_cards': true,
          'paypal': false
        }
      });
      done();
    });
  });

  it('Returns correct status code', (done) => {

    const options = {
      url: 'http://localhost:7865/available_payments',
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
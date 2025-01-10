const { expect } = require('chai');
const { describe, it } = require("mocha");
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('Testing getPaymentTokenFromAPI', () => {
  it('returns a resolved promise with the correct object when success = true', (done) => {
    getPaymentTokenFromAPI(true)
    .then((response) => {
      expect(response).to.have.property('data');
      done();
    });
  });

  it('does nothing when success = false', (done) => {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined;
    done();
  });  

});
const sinon = require("sinon");
const { expect } = require('chai');
const { describe, it } = require("mocha");
const getPaymentTokenFromAPI = require('./6-payment_token.js');
const Utils = require('./utils');

describe('Testing getPaymentTokenFromAPI', () => {
  it('returns a resolved promise with the correct object when success = true', () => {
    getPaymentTokenFromAPI(true)
    .then((response) => {
      expect(response).to.equal({ data: 'Successful response from the API' });
      done();
    });

	  
  });

  it('does nothing when success = false', (done) => {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined;
    done();
  });  

});
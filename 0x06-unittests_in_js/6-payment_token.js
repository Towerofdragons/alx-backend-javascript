function getPaymentTokenfromAPI(success) {
    if (success) {
      return Promise.resolve({data: 'Successful response from the API' });
    }
}

module.exports = getPaymentTokenfromAPI;
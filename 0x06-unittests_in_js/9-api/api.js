const express = require('express');

app = express();

app.get('/', (req,res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req,res) => {
  if (isNaN(req.params.id)) {
    return res.status(404).send('ID must be a number');
  }
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
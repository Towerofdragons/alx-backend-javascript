const express = require('express');

app = express();
app.use(express.json());

app.get('/', (req,res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req,res) => {
  if (isNaN(req.params.id)) {
    return res.status(404).send('ID must be a number');
  }
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req,res) => {
  response = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  }
  res.send(response);
});

app.post('/login', (req,res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
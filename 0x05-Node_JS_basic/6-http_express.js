const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

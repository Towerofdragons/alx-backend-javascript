const express = require('express');

const app = express();
const port = 1245;

const countStudents = require('./3-read_file_async');
const path = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const output = countStudents(path)
  .then((output) => {
    res.send(output);
  })
  .catch((error) => {
    res.send(error.message);
  });
});

app.listen(port);

module.exports = app;
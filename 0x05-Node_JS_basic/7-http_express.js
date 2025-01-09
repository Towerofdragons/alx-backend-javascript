const express = require('express');

const app = express();
const port = 1245;

const countStudents = require('./3-read_file_async');
const path = process.argv[2];

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const output = countStudents(path)
  .then((output) => {
    res.status(200).send("This is the list of our students\n"+output);
  })
  .catch((error) => {
    res.status(200).send("This is the list of our students\n"+'Cannot load the database');
  });
});

app.listen(port);

module.exports = app;
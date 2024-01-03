const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '.env')
});
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/', require('./router'));

app.use((req, res) => {
  res.status(404).send();
});

http.listen(PORT, '0.0.0.0', () => {
  console.log(`App is listening on: http://localhost:${PORT}`);
});

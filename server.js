'use strict'
const process = require('process');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/form-submit-redirect', (req, res) => {
  console.log(req.body);
  res.redirect(307, '/form-submit');
});

app.post('/form-submit', (req, res) => {
  console.log(req.body)
  res.send(`
    <p>You should see the data you submitted below. If you do not, your browser has a problem.</p>
    <p>${JSON.stringify(req.body)}</p>
  `);
});

app.listen(process.env.PORT || 3000, (error) => {
  console.log('Server running on port', process.env.PORT || 3000);
});
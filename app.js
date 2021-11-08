const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/html/signup.html', function(req,res) {
    res.sendFile(path.join(__dirname + '/html/signup.html'));
});

app.get('/html/login.html', function(req,res) {
    res.sendFile(path.join(__dirname + '/html/login.html'));
});

app.get('/html/dashboard.html', function(req,res) {
    res.sendFile(path.join(__dirname + '/html/dashboard.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
var path = require('path');
var express = require('express');

var port = process.env.PORT || 8080;
var app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname), '../public/home.html')
});

app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname), '../public/survey.html')
});
//server

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var favIcon = require('serve-favicon');

var app = express();
app.disable('x-powered-by');

var port = process.env.PORT || '3000';
app.set('port', port);

app.use(favIcon(path.join(__dirname, "../public", "favicon.ico")));
app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/client', express.static(path.join(__dirname, '../client')));



app.use(express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../tools')));

app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(port);
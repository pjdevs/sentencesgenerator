//Modules
var express = require('express');
var morgan = require('morgan');

//Vars
var app = express()

//Middlewares
app.use(express.static(__dirname + '/public'))
.use(morgan('common')); 

//Routes
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.sendfile('index.html');
})
.use(function(req, res) {
    res.redirect('/');
});

var server = app.listen(80, '0.0.0.0', () => {
    console.log('Server is listenning on ' + server.address().address + ':' + server.address().port);
});
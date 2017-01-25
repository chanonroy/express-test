var path = require('path');
var port = process.env.PORT || 3000;
var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

var app = express();

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public', 'dist')));
app.use(favicon(path.join(__dirname, 'public', 'dist', 'favicon.ico')));

// MIDDLEWARE
app.use(require('./middlewares/logging'));

// ROUTES
app.get('/', function(req, res){
  res.render('index.html');
});

// PORT LISTEN
app.listen(port, function(){
  console.log('Server started on Port ' + port + '...');
});

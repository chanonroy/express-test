var path = require('path');
var port = process.env.PORT || 3000;
var express = require('express');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');

var indexURL = require('./routes/index');
var teamURL = require('./routes/teams');

var app = express();

// VIEW ENGINE (nunjucks - jinja2)
nunjucks.configure('views', { autoescape: true, express: app });
app.set('view engine', 'nunjucks');
app.set('views', path.join(__dirname, '/views'));

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public/dist')));

// MIDDLEWARE
app.use(require('./middlewares/logging'));

// ROUTES
app.use('/', indexURL);
app.use('/teams', teamURL);
app.get('*', function(req, res) {
  res.status(404).render('404.html');
});

// PORT LISTEN
app.listen(port, function(){
  console.log('Server started on Port ' + port + '...');
});

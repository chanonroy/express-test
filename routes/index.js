var express = require('express');
var router = express.Router();

// index
router.get('/', function(req, res){
  res.render('home.html');
});

module.exports = router;

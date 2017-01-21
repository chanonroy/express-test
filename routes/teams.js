var express = require('express');
var router = express.Router();

var teamsData = require('../models/teams.js');

router.get('/', function(req, res){
  res.render('detail.html', {
    teams: teamsData
  });
});

module.exports = router;

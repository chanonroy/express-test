var express = require('express');
var router = express.Router();

var teamsData = require('../models/teams.js');

router.get('/', function(req, res){
  res.render('teams/list.html', {
    teams: teamsData
  });
});

router.get('/:id(\\d+)/', function(req, res){
  res.send('The team id is ' + req.params.id);
});

module.exports = router;

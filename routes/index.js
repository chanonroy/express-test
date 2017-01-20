var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('detail.html', {
    teams: [
      { name: 'New England Patriots' },
      { name: 'Atlanta Falcons' },
      { name: 'Green Bay Packers' }
    ]
  });
});

module.exports = router;

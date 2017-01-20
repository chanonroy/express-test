var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('detail.html', {
    title: "Sample Node App"
  });
});

module.exports = router;

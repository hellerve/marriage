var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.post('/', function(req, res, next) {
  fs.appendFile("./people", JSON.stringify(req.body));
  res.render('success.html');
});

module.exports = router;

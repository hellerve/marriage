var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.post('/', function(req, res, next) {
  fs.appendFile("./people", JSON.stringify(req.body));
  res.render('success.html');
});

router.get('/de', function(req, res, next) {
  res.render('de.html');
});

router.post('/de', function(req, res, next) {
  fs.appendFile("./people", JSON.stringify(req.body));
  res.render('success.de.html');
});

module.exports = router;

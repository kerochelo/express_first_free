var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('boards', { title: 'Boards' });
});

module.exports = router;

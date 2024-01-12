'use strict';
var express = require('express');
var router = express.Router();

/* GET menu page. */
router.get('/', function(req, res) {
  console.log('Menu page');
  res.render('Menu/menu', { title: 'Menu' });
});

module.exports = router;

'use strict';
var express = require('express');
var router = express.Router();
var HTTP = process.env.HTTP || 'http://localhost:3000';

/* GET menu page. */
router.get('/', function(req, res) {
  console.log('Menu page');
  res.render('Menu/menu', { title: 'Menu', css: HTTP + 'Menu/stylesheets/style.css' });
});

module.exports = router;

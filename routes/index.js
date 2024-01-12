'use strict';
var express = require('express');
var router = express.Router();
var HTTP = process.env.HTTP || 'http://localhost:3000';

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'PartyWaker', css: '/stylesheets/style.css', script: '/javascripts/script.js', buttonUrl: HTTP + '/menu' });
});

module.exports = router;

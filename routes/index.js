'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'PartyWaker' });
});

router.get('/notImplementedYet', function (req, res) {
  res.render('notImplementedYet', {});
});

module.exports = router;

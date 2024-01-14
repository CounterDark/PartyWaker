'use strict';
var express = require('express');
var router = express.Router();
const { createMatch } = require('../../App/MatchMaker/matchMaker');
const matchType = require('../../App/Shared/Enums/matchType');

router.post('/start-neverEver', function (req, res) {
    let matchId = createMatch(matchType.NEVER_EVER);
    res.json({ matchId, type: matchType.NEVER_EVER });
});

module.exports = router;

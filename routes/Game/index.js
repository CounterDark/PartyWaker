'use strict';
var express = require('express');
var router = express.Router();
const gameManager = require('../../App/Game/Managers/gameManager');
const matchType = require('../../App/Shared/Enums/matchType');
const questionType = require('../../App/Shared/Enums/questionType');

router.get('/', (req, res) => {
    let type = req.query.type;
    let matchId = req.query.matchId;
    const game = gameManager.getGame(matchId);
    if (game == null) {
        res.render('Game/noGameFound', {
            title: 'Game',
        });
        return;
    }
    switch (type) {
        case matchType.NEVER_EVER:
            if (!game.hasStarted()) {
                game.start({ type: questionType.ALL });
            }
            res.render('Game/neverEver', {
                title: 'Never Ever',
                question: game.getController().getCurrentQuestion(),
            });
            break;
        default:
            res.render('Game/game', {
                title: 'Game',
            });
    }
});

router.post('/getNextQuestion', (req, res) => {
    let matchId = req.body.matchId;
    const game = gameManager.getGame(matchId);
    if (game == null) {
        res.status(404).send('No game found');
        return;
    }
    let question = game.getController().nextQuestion();
    if (question == null) {
        game.end();
        res.json({ ended: true });
        return;
    }
    res.json({ question });
});

module.exports = router;
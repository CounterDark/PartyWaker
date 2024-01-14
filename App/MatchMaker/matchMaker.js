'use strict';

const Game = require('../Game/Game');
const controllerManager = require('../Game/Managers/controllerManager');
const gameManager = require('../Game/Managers/gameManager');
const { generateMatchId } = require('./utils/matchIdGenerator');

function createMatch(type) {
    const matchId = generateMatchId(type);
    const controller = controllerManager.getGameController(type, matchId);
    const game = new Game(matchId, type, controller);
    gameManager.addGame(game);
    return matchId;
}

module.exports = {
    createMatch
};
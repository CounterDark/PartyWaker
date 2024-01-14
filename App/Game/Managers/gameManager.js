'use strict';

const GameStorage = require('../Storage/gameStorage');

function addGame(game) {
    GameStorage.addGame(game);
}

function getGame(matchId) {
    return GameStorage.getGame(matchId);
}

function removeGame(matchId) {
    GameStorage.removeGame(matchId);
}

module.exports = {
    addGame,
    getGame,
    removeGame
};
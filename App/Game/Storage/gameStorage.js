'use strict';
const moment = require('moment');

const TTL = moment.duration(1, 'hour').asMilliseconds();

function GameStorage() {
    this.games = new Map();
    this.ttlMap = new Map();
}

GameStorage.prototype.checkTTL = function (matchId = null) {
    let keysToRemove = removeExpired(this.ttlMap.entries(), []);
    keysToRemove.forEach(key => {
        this.games.delete(key);
        this.ttlMap.delete(key);
    });
    if (matchId != null) {
        updateTTL(this.ttlMap, matchId);
    }
};

GameStorage.prototype.addGame = function (game) {
    this.checkTTL();
    this.ttlMap.set(game.matchId, moment.now() + TTL);
    this.games.set(game.matchId, game);
};

GameStorage.prototype.getGame = function (matchId) {
    this.checkTTL(matchId);
    return this.games.get(matchId) ?? null;
};

GameStorage.prototype.removeGame = function (matchId) {
    this.ttlMap.delete(matchId);
    this.games.delete(matchId);
    this.checkTTL();
};

function removeExpired(iterator, keysToRemove) {
    let entry = iterator.next()?.value;
    if (entry) {
        if (moment.now() > entry[1]) {
            keysToRemove.push(entry[0]);
            removeExpired(iterator, keysToRemove);
        }
    }
    return keysToRemove;
}

function updateTTL(ttlMap, matchId) {
    if (ttlMap.has(matchId)) {
        ttlMap.set(matchId, moment.now() + TTL);
    }
}

const gameStorage = new GameStorage();
module.exports = gameStorage;
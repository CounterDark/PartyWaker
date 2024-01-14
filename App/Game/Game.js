'use strict';

function Game(matchId, type, controller) {
    this.matchId = matchId;
    this.type = type;
    this.controller = controller;
    this.started = false;
    this.ended = false;
}

Game.prototype.start = function (data) {
    console.log(`Game ${this.type}-${this.matchId} started`);
    this.started = true;
    this.controller.start(data);
};

Game.prototype.end = function () {
    console.log(`Game  ${this.type}-${this.matchId} stopped`);
    this.ended = true;
    this.controller.end();
}

Game.prototype.hasStarted = function () {
    return this.started;
}

Game.prototype.hasEnded = function () {
    return this.ended;
}

Game.prototype.getController = function () {
    return this.controller;
}

module.exports = Game;
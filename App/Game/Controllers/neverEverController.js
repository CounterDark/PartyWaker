'use strict';
const _ = require('lodash');

const collectionManager = require('../../Collections/collectionManager');
const gameManager = require('../Managers/gameManager');
const questionType = require('../../Shared/Enums/questionType');

function NeverEverController(matchId) {
    this.matchId = matchId;
    this.questions = [];
    this.currentQuestion = null;
}

NeverEverController.prototype.start = function ({ type }) {
    loadCollections(type, this);
    this.nextQuestion();
    console.log(`NeverEverController ${this.matchId} started`);
}

NeverEverController.prototype.end = function () {
    gameManager.removeGame(this.matchId);
    console.log(`NeverEverController ${this.matchId} ended`);
}

NeverEverController.prototype.setQuestions = function (questions) {
    this.questions = questions;
}

NeverEverController.prototype.addQuestion = function (question) {
    this.questions.push(question);
}

NeverEverController.prototype.nextQuestion = function () {
    if (this.questions.length == 0) {
        return null;
    }
    this.currentQuestion = this.questions.shift();
    return this.currentQuestion;
}

NeverEverController.prototype.getCurrentQuestion = function () {
    return this.currentQuestion;
}

function loadCollections(type, controller) {
    let questionCollection = collectionManager.getCollection('Question');
    if (type == questionType.ALL) {
        parseDataToGame(questionCollection, controller);
    } else {
        parseDataToGame(questionCollection?.filter(c => c.type == type), controller);
    }
}

function parseDataToGame(data, controller) {
    let questions = data
        .reduce((acc, curr) => {
            acc = acc.concat(curr.question + ';');
            return acc;
        }, '')
        .split(';');
    questions.pop();
    controller.setQuestions(_.shuffle(questions));
}

module.exports = NeverEverController;
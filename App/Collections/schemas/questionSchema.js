'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    type: String,
    question: String,
});

const QuestionModel = mongoose.model('Question', QuestionSchema);

module.exports = QuestionModel;

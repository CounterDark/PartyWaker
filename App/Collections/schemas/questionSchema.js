'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    type: String,
    question: String,
});

const QuestionModel = mongoose.model('Question', QuestionSchema);


QuestionModel.load = function () {
    return new Promise((resolve, reject) => {
        QuestionModel.find({}).exec().then((questions) => {
            resolve(questions.map((question) => question.toObject()));
        }).catch((err) => {
            reject(err);
        });
    });
};

module.exports = QuestionModel;

'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    login: String,
    password: String,
});

const UserModel = mongoose.model('User', UserSchema);

UserModel.load = function () {
    return new Promise((resolve, reject) => {
        UserModel.find({}).exec().then((users) => {
            resolve(users.map((user) => user.toObject()));
        }).catch((err) => {
            reject(err);
        });
    });
};

module.exports = UserModel;

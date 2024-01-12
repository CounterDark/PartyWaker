'use strict';
const models = require('./schemas/index');

function CollectionManager() {
    this.collections = [];
}

CollectionManager.prototype.loadCollections = async function() {
    for (let model of models) {
        await model.find({}).then((data) => {
            this.collections.push(data);
        });
    }
}

CollectionManager.prototype.getCollections = function() {
    return this.collections;
}

const collectionManager = new CollectionManager();
module.exports = collectionManager;
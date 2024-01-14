'use strict';
const models = require('./schemas/index');

function CollectionManager() {
    this.collections = new Map();
}

CollectionManager.prototype.loadCollections = async function () {
    for (let model of models) {
        await model.load().then((data) => {
            this.collections.set(model.modelName, data);
        }).catch((err) => {
            console.log(`Model loading error: ${err}`);
        });
    }
}

CollectionManager.prototype.getCollections = function () {
    const collectionsObject = {};
    for (let [key, value] of this.collections.entries()) {
        collectionsObject[key] = value;
    }
    return collectionsObject;
}

CollectionManager.prototype.getCollectionsAsJson = function () {
    return JSON.stringify(this.getCollections());
}

CollectionManager.prototype.getCollection = function (collectionName) {
    return this.collections.get(collectionName);
}

const collectionManager = new CollectionManager();
module.exports = collectionManager;
'use strict';
const collectionManager = require('./Collections/CollectionManager');

async function loadCollections() {
    await collectionManager.loadCollections();
}

async function load() {
    await loadCollections();
}

module.exports = {
    load,
};
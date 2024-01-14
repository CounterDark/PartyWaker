'use strict';
const collectionManager = require('./Collections/collectionManager');

async function loadCollections() {
    await collectionManager.loadCollections();
}

async function load() {
    await loadCollections();
}

module.exports = {
    load,
};
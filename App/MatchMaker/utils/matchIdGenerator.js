'use strict';

const matchType = require('../../Shared/Enums/matchType');

function generateMatchId(type) {
    const random = Math.random().toString(36).substring(2, 9);
    switch (type) {
        case matchType.NEVER_EVER:
            return `n-${random}`;
        case matchType.TRUTH_OR_DARE:
            return `t-${random}`;
        case matchType.RUMBLE:
            return `r-${random}`;
        default:
            return null;
    }
}

module.exports = {
    generateMatchId
}
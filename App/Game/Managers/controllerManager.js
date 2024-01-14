'use strict';
const controllers = require('../../Game/Controllers');
const matchType = require('../../Shared/Enums/matchType');

function getGameController(type, matchId) {
    switch (type) {
        case matchType.NEVER_EVER:
            return new controllers.neverEverController(matchId);
        //NOTE: Uncomment the following lines when the controllers are implemented
        // case matchType.TRUTH_OR_DARE:
        //     return new controllers.truthOrDareController(matchId);
        // case matchType.RUMBLE:
        //     return new controllers.rumbleController(matchId);
        default:
            return null;
    }
}

module.exports = {
    getGameController
}
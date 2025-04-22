"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntityState = void 0;
var existenceEntity_1 = require("./existenceEntity");
var unavailableError_1 = require("@/utils/unavailableError");
var utils_1 = require("@/utils/utils");
var mutliEntity_1 = require("./mutliEntity");
var getEntityState = function (hass, entity) {
    if (!entity || !(0, existenceEntity_1.isEntityAvailable)(hass, entity)) {
        (0, unavailableError_1.unavailableOrMisconfiguredError)(entity);
        return null;
    }
    var ids = (0, mutliEntity_1.getEntityNames)(entity);
    var endResult = 0;
    var tempNumber;
    for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
        var id = ids_1[_i];
        tempNumber = (0, utils_1.coerceNumber)(hass.states[id].state);
        // somehow using += does not work here (maybe something with rollup?)
        endResult = endResult + tempNumber;
    }
    return endResult;
};
exports.getEntityState = getEntityState;

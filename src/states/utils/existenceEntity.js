"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doesEntityExist = exports.isEntityAvailable = void 0;
var utils_1 = require("@/utils/utils");
var mutliEntity_1 = require("./mutliEntity");
var isEntityAvailable = function (hass, entityId) {
    var _a;
    var ids = (0, mutliEntity_1.getEntityNames)(entityId);
    for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
        var id = ids_1[_i];
        if (!(0, utils_1.isNumberValue)((_a = hass.states[id]) === null || _a === void 0 ? void 0 : _a.state)) {
            // if one does not exist, the whole result should be false
            return false;
        }
    }
    // if we have multiple IDs, we can safely return true here.
    return ids.length > 0;
};
exports.isEntityAvailable = isEntityAvailable;
var doesEntityExist = function (hass, entityId) {
    var ids = (0, mutliEntity_1.getEntityNames)(entityId);
    for (var _i = 0, ids_2 = ids; _i < ids_2.length; _i++) {
        var id = ids_2[_i];
        if (!(id in hass.states)) {
            return false;
        }
    }
    return true;
};
exports.doesEntityExist = doesEntityExist;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndividualSecondaryState = exports.getIndividualState = void 0;
var getEntityStateWatts_1 = require("@/states/utils/getEntityStateWatts");
var utils_1 = require("@/utils/utils");
var getEntityStateObj_1 = require("@/states/utils/getEntityStateObj");
var getIndividualState = function (hass, field) {
    var entity = field === null || field === void 0 ? void 0 : field.entity;
    if (entity === undefined)
        return null;
    var individualStateWatts = (0, getEntityStateWatts_1.getEntityStateWatts)(hass, entity);
    return Math.abs(individualStateWatts);
};
exports.getIndividualState = getIndividualState;
var getIndividualSecondaryState = function (hass, field) {
    var _a;
    if (typeof (field === null || field === void 0 ? void 0 : field.entity) !== "string")
        return null;
    var entityObj = (0, getEntityStateObj_1.getEntityStateObj)(hass, (_a = field === null || field === void 0 ? void 0 : field.secondary_info) === null || _a === void 0 ? void 0 : _a.entity);
    var secondaryState = entityObj === null || entityObj === void 0 ? void 0 : entityObj.state;
    if ((0, utils_1.isNumberValue)(secondaryState))
        return Number(secondaryState);
    return secondaryState;
};
exports.getIndividualSecondaryState = getIndividualSecondaryState;

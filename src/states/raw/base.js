"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFieldOutState = exports.getFieldInState = exports.getSecondaryState = void 0;
var utils_1 = require("@/utils/utils");
var isEntityInverted_1 = require("../utils/isEntityInverted");
var negativePositive_1 = require("../utils/negativePositive");
var getEntityStateWatts_1 = require("../utils/getEntityStateWatts");
var mutliEntity_1 = require("../utils/mutliEntity");
var getSecondaryState = function (hass, config, field) {
    var _a, _b, _c;
    var entity = (_c = (_b = (_a = config.entities) === null || _a === void 0 ? void 0 : _a[field]) === null || _b === void 0 ? void 0 : _b.secondary_info) === null || _c === void 0 ? void 0 : _c.entity;
    if (typeof entity !== "string")
        return null;
    var entityObj = hass.states[(0, mutliEntity_1.getFirstEntityName)(entity)];
    var secondaryState = entityObj.state;
    if ((0, utils_1.isNumberValue)(secondaryState))
        return Number(secondaryState);
    return secondaryState;
};
exports.getSecondaryState = getSecondaryState;
var getFieldInState = function (hass, config, field) {
    var _a;
    var entity = (_a = config.entities[field]) === null || _a === void 0 ? void 0 : _a.entity;
    if (entity === undefined)
        return null;
    if (typeof entity === "string") {
        var state = (0, getEntityStateWatts_1.getEntityStateWatts)(hass, entity);
        if ((0, isEntityInverted_1.isEntityInverted)(config, field))
            return (0, negativePositive_1.onlyPositive)(state);
        return (0, negativePositive_1.onlyNegative)(state);
    }
    return (0, getEntityStateWatts_1.getEntityStateWatts)(hass, entity.production);
};
exports.getFieldInState = getFieldInState;
var getFieldOutState = function (hass, config, field) {
    var _a;
    var entity = (_a = config.entities[field]) === null || _a === void 0 ? void 0 : _a.entity;
    if (entity === undefined)
        return null;
    if (typeof entity === "string") {
        var state = (0, getEntityStateWatts_1.getEntityStateWatts)(hass, entity);
        if ((0, isEntityInverted_1.isEntityInverted)(config, field))
            return (0, negativePositive_1.onlyNegative)(state);
        return (0, negativePositive_1.onlyPositive)(state);
    }
    return (0, getEntityStateWatts_1.getEntityStateWatts)(hass, entity.consumption);
};
exports.getFieldOutState = getFieldOutState;

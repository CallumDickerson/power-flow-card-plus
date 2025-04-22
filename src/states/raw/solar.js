"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSolarSecondaryState = exports.getSolarState = void 0;
var isEntityInverted_1 = require("../utils/isEntityInverted");
var getEntityStateWatts_1 = require("../utils/getEntityStateWatts");
var negativePositive_1 = require("../utils/negativePositive");
var base_1 = require("./base");
var getSolarState = function (hass, config) {
    var _a;
    var entity = (_a = config.entities.solar) === null || _a === void 0 ? void 0 : _a.entity;
    if (entity === undefined)
        return null;
    var solarStateWatts = (0, getEntityStateWatts_1.getEntityStateWatts)(hass, entity);
    if ((0, isEntityInverted_1.isEntityInverted)(config, "solar"))
        return (0, negativePositive_1.onlyNegative)(solarStateWatts);
    return (0, negativePositive_1.onlyPositive)(solarStateWatts);
};
exports.getSolarState = getSolarState;
var getSolarSecondaryState = function (hass, config) { return (0, base_1.getSecondaryState)(hass, config, "solar"); };
exports.getSolarSecondaryState = getSolarSecondaryState;

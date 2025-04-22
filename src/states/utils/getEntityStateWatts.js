"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntityStateWatts = void 0;
var getEntityState_1 = require("./getEntityState");
var mutliEntity_1 = require("./mutliEntity");
var prefixes = ["K", "M", "G", "T", "P", "E", "Z", "Y"];
var getEntityStateWatts = function (hass, entity) {
    var _a;
    var state = (0, getEntityState_1.getEntityState)(hass, entity);
    if (!entity || state === null)
        return 0;
    var unit = (_a = hass.states[(0, mutliEntity_1.getFirstEntityName)(entity)].attributes.unit_of_measurement) !== null && _a !== void 0 ? _a : "";
    return convertUnitToWatts(state, unit);
};
exports.getEntityStateWatts = getEntityStateWatts;
var convertUnitToWatts = function (value, unit) {
    var prefix = unit.toUpperCase().slice(0, 1);
    var prefixIndex = prefixes.indexOf(prefix);
    if (prefixIndex > -1)
        return value * Math.pow(1000, prefixIndex + 1);
    return value;
};

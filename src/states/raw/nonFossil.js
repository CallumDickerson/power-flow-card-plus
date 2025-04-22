"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNonFossilState = exports.getNonFossilSecondaryState = exports.getNonFossilHasPercentage = exports.getNonFossilHas = void 0;
var grid_1 = require("./grid");
var getEntityState_1 = require("@/states/utils/getEntityState");
var base_1 = require("./base");
var getNonFossilHas = function (hass, config) {
    var _a;
    var nonFossil = config.entities.fossil_fuel_percentage;
    var grid = config.entities.grid;
    var fossilPercentageEntity = nonFossil === null || nonFossil === void 0 ? void 0 : nonFossil.entity;
    var fossilPercentageDisplayZero = nonFossil === null || nonFossil === void 0 ? void 0 : nonFossil.display_zero;
    var gridFromGrid = (0, grid_1.getGridConsumptionState)(hass, config);
    if (fossilPercentageEntity === undefined)
        return false;
    if (fossilPercentageDisplayZero === true)
        return true;
    if (gridFromGrid === null)
        return false;
    return gridFromGrid * 1 - ((_a = (0, getEntityState_1.getEntityState)(hass, fossilPercentageEntity)) !== null && _a !== void 0 ? _a : 0) / 100 > 0;
};
exports.getNonFossilHas = getNonFossilHas;
var getNonFossilHasPercentage = function (hass, config) {
    var _a;
    var nonFossil = config.entities.fossil_fuel_percentage;
    var grid = config.entities.grid;
    var fossilPercentageEntity = nonFossil === null || nonFossil === void 0 ? void 0 : nonFossil.entity;
    var fossilPercentageDisplayZero = nonFossil === null || nonFossil === void 0 ? void 0 : nonFossil.display_zero;
    var gridFromGrid = (0, grid_1.getGridConsumptionState)(hass, config);
    if (fossilPercentageEntity === undefined)
        return false;
    if (fossilPercentageDisplayZero === true)
        return true;
    if (gridFromGrid === null)
        return false;
    if ((0, exports.getNonFossilHas)(hass, config) === false)
        return false;
    return gridFromGrid * 1 - ((_a = (0, getEntityState_1.getEntityState)(hass, fossilPercentageEntity)) !== null && _a !== void 0 ? _a : 0) / 100 > 0;
};
exports.getNonFossilHasPercentage = getNonFossilHasPercentage;
var getNonFossilSecondaryState = function (hass, config) {
    return (0, base_1.getSecondaryState)(hass, config, "fossil_fuel_percentage");
};
exports.getNonFossilSecondaryState = getNonFossilSecondaryState;
var getNonFossilState = function (hass, config) {
    var _a;
    var nonFossil = config.entities.fossil_fuel_percentage;
    var fossilPercentageEntity = nonFossil === null || nonFossil === void 0 ? void 0 : nonFossil.entity;
    var gridFromGrid = (0, grid_1.getGridConsumptionState)(hass, config);
    if (fossilPercentageEntity === undefined)
        return null;
    if (gridFromGrid === null)
        return null;
    if ((0, exports.getNonFossilHas)(hass, config) === false)
        return 0;
    return gridFromGrid * 1 - ((_a = (0, getEntityState_1.getEntityState)(hass, fossilPercentageEntity)) !== null && _a !== void 0 ? _a : 0) / 100;
};
exports.getNonFossilState = getNonFossilState;

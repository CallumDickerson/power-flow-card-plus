"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayNonFossilState = void 0;
var existenceEntity_1 = require("../states/utils/existenceEntity");
var unavailableError_1 = require("./unavailableError");
var getEntityState_1 = require("../states/utils/getEntityState");
var getEntityStateWatts_1 = require("../states/utils/getEntityStateWatts");
var displayValue_1 = require("./displayValue");
var displayNonFossilState = function (hass, config, entityFossil, totalFromGrid) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if (!entityFossil || !(0, existenceEntity_1.isEntityAvailable)(hass, entityFossil)) {
        (0, unavailableError_1.unavailableOrMisconfiguredError)(entityFossil);
        return "NaN";
    }
    var unitWhiteSpace = (_b = (_a = config.entities.fossil_fuel_percentage) === null || _a === void 0 ? void 0 : _a.unit_white_space) !== null && _b !== void 0 ? _b : true;
    var unitOfMeasurement = ((_c = config.entities.fossil_fuel_percentage) === null || _c === void 0 ? void 0 : _c.state_type) === "percentage" ? "%" : "W" || "W";
    var nonFossilFuelDecimal = 1 - ((_d = (0, getEntityState_1.getEntityState)(hass, entityFossil)) !== null && _d !== void 0 ? _d : 0) / 100;
    var gridConsumption;
    if (typeof ((_e = config.entities.grid) === null || _e === void 0 ? void 0 : _e.entity) === "string") {
        gridConsumption = totalFromGrid;
    }
    else {
        gridConsumption = (0, getEntityStateWatts_1.getEntityStateWatts)(hass, (_f = config.entities.grid) === null || _f === void 0 ? void 0 : _f.entity.consumption) || 0;
    }
    /* based on choice, change output from watts to % */
    var displayZeroTolerance = (_h = (_g = config.entities.fossil_fuel_percentage) === null || _g === void 0 ? void 0 : _g.display_zero_tolerance) !== null && _h !== void 0 ? _h : 0;
    if (unitOfMeasurement === "W") {
        var nonFossilFuelWatts = gridConsumption * nonFossilFuelDecimal;
        if (displayZeroTolerance) {
            if (nonFossilFuelWatts < displayZeroTolerance) {
                nonFossilFuelWatts = 0;
            }
        }
        return (0, displayValue_1.displayValue)(hass, config, nonFossilFuelWatts, {
            unitWhiteSpace: unitWhiteSpace,
            watt_threshold: config.watt_threshold,
        });
    }
    var nonFossilFuelPercentage = 100 - ((_j = (0, getEntityState_1.getEntityState)(hass, entityFossil)) !== null && _j !== void 0 ? _j : 0);
    if (displayZeroTolerance) {
        if (nonFossilFuelPercentage < displayZeroTolerance) {
            nonFossilFuelPercentage = 0;
        }
    }
    return (0, displayValue_1.displayValue)(hass, config, nonFossilFuelPercentage, {
        unit: "%",
        unitWhiteSpace: unitWhiteSpace,
        decimals: 0,
        watt_threshold: config.watt_threshold,
    });
};
exports.displayNonFossilState = displayNonFossilState;

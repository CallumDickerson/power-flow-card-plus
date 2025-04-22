"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBatteryOutState = exports.getBatteryInState = exports.getBatteryStateOfCharge = void 0;
var base_1 = require("./base");
var getEntityState_1 = require("../utils/getEntityState");
var getBatteryStateOfCharge = function (hass, config) {
    var _a;
    var entity = (_a = config.entities.battery) === null || _a === void 0 ? void 0 : _a.state_of_charge;
    if (entity === undefined)
        return null;
    return (0, getEntityState_1.getEntityState)(hass, entity);
};
exports.getBatteryStateOfCharge = getBatteryStateOfCharge;
var getBatteryInState = function (hass, config) { return (0, base_1.getFieldInState)(hass, config, "battery"); };
exports.getBatteryInState = getBatteryInState;
var getBatteryOutState = function (hass, config) { return (0, base_1.getFieldOutState)(hass, config, "battery"); };
exports.getBatteryOutState = getBatteryOutState;

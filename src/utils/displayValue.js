"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayValue = void 0;
var custom_card_helpers_1 = require("custom-card-helpers");
var utils_1 = require("./utils");
/**
 *
 * @param hass The Home Assistant instance
 * @param config The Power Flow Card Plus configuration
 * @param value The value to display
 * @param options Different options to display the value
 * @returns value with unit, localized and rounded to the correct number of decimals
 */
var displayValue = function (hass, config, value, _a) {
    var unit = _a.unit, unitWhiteSpace = _a.unitWhiteSpace, decimals = _a.decimals, accept_negative = _a.accept_negative, _b = _a.watt_threshold, watt_threshold = _b === void 0 ? 1000 : _b;
    if (value === null)
        return "0";
    if (!(0, utils_1.isNumberValue)(value))
        return value.toString();
    var valueInNumber = Number(value);
    var isKW = unit === undefined && valueInNumber >= watt_threshold;
    var decimalsToRound = decimals !== null && decimals !== void 0 ? decimals : (isKW ? config.kw_decimals : config.w_decimals);
    var transformValue = function (v) { return (!accept_negative ? Math.abs(v) : v); };
    var v = (0, custom_card_helpers_1.formatNumber)(transformValue(isKW ? (0, utils_1.round)(valueInNumber / 1000, decimalsToRound !== null && decimalsToRound !== void 0 ? decimalsToRound : 2) : (0, utils_1.round)(valueInNumber, decimalsToRound !== null && decimalsToRound !== void 0 ? decimalsToRound : 0)), hass.locale);
    return "".concat(v).concat(unitWhiteSpace === false ? "" : " ").concat(unit || (isKW ? "kW" : "W"));
};
exports.displayValue = displayValue;

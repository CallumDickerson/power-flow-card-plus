"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeIndividualFlowRate = exports.computeFlowRate = void 0;
var newFlowRateMapRange = function (value, minOut, maxOut, minIn, maxIn) {
    if (value > maxIn)
        return maxOut;
    return ((value - minIn) * (maxOut - minOut)) / (maxIn - minIn) + minOut;
};
var newFlowRate = function (config, value) {
    var maxPower = config.max_expected_power;
    var minPower = config.min_expected_power;
    var maxRate = config.max_flow_rate;
    var minRate = config.min_flow_rate;
    return newFlowRateMapRange(value, maxRate, minRate, minPower, maxPower);
};
var oldFlowRate = function (config, value, total) {
    var min = config === null || config === void 0 ? void 0 : config.min_flow_rate;
    var max = config === null || config === void 0 ? void 0 : config.max_flow_rate;
    return max - (value / (total > 0 ? total : value)) * (max - min);
};
var computeFlowRate = function (config, value, total) {
    var _a;
    var isNewFlowRateModel = (_a = config.use_new_flow_rate_model) !== null && _a !== void 0 ? _a : true;
    if (isNewFlowRateModel)
        return newFlowRate(config, value);
    return oldFlowRate(config, value, total);
};
exports.computeFlowRate = computeFlowRate;
var computeIndividualFlowRate = function (entry, value) {
    if (entry !== false && value) {
        return value;
    }
    if (typeof entry === "number") {
        return entry;
    }
    return 1.66;
};
exports.computeIndividualFlowRate = computeIndividualFlowRate;

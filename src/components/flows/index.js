"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flowElement = void 0;
var lit_1 = require("lit");
var solarToHome_1 = require("./solarToHome");
var solarToGrid_1 = require("./solarToGrid");
var solarToBattery_1 = require("./solarToBattery");
var gridToHome_1 = require("./gridToHome");
var batteryToHome_1 = require("./batteryToHome");
var batteryGrid_1 = require("./batteryGrid");
var flowElement = function (config, _a) {
    var battery = _a.battery, grid = _a.grid, individual = _a.individual, solar = _a.solar, newDur = _a.newDur;
    return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n</div>"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n</div>"])), (0, solarToHome_1.flowSolarToHome)(config, { battery: battery, grid: grid, individual: individual, solar: solar, newDur: newDur }), (0, solarToGrid_1.flowSolarToGrid)(config, { battery: battery, grid: grid, individual: individual, solar: solar, newDur: newDur }), (0, solarToBattery_1.flowSolarToBattery)(config, { battery: battery, individual: individual, solar: solar, newDur: newDur }), (0, gridToHome_1.flowGridToHome)(config, { battery: battery, grid: grid, individual: individual, solar: solar, newDur: newDur }), (0, batteryToHome_1.flowBatteryToHome)(config, { battery: battery, grid: grid, individual: individual, newDur: newDur }), (0, batteryGrid_1.flowBatteryGrid)(config, { battery: battery, grid: grid, individual: individual, newDur: newDur }));
};
exports.flowElement = flowElement;
var templateObject_1;

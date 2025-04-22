"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styleLine = void 0;
var styleLine = function (power, config) {
    var _a, _b;
    if (power > 0)
        return "";
    var displayZeroMode = (_a = config === null || config === void 0 ? void 0 : config.display_zero_lines) === null || _a === void 0 ? void 0 : _a.mode;
    if (displayZeroMode === "show" || displayZeroMode === undefined)
        return "";
    var styleclass = "";
    if (displayZeroMode === "transparency" || displayZeroMode === "custom") {
        var transparency = (_b = config === null || config === void 0 ? void 0 : config.display_zero_lines) === null || _b === void 0 ? void 0 : _b.transparency;
        if (transparency !== null && transparency !== void 0 ? transparency : 50 > 0)
            styleclass += "transparency ";
    }
    if (displayZeroMode === "grey_out" || displayZeroMode === "custom") {
        styleclass += "grey";
    }
    return styleclass;
};
exports.styleLine = styleLine;

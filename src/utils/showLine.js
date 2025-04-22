"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showLine = void 0;
var showLine = function (config, power) {
    var _a;
    if (power > 0)
        return true;
    return ((_a = config === null || config === void 0 ? void 0 : config.display_zero_lines) === null || _a === void 0 ? void 0 : _a.mode) !== "hide";
};
exports.showLine = showLine;

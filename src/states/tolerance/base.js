"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjustZeroTolerance = exports.isAboveTolerance = void 0;
var isAboveTolerance = function (value, tolerance) { return !!value && value >= tolerance; };
exports.isAboveTolerance = isAboveTolerance;
var adjustZeroTolerance = function (value, tolerance) {
    if (!value)
        return 0;
    if (!tolerance)
        return value;
    return (0, exports.isAboveTolerance)(value, tolerance) ? value : 0;
};
exports.adjustZeroTolerance = adjustZeroTolerance;

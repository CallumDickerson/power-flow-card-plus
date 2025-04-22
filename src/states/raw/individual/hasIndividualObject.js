"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasIndividualObject = void 0;
var base_1 = require("@/states/tolerance/base");
var hasIndividualObject = function (displayZero, state, tolerance) {
    if (displayZero)
        return true;
    if ((0, base_1.isAboveTolerance)(state, tolerance))
        return true;
    return false;
};
exports.hasIndividualObject = hasIndividualObject;

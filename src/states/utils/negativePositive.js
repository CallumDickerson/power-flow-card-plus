"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onlyPositive = exports.onlyNegative = void 0;
var onlyNegative = function (value) { return Math.abs(Math.min(value, 0)); };
exports.onlyNegative = onlyNegative;
var onlyPositive = function (value) { return Math.max(value, 0); };
exports.onlyPositive = onlyPositive;

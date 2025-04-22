"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = void 0;
exports.isNumberValue = isNumberValue;
exports.coerceNumber = coerceNumber;
exports.coerceStringArray = coerceStringArray;
/* eslint-disable no-redeclare */
var round = function (value, decimalPlaces) { return Number("".concat(Math.round(Number("".concat(value, "e").concat(decimalPlaces))), "e-").concat(decimalPlaces)); };
exports.round = round;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    // eslint-disable-next-line no-restricted-globals
    return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceNumber(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return isNumberValue(value) ? Number(value) : fallbackValue;
}
function coerceStringArray(value, separator) {
    if (separator === void 0) { separator = /\s+/; }
    var result = [];
    if (value != null) {
        var sourceValues = Array.isArray(value) ? value : "".concat(value).split(separator);
        for (var _i = 0, sourceValues_1 = sourceValues; _i < sourceValues_1.length; _i++) {
            var sourceValue = sourceValues_1[_i];
            var trimmedString = "".concat(sourceValue).trim();
            if (trimmedString) {
                result.push(trimmedString);
            }
        }
    }
    return result;
}

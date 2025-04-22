"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertColorListToHex = void 0;
var convertColorListToHex = function (colorList) {
    if (!colorList)
        return "";
    return "#".concat(colorList.map(function (x) { return x.toString(16).padStart(2, "0"); }).join(""));
};
exports.convertColorListToHex = convertColorListToHex;

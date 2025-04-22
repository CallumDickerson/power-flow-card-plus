"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeColor = void 0;
var computeColor = function (colorType, homeSources, homeLargestSource) {
    var iconHomeColor = "var(--primary-text-color)";
    if (typeof colorType === "string")
        iconHomeColor = homeSources[colorType].color;
    if (colorType === true)
        iconHomeColor = homeSources[homeLargestSource].color;
    return iconHomeColor;
};
exports.computeColor = computeColor;

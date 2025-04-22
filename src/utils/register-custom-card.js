"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCustomCard = registerCustomCard;
function registerCustomCard(params) {
    var windowWithCards = window;
    windowWithCards.customCards = windowWithCards.customCards || [];
    windowWithCards.customCards.push(__assign(__assign({}, params), { preview: true, documentationURL: "https://github.com/flixlix/power-flow-card-plus" }));
}

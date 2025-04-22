"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = void 0;
/* eslint-disable no-console */
var custom_card_helpers_1 = require("custom-card-helpers");
var package_json_1 = require("../package.json");
// Log Version
console.groupCollapsed("%c\u26A1 Power Flow Card Plus v".concat(package_json_1.version, " is installed"), "color: #488fc2; font-weight: bold");
console.log("Readme:", "https://github.com/flixlix/power-flow-card-plus");
console.groupEnd();
exports.logError = (0, custom_card_helpers_1.debounce)(function (error) {
    console.log("%c\u26A1 Power Flow Card Plus v".concat(package_json_1.version, " %cError: ").concat(error), "color: #488fc2; font-weight: bold", "color: #b33a3a; font-weight: normal");
}, 60000);

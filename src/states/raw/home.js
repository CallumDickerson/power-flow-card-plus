"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHomeSecondaryState = void 0;
var base_1 = require("./base");
var getHomeSecondaryState = function (hass, config) { return (0, base_1.getSecondaryState)(hass, config, "home"); };
exports.getHomeSecondaryState = getHomeSecondaryState;

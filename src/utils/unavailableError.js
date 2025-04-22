"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unavailableOrMisconfiguredError = void 0;
var logging_1 = require("../logging");
var unavailableOrMisconfiguredError = function (entity) {
    (0, logging_1.logError)("Entity \"".concat(entity !== null && entity !== void 0 ? entity : "Unknown", "\" is not available or misconfigured"));
};
exports.unavailableOrMisconfiguredError = unavailableOrMisconfiguredError;

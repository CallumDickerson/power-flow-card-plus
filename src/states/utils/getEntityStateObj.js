"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntityStateObj = void 0;
var existenceEntity_1 = require("./existenceEntity");
var unavailableError_1 = require("@/utils/unavailableError");
var mutliEntity_1 = require("./mutliEntity");
var getEntityStateObj = function (hass, entity) {
    if (!entity || !(0, existenceEntity_1.isEntityAvailable)(hass, entity)) {
        (0, unavailableError_1.unavailableOrMisconfiguredError)(entity);
        return undefined;
    }
    return hass.states[(0, mutliEntity_1.getFirstEntityName)(entity)];
};
exports.getEntityStateObj = getEntityStateObj;

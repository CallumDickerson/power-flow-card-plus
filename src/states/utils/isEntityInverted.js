"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEntityInverted = void 0;
var isEntityInverted = function (config, entityType) { var _a; return !!((_a = config.entities[entityType]) === null || _a === void 0 ? void 0 : _a.invert_state); };
exports.isEntityInverted = isEntityInverted;

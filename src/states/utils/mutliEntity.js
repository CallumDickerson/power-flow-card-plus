"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstEntityName = exports.getEntityNames = void 0;
var getEntityNames = function (entities) {
    return entities === null || entities === void 0 ? void 0 : entities.split("|").map(function (p) { return p.trim(); });
};
exports.getEntityNames = getEntityNames;
var getFirstEntityName = function (entities) {
    var names = (0, exports.getEntityNames)(entities);
    return names.length > 0 ? names[0] : "";
};
exports.getFirstEntityName = getFirstEntityName;

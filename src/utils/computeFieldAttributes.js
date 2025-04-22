"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeFieldName = exports.computeFieldIcon = void 0;
var getEntityStateObj_1 = require("../states/utils/getEntityStateObj");
var computeFieldIcon = function (hass, field, fallback) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (field === null || field === void 0 ? void 0 : field.icon)
        return field.icon;
    if (field === null || field === void 0 ? void 0 : field.use_metadata) {
        if (typeof (field === null || field === void 0 ? void 0 : field.entity) === "string")
            return ((_b = (_a = (0, getEntityStateObj_1.getEntityStateObj)(hass, field === null || field === void 0 ? void 0 : field.entity)) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.icon) || fallback;
        return (((_e = (_d = (0, getEntityStateObj_1.getEntityStateObj)(hass, (_c = field === null || field === void 0 ? void 0 : field.entity) === null || _c === void 0 ? void 0 : _c.consumption)) === null || _d === void 0 ? void 0 : _d.attributes) === null || _e === void 0 ? void 0 : _e.icon) ||
            ((_h = (_g = (0, getEntityStateObj_1.getEntityStateObj)(hass, (_f = field === null || field === void 0 ? void 0 : field.entity) === null || _f === void 0 ? void 0 : _f.production)) === null || _g === void 0 ? void 0 : _g.attributes) === null || _h === void 0 ? void 0 : _h.icon) ||
            fallback);
    }
    return fallback;
};
exports.computeFieldIcon = computeFieldIcon;
var computeFieldName = function (hass, field, fallback) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (field === null || field === void 0 ? void 0 : field.name)
        return field.name;
    if (field === null || field === void 0 ? void 0 : field.use_metadata) {
        if (typeof (field === null || field === void 0 ? void 0 : field.entity) === "string")
            return ((_b = (_a = (0, getEntityStateObj_1.getEntityStateObj)(hass, field.entity)) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.friendly_name) || fallback;
        return (((_e = (_d = (0, getEntityStateObj_1.getEntityStateObj)(hass, (_c = field === null || field === void 0 ? void 0 : field.entity) === null || _c === void 0 ? void 0 : _c.consumption)) === null || _d === void 0 ? void 0 : _d.attributes) === null || _e === void 0 ? void 0 : _e.friendly_name) ||
            ((_h = (_g = (0, getEntityStateObj_1.getEntityStateObj)(hass, (_f = field === null || field === void 0 ? void 0 : field.entity) === null || _f === void 0 ? void 0 : _f.production)) === null || _g === void 0 ? void 0 : _g.attributes) === null || _h === void 0 ? void 0 : _h.friendly_name) ||
            fallback);
    }
    return fallback;
};
exports.computeFieldName = computeFieldName;

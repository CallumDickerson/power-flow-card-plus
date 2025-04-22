"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalSecondarySpan = void 0;
var lit_1 = require("lit");
var baseSecondarySpan_1 = require("./baseSecondarySpan");
var displayValue_1 = require("@/utils/displayValue");
var generalSecondarySpan = function (hass, main, config, templatesObj, field, key) {
    var _a, _b;
    return (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject([" ", ""], [" ", ""])), ((_a = field === null || field === void 0 ? void 0 : field.secondary) === null || _a === void 0 ? void 0 : _a.has) || ((_b = field === null || field === void 0 ? void 0 : field.secondary) === null || _b === void 0 ? void 0 : _b.template)
        ? (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject([" ", ""], [" ", ""])), (0, baseSecondarySpan_1.baseSecondarySpan)({
            main: main,
            className: key,
            entityId: field.secondary.entity,
            icon: field.secondary.icon,
            value: (0, displayValue_1.displayValue)(hass, config, field.secondary.state, {
                unit: field.secondary.unit,
                unitWhiteSpace: field.secondary.unit_white_space,
                decimals: field.secondary.decimals,
                accept_negative: field.secondary.accept_negative,
                watt_threshold: config.watt_threshold,
            }),
            tap_action: field.secondary.tap_action,
            template: templatesObj["".concat(key, "Secondary")],
        })) : "");
};
exports.generalSecondarySpan = generalSecondarySpan;
var templateObject_1, templateObject_2;

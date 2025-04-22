"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.individualSecondarySpan = void 0;
var lit_1 = require("lit");
var displayValue_1 = require("@/utils/displayValue");
var utils_1 = require("@/utils/utils");
var baseSecondarySpan_1 = require("./baseSecondarySpan");
var individualSecondarySpan = function (hass, main, config, templatesObj, individual, index, key) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var templateResult = templatesObj.individual[index];
    var value = ((_a = individual === null || individual === void 0 ? void 0 : individual.secondary) === null || _a === void 0 ? void 0 : _a.has)
        ? (0, displayValue_1.displayValue)(hass, config, (_b = individual === null || individual === void 0 ? void 0 : individual.secondary) === null || _b === void 0 ? void 0 : _b.state, {
            unit: ((_c = individual === null || individual === void 0 ? void 0 : individual.secondary) === null || _c === void 0 ? void 0 : _c.unit) || undefined,
            unitWhiteSpace: (_d = individual === null || individual === void 0 ? void 0 : individual.secondary) === null || _d === void 0 ? void 0 : _d.unit_white_space,
            decimals: ((_e = individual === null || individual === void 0 ? void 0 : individual.secondary) === null || _e === void 0 ? void 0 : _e.decimals) || 0,
            accept_negative: ((_f = individual === null || individual === void 0 ? void 0 : individual.secondary) === null || _f === void 0 ? void 0 : _f.accept_negative) || false,
            watt_threshold: config.watt_threshold,
        })
        : undefined;
    var shouldShowSecondary = function () {
        var _a, _b, _c, _d, _e;
        if (!!templateResult)
            return true;
        if (((_a = individual === null || individual === void 0 ? void 0 : individual.secondary) === null || _a === void 0 ? void 0 : _a.displayZero) === true)
            return true;
        if (!((_b = individual === null || individual === void 0 ? void 0 : individual.secondary) === null || _b === void 0 ? void 0 : _b.state))
            return false;
        if (!(0, utils_1.isNumberValue)((_c = individual === null || individual === void 0 ? void 0 : individual.secondary) === null || _c === void 0 ? void 0 : _c.state))
            return true;
        var toleranceSet = (_e = (_d = individual === null || individual === void 0 ? void 0 : individual.secondary) === null || _d === void 0 ? void 0 : _d.displayZeroTolerance) !== null && _e !== void 0 ? _e : 0;
        return (Number(individual.secondary.state) >= toleranceSet ||
            (individual.secondary.accept_negative && typeof Number(+individual.secondary.state) === "number"));
    };
    return (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject([" ", ""], [" ", ""])), shouldShowSecondary()
        ? (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), (0, baseSecondarySpan_1.baseSecondarySpan)({
            main: main,
            className: key,
            entityId: (individual === null || individual === void 0 ? void 0 : individual.secondary.entity) || undefined,
            icon: ((_g = individual === null || individual === void 0 ? void 0 : individual.secondary) === null || _g === void 0 ? void 0 : _g.icon) || undefined,
            value: value,
            template: templatesObj.individual[index] || undefined,
            tap_action: ((_h = individual === null || individual === void 0 ? void 0 : individual.secondary) === null || _h === void 0 ? void 0 : _h.tap_action) || undefined,
        })) : "");
};
exports.individualSecondarySpan = individualSecondarySpan;
var templateObject_1, templateObject_2;

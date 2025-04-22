"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndividualObject = void 0;
var computeFieldAttributes_1 = require("@/utils/computeFieldAttributes");
var _1 = require(".");
var hasIndividualObject_1 = require("./hasIndividualObject");
var fallbackIndividualObject = {
    field: undefined,
    entity: "",
    has: false,
    state: null,
    displayZero: false,
    displayZeroTolerance: 0,
    icon: "",
    name: "",
    color: null,
    unit: undefined,
    unit_white_space: false,
    invertAnimation: false,
    showDirection: false,
    secondary: {
        entity: null,
        template: null,
        has: false,
        state: null,
        icon: null,
        unit: null,
        unit_white_space: false,
        displayZero: false,
        accept_negative: false,
        displayZeroTolerance: 0,
        decimals: null,
    },
};
var getIndividualObject = function (hass, field) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    if (!field || !(field === null || field === void 0 ? void 0 : field.entity))
        return fallbackIndividualObject;
    var entity = field.entity;
    var state = (0, _1.getIndividualState)(hass, field);
    var displayZero = (field === null || field === void 0 ? void 0 : field.display_zero) || false;
    var displayZeroTolerance = (field === null || field === void 0 ? void 0 : field.display_zero_tolerance) || 0;
    var has = (0, hasIndividualObject_1.hasIndividualObject)(displayZero, state, displayZeroTolerance);
    var isStateNegative = state && state < 0;
    var userConfiguredInvertAnimation = (field === null || field === void 0 ? void 0 : field.inverted_animation) || false;
    var invertAnimation = isStateNegative ? !userConfiguredInvertAnimation : userConfiguredInvertAnimation;
    var color = (field === null || field === void 0 ? void 0 : field.color) && typeof (field === null || field === void 0 ? void 0 : field.color) === "string" ? field === null || field === void 0 ? void 0 : field.color : null;
    return {
        field: field,
        entity: entity,
        has: has,
        state: state,
        displayZero: displayZero,
        displayZeroTolerance: displayZeroTolerance,
        icon: (0, computeFieldAttributes_1.computeFieldIcon)(hass, field, "mdi:flash"),
        name: (0, computeFieldAttributes_1.computeFieldName)(hass, field, "Individual"),
        color: color,
        unit: field === null || field === void 0 ? void 0 : field.unit_of_measurement,
        unit_white_space: (field === null || field === void 0 ? void 0 : field.unit_white_space) || false,
        decimals: field === null || field === void 0 ? void 0 : field.decimals,
        invertAnimation: invertAnimation,
        showDirection: (field === null || field === void 0 ? void 0 : field.show_direction) || false,
        secondary: {
            entity: ((_a = field === null || field === void 0 ? void 0 : field.secondary_info) === null || _a === void 0 ? void 0 : _a.entity) || null,
            template: ((_b = field === null || field === void 0 ? void 0 : field.secondary_info) === null || _b === void 0 ? void 0 : _b.template) || null,
            has: ((_c = field === null || field === void 0 ? void 0 : field.secondary_info) === null || _c === void 0 ? void 0 : _c.entity) !== undefined,
            state: (0, _1.getIndividualSecondaryState)(hass, field) || null,
            accept_negative: ((_d = field === null || field === void 0 ? void 0 : field.secondary_info) === null || _d === void 0 ? void 0 : _d.accept_negative) || false,
            icon: ((_e = field === null || field === void 0 ? void 0 : field.secondary_info) === null || _e === void 0 ? void 0 : _e.icon) || null,
            unit: ((_f = field === null || field === void 0 ? void 0 : field.secondary_info) === null || _f === void 0 ? void 0 : _f.unit_of_measurement) || null,
            unit_white_space: ((_g = field === null || field === void 0 ? void 0 : field.secondary_info) === null || _g === void 0 ? void 0 : _g.unit_white_space) || false,
            displayZero: ((_h = field === null || field === void 0 ? void 0 : field.secondary_info) === null || _h === void 0 ? void 0 : _h.display_zero) || false,
            displayZeroTolerance: ((_j = field === null || field === void 0 ? void 0 : field.secondary_info) === null || _j === void 0 ? void 0 : _j.display_zero_tolerance) || 0,
            decimals: ((_k = field === null || field === void 0 ? void 0 : field.secondary_info) === null || _k === void 0 ? void 0 : _k.decimals) || null,
            tap_action: (_l = field === null || field === void 0 ? void 0 : field.secondary_info) === null || _l === void 0 ? void 0 : _l.tap_action,
        },
    };
};
exports.getIndividualObject = getIndividualObject;

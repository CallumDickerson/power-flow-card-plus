"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.batterySchema = void 0;
var _schema_base_1 = require("./_schema-base");
var localize_1 = require("@/localize/localize");
var mainSchema = __assign(__assign({}, (0, _schema_base_1.getBaseMainConfigSchema)("battery")), { schema: __spreadArray(__spreadArray([], (0, _schema_base_1.getBaseMainConfigSchema)("battery").schema, true), [
        {
            name: "invert_state",
            label: "Invert State",
            selector: { boolean: {} },
        },
        {
            name: "color_value",
            label: "Color of Value",
            selector: { boolean: {} },
        },
        {
            name: "use_metadata",
            label: "Use Metadata",
            selector: { boolean: {} },
        },
    ], false) });
var stateOfChargeSchema = [
    {
        name: "state_of_charge",
        label: "State of Charge Entity",
        selector: { entity: {} },
    },
    {
        name: "",
        type: "grid",
        column_min_width: "200px",
        schema: [
            {
                name: "state_of_charge_unit",
                label: "Unit",
                selector: { text: {} },
            },
            {
                name: "state_of_charge_unit_white_space",
                label: "Unit White Space",
                default: true,
                selector: { boolean: {} },
            },
            {
                name: "state_of_charge_decimals",
                label: "Decimals",
                selector: { number: { mode: "box", min: 0, max: 4, step: 1 } },
            },
            {
                name: "show_state_of_charge",
                label: "Show State of Charge",
                selector: { boolean: {} },
            },
            {
                name: "color_state_of_charge_value",
                label: "Color of Value",
                selector: {
                    select: {
                        options: [
                            { value: false, label: "Do Not Color" },
                            { value: true, label: "Color dynamically" },
                            { value: "consumption", label: "Consumption" },
                            { value: "production", label: "Production" },
                        ],
                        custom_value: true,
                    },
                },
            },
        ],
    },
];
exports.batterySchema = [
    (0, _schema_base_1.getEntityCombinedSelectionSchema)(),
    (0, _schema_base_1.getEntitySeparatedSelectionSchema)(),
    {
        title: (0, localize_1.default)("editor.state_of_charge"),
        name: "",
        type: "expandable",
        schema: stateOfChargeSchema,
    },
    mainSchema,
    _schema_base_1.customColorsSchema,
    {
        title: (0, localize_1.default)("editor.tap_action"),
        name: "",
        type: "expandable",
        schema: _schema_base_1.tapActionSchema,
    },
];

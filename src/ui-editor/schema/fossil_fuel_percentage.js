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
exports.nonFossilSchema = void 0;
var _schema_base_1 = require("./_schema-base");
var localize_1 = require("@/localize/localize");
var mainSchema = __assign(__assign({}, (0, _schema_base_1.getBaseMainConfigSchema)()), { schema: __spreadArray(__spreadArray([], (0, _schema_base_1.getBaseMainConfigSchema)().schema, true), [
        {
            name: "state_type",
            label: "State Type",
            selector: {
                select: {
                    options: [
                        { value: "power", label: "Power" },
                        { value: "percentage", label: "Percentage" },
                    ],
                    custom_value: true,
                },
            },
        },
        {
            name: "color_value",
            label: "Color Value",
            selector: { boolean: {} },
        },
        {
            name: "color_icon",
            label: "Color Icon",
            selector: { boolean: {} },
        },
        {
            name: "display_zero",
            label: "Display Zero",
            selector: { boolean: {} },
        },
        {
            name: "display_zero_tolerance",
            label: "Display Zero Tolerance",
            selector: { number: { mode: "box", min: 0, max: 1000000, step: 0.1 } },
        },
        {
            name: "display_zero_state",
            label: "Display Zero State",
            selector: { boolean: {} },
        },
        {
            name: "unit_white_space",
            label: "Unit White Space",
            default: true,
            selector: { boolean: {} },
        },
        {
            name: "use_metadata",
            label: "Use Metadata",
            selector: { boolean: {} },
        },
    ], false) });
exports.nonFossilSchema = [
    {
        name: "entity",
        selector: { entity: {} },
    },
    mainSchema,
    {
        name: "color",
        label: "Color",
        selector: { color_rgb: {} },
    },
    {
        title: (0, localize_1.default)("editor.secondary_info"),
        name: "secondary_info",
        type: "expandable",
        schema: _schema_base_1.secondaryInfoSchema,
    },
    {
        title: (0, localize_1.default)("editor.tap_action"),
        name: "",
        type: "expandable",
        schema: _schema_base_1.tapActionSchema,
    },
];

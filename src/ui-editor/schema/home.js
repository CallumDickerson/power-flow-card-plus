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
exports.homeSchema = void 0;
var _schema_base_1 = require("./_schema-base");
var localize_1 = require("@/localize/localize");
var mainSchema = __assign(__assign({}, (0, _schema_base_1.getBaseMainConfigSchema)()), { schema: __spreadArray(__spreadArray([], (0, _schema_base_1.getBaseMainConfigSchema)().schema, true), [
        {
            name: "color_value",
            label: "Color Value",
            selector: {
                select: {
                    options: [
                        { value: true, label: "Color dynamically" },
                        { value: false, label: "Do Not Color" },
                        { value: "solar", label: "Solar" },
                        { value: "grid", label: "Grid" },
                        { value: "battery", label: "Battery" },
                    ],
                    custom_value: true,
                },
            },
        },
        {
            name: "color_icon",
            label: "Color Icon",
            selector: {
                select: {
                    options: [
                        { value: true, label: "Color dynamically" },
                        { value: false, label: "Do Not Color" },
                        { value: "solar", label: "Solar" },
                        { value: "grid", label: "Grid" },
                        { value: "battery", label: "Battery" },
                    ],
                    custom_value: true,
                },
            },
        },
        {
            name: "circle_animation",
            label: "Circle Animation",
            default: true,
            selector: { boolean: {} },
        },
        {
            name: "subtract_individual",
            label: "Subtract Individual",
            selector: { boolean: {} },
        },
        {
            name: "override_state",
            label: "Override State (With Home Entity)",
            selector: { boolean: {} },
        },
        {
            name: "use_metadata",
            label: "Use Metadata",
            selector: { boolean: {} },
        },
        {
            name: "hide",
            label: "Hide Home",
            selector: { boolean: {} },
        },
    ], false) });
exports.homeSchema = [
    {
        name: "entity",
        selector: { entity: {} },
    },
    mainSchema,
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

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
exports.gridSchema = void 0;
var _schema_base_1 = require("./_schema-base");
var localize_1 = require("@/localize/localize");
var mainSchema = __assign(__assign({}, (0, _schema_base_1.getBaseMainConfigSchema)("grid")), { schema: __spreadArray(__spreadArray([], (0, _schema_base_1.getBaseMainConfigSchema)("grid").schema, true), [
        {
            name: "invert_state",
            label: "Invert State",
            selector: { boolean: {} },
        },
        {
            name: "use_metadata",
            label: "Use Metadata",
            selector: { boolean: {} },
        },
        {
            name: "color_value",
            label: "Color of Value",
            selector: { boolean: {} },
        },
    ], false) });
var powerOutageGridSchema = [
    {
        type: "grid",
        column_min_width: "200px",
        schema: [
            { name: "entity", selector: { entity: {} } },
            { name: "entity_generator", label: "Generator Entity", selector: { entity: {} } },
            { name: "label_alert", label: "Outage Label", selector: { text: {} } },
            { name: "icon_alert", label: "Outage Icon", selector: { icon: {} } },
            { name: "state_alert", label: "Outage State", selector: { text: {} } },
        ],
    },
];
exports.gridSchema = [
    (0, _schema_base_1.getEntityCombinedSelectionSchema)(),
    (0, _schema_base_1.getEntitySeparatedSelectionSchema)(),
    mainSchema,
    _schema_base_1.customColorsSchema,
    {
        title: (0, localize_1.default)("editor.secondary_info"),
        name: "secondary_info",
        type: "expandable",
        schema: _schema_base_1.secondaryInfoSchema,
    },
    {
        title: (0, localize_1.default)("editor.power_outage"),
        name: "power_outage",
        type: "expandable",
        schema: powerOutageGridSchema,
    },
    {
        title: (0, localize_1.default)("editor.tap_action"),
        name: "",
        type: "expandable",
        schema: _schema_base_1.tapActionSchema,
    },
];

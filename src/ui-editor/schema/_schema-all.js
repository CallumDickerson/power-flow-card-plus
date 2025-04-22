"use strict";
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
exports.advancedOptionsSchema = exports.individualDevicesSchema = exports.entitiesSchema = exports.generalConfigSchema = exports.cardConfigStruct = void 0;
var js_1 = require("@mdi/js");
var superstruct_1 = require("superstruct");
var memoize_one_1 = require("memoize-one");
var battery_1 = require("./battery");
var display_zero_lines_1 = require("./display_zero_lines");
var fossil_fuel_percentage_1 = require("./fossil_fuel_percentage");
var grid_1 = require("./grid");
var home_1 = require("./home");
var individual_1 = require("./individual");
var solar_1 = require("./solar");
var baseLovelaceCardConfig = (0, superstruct_1.object)({
    type: (0, superstruct_1.string)(),
    view_layout: (0, superstruct_1.any)(),
});
exports.cardConfigStruct = (0, superstruct_1.assign)(baseLovelaceCardConfig, (0, superstruct_1.object)({
    title: (0, superstruct_1.optional)((0, superstruct_1.string)()),
    theme: (0, superstruct_1.optional)((0, superstruct_1.string)()),
    dashboard_link: (0, superstruct_1.optional)((0, superstruct_1.string)()),
    dashboard_link_label: (0, superstruct_1.optional)((0, superstruct_1.string)()),
    second_dashboard_link: (0, superstruct_1.optional)((0, superstruct_1.string)()),
    second_dashboard_link_label: (0, superstruct_1.optional)((0, superstruct_1.string)()),
    inverted_entities: (0, superstruct_1.optional)((0, superstruct_1.any)()),
    w_decimals: (0, superstruct_1.optional)((0, superstruct_1.integer)()),
    kw_decimals: (0, superstruct_1.optional)((0, superstruct_1.integer)()),
    min_flow_rate: (0, superstruct_1.optional)((0, superstruct_1.number)()),
    max_flow_rate: (0, superstruct_1.optional)((0, superstruct_1.number)()),
    min_expected_power: (0, superstruct_1.optional)((0, superstruct_1.number)()),
    max_expected_power: (0, superstruct_1.optional)((0, superstruct_1.number)()),
    watt_threshold: (0, superstruct_1.optional)((0, superstruct_1.number)()),
    clickable_entities: (0, superstruct_1.optional)((0, superstruct_1.boolean)()),
    transparency_zero_lines: (0, superstruct_1.optional)((0, superstruct_1.number)()),
    greyout_zero_lines: (0, superstruct_1.optional)((0, superstruct_1.boolean)()),
    display_zero_lines: (0, superstruct_1.optional)((0, superstruct_1.any)()),
    use_new_flow_rate_model: (0, superstruct_1.optional)((0, superstruct_1.boolean)()),
    full_size: (0, superstruct_1.optional)((0, superstruct_1.boolean)()),
    style_ha_card: (0, superstruct_1.optional)((0, superstruct_1.any)()),
    style_card_content: (0, superstruct_1.optional)((0, superstruct_1.any)()),
    disable_dots: (0, superstruct_1.optional)((0, superstruct_1.boolean)()),
    entities: (0, superstruct_1.object)({
        battery: (0, superstruct_1.optional)((0, superstruct_1.any)()),
        grid: (0, superstruct_1.optional)((0, superstruct_1.any)()),
        solar: (0, superstruct_1.optional)((0, superstruct_1.any)()),
        home: (0, superstruct_1.optional)((0, superstruct_1.any)()),
        fossil_fuel_percentage: (0, superstruct_1.optional)((0, superstruct_1.any)()),
        individual: (0, superstruct_1.optional)((0, superstruct_1.any)()),
    }),
    sort_individual_devices: (0, superstruct_1.optional)((0, superstruct_1.boolean)()),
}));
exports.generalConfigSchema = [
    {
        name: "title",
        label: "Title",
        selector: { text: {} },
    },
];
exports.entitiesSchema = (0, memoize_one_1.default)(function (localize) { return [
    {
        name: "entities",
        type: "grid",
        column_min_width: "400px",
        schema: [
            {
                title: localize("editor.grid"),
                name: "grid",
                type: "expandable",
                iconPath: js_1.mdiTransmissionTower,
                schema: grid_1.gridSchema,
            },
            {
                title: localize("editor.solar"),
                name: "solar",
                type: "expandable",
                iconPath: js_1.mdiWeatherSunny,
                schema: solar_1.solarSchema,
            },
            {
                title: localize("editor.battery"),
                name: "battery",
                type: "expandable",
                iconPath: js_1.mdiBatteryHigh,
                schema: battery_1.batterySchema,
            },
            {
                title: localize("editor.fossil_fuel_percentage"),
                name: "fossil_fuel_percentage",
                type: "expandable",
                iconPath: js_1.mdiLeaf,
                schema: fossil_fuel_percentage_1.nonFossilSchema,
            },
            {
                title: localize("editor.home"),
                name: "home",
                type: "expandable",
                iconPath: js_1.mdiHome,
                schema: home_1.homeSchema,
            },
        ],
    },
]; });
exports.individualDevicesSchema = (0, memoize_one_1.default)(function (localize) { return [
    {
        name: "entities",
        type: "grid",
        column_min_width: "400px",
        schema: [
            {
                title: "".concat(localize("editor.individual"), " 1"),
                name: "individual1",
                type: "expandable",
                schema: individual_1.individualSchema,
            },
            {
                title: "".concat(localize("editor.individual"), " 2"),
                name: "individual2",
                type: "expandable",
                schema: individual_1.individualSchema,
            },
        ],
    },
]; });
exports.advancedOptionsSchema = (0, memoize_one_1.default)(function (localize, displayZeroLinesMode) { return [
    {
        type: "grid",
        column_min_width: "200px",
        schema: [
            {
                name: "dashboard_link",
                label: "Dashboard Link",
                selector: { navigation: {} },
            },
            {
                name: "dashboard_link_label",
                label: "Dashboard Link Label",
                selector: { text: {} },
            },
            {
                name: "w_decimals",
                label: "Watt Decimals",
                selector: { number: { mode: "box", min: 0, max: 5, step: 1 } },
            },
            {
                name: "kw_decimals",
                label: "kW Decimals",
                selector: { number: { mode: "box", min: 0, max: 5, step: 1 } },
            },
            {
                name: "max_flow_rate",
                label: "Max Flow Rate (Sec/Dot)",
                selector: { number: { mode: "box", min: 0, max: 1000000, step: 0.01 } },
            },
            {
                name: "min_flow_rate",
                label: "Min Flow Rate (Sec/Dot)",
                selector: { number: { mode: "box", min: 0, max: 1000000, step: 0.01 } },
            },
            {
                name: "max_expected_power",
                label: "Max Expected Power (in Watts)",
                selector: { number: { mode: "box", min: 0, max: 1000000, step: 0.01 } },
            },
            {
                name: "min_expected_power",
                label: "Min Expected Power (in Watts)",
                selector: { number: { mode: "box", min: 0, max: 1000000, step: 0.01 } },
            },
            {
                name: "watt_threshold",
                label: "Watt to Kilowatt Threshold",
                selector: { number: { mode: "box", min: 0, max: 1000000, step: 1 } },
            },
            {
                name: "clickable_entities",
                label: "Clickable Entities",
                selector: { boolean: {} },
            },
            {
                name: "disable_dots",
                label: "Disable Moving Dots",
                selector: { boolean: {} },
            },
            {
                name: "use_new_flow_rate_model",
                label: "New Flow Model?",
                selector: { boolean: {} },
            },
            {
                name: "sort_individual_devices",
                label: "Sort individual devices by usage",
                selector: { boolean: {} },
            },
        ],
    },
    {
        type: "expandable",
        title: localize("editor.display_zero_lines"),
        schema: __spreadArray([], (0, display_zero_lines_1.displayZeroLinesSchema)(localize, displayZeroLinesMode), true),
    },
]; });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allDynamicStyles = void 0;
var convertColor_1 = require("../utils/convertColor");
var colors_1 = require("./colors");
var allDynamicStyles = function (main, _a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
    var grid = _a.grid, solar = _a.solar, entities = _a.entities, individual = _a.individual, battery = _a.battery, homeSources = _a.homeSources, homeLargestSource = _a.homeLargestSource, nonFossil = _a.nonFossil, display_zero_lines_transparency = _a.display_zero_lines_transparency, display_zero_lines_grey_color = _a.display_zero_lines_grey_color, isCardWideEnough = _a.isCardWideEnough;
    // Grid
    main.style.setProperty("--icon-grid-color", grid.color.icon_type === "consumption"
        ? "var(--energy-grid-consumption-color)"
        : grid.color.icon_type === "production"
            ? "var(--energy-grid-return-color)"
            : grid.color.icon_type === true
                ? ((_b = grid.state.fromGrid) !== null && _b !== void 0 ? _b : 0) >= ((_c = grid.state.toGrid) !== null && _c !== void 0 ? _c : 0)
                    ? "var(--energy-grid-consumption-color)"
                    : "var(--energy-grid-return-color)"
                : "var(--primary-text-color)");
    main.style.setProperty("--circle-grid-color", grid.color.circle_type === "consumption"
        ? "var(--energy-grid-consumption-color)"
        : grid.color.circle_type === "production"
            ? "var(--energy-grid-return-color)"
            : grid.color.circle_type === true
                ? ((_d = grid.state.fromGrid) !== null && _d !== void 0 ? _d : 0) >= ((_e = grid.state.toGrid) !== null && _e !== void 0 ? _e : 0)
                    ? "var(--energy-grid-consumption-color)"
                    : "var(--energy-grid-return-color)"
                : "var(--energy-grid-consumption-color)");
    if (grid.color.fromGrid !== undefined) {
        if (typeof grid.color.fromGrid === "object") {
            grid.color.fromGrid = (0, convertColor_1.convertColorListToHex)(grid.color.fromGrid);
        }
        main.style.setProperty("--energy-grid-consumption-color", grid.color.fromGrid || "#a280db");
    }
    if (grid.color.toGrid !== undefined) {
        if (typeof grid.color.toGrid === "object") {
            grid.color.toGrid = (0, convertColor_1.convertColorListToHex)(grid.color.toGrid);
        }
        main.style.setProperty("--energy-grid-return-color", grid.color.toGrid || "#a280db");
    }
    main.style.setProperty("--secondary-text-grid-color", grid.secondary.color.type === "consumption"
        ? "var(--energy-grid-consumption-color)"
        : grid.secondary.color.type === "production"
            ? "var(--energy-grid-return-color)"
            : grid.secondary.color.type === true
                ? ((_f = grid.state.fromGrid) !== null && _f !== void 0 ? _f : 0) >= ((_g = grid.state.toGrid) !== null && _g !== void 0 ? _g : 0)
                    ? "var(--energy-grid-consumption-color)"
                    : "var(--energy-grid-return-color)"
                : "var(--primary-text-color)");
    if (((_h = entities.grid) === null || _h === void 0 ? void 0 : _h.color_value) === false) {
        main.style.setProperty("--text-grid-consumption-color", "var(--primary-text-color)");
        main.style.setProperty("--text-grid-return-color", "var(--primary-text-color)");
    }
    else {
        main.style.setProperty("--text-grid-consumption-color", "var(--energy-grid-consumption-color)");
        main.style.setProperty("--text-grid-return-color", "var(--energy-grid-return-color)");
    }
    // Solar
    main.style.setProperty("--text-solar-color", ((_j = entities.solar) === null || _j === void 0 ? void 0 : _j.color_value) ? "var(--energy-solar-color)" : "var(--primary-text-color)");
    main.style.setProperty("--secondary-text-solar-color", ((_l = (_k = entities.solar) === null || _k === void 0 ? void 0 : _k.secondary_info) === null || _l === void 0 ? void 0 : _l.color_value) ? "var(--energy-solar-color)" : "var(--primary-text-color)");
    if (((_m = entities.solar) === null || _m === void 0 ? void 0 : _m.color) !== undefined) {
        var solarColor = (_o = entities.solar) === null || _o === void 0 ? void 0 : _o.color;
        if (typeof solarColor === "object")
            solarColor = (0, convertColor_1.convertColorListToHex)(solarColor);
        main.style.setProperty("--energy-solar-color", solarColor || "#ff9800");
    }
    main.style.setProperty("--icon-solar-color", ((_p = entities.solar) === null || _p === void 0 ? void 0 : _p.color_icon) ? "var(--energy-solar-color)" : "var(--primary-text-color)");
    // Battery
    if (battery.color.fromBattery !== undefined) {
        if (typeof battery.color.fromBattery === "object")
            battery.color.fromBattery = (0, convertColor_1.convertColorListToHex)(battery.color.fromBattery);
        main.style.setProperty("--energy-battery-out-color", battery.color.fromBattery || "#4db6ac");
    }
    if (battery.color.toBattery !== undefined) {
        if (typeof battery.color.toBattery === "object")
            battery.color.toBattery = (0, convertColor_1.convertColorListToHex)(battery.color.toBattery);
        main.style.setProperty("--energy-battery-in-color", battery.color.toBattery || "#a280db");
    }
    battery.color.icon_type = (_q = entities.battery) === null || _q === void 0 ? void 0 : _q.color_icon;
    main.style.setProperty("--icon-battery-color", battery.color.icon_type === "consumption"
        ? "var(--energy-battery-in-color)"
        : battery.color.icon_type === "production"
            ? "var(--energy-battery-out-color)"
            : battery.color.icon_type === true
                ? battery.state.fromBattery >= battery.state.toBattery
                    ? "var(--energy-battery-out-color)"
                    : "var(--energy-battery-in-color)"
                : "var(--primary-text-color)");
    var batteryStateOfChargeColorType = (_r = entities.battery) === null || _r === void 0 ? void 0 : _r.color_state_of_charge_value;
    main.style.setProperty("--text-battery-state-of-charge-color", batteryStateOfChargeColorType === "consumption"
        ? "var(--energy-battery-in-color)"
        : batteryStateOfChargeColorType === "production"
            ? "var(--energy-battery-out-color)"
            : batteryStateOfChargeColorType === true
                ? battery.state.fromBattery >= battery.state.toBattery
                    ? "var(--energy-battery-out-color)"
                    : "var(--energy-battery-in-color)"
                : "var(--primary-text-color)");
    main.style.setProperty("--circle-battery-color", battery.color.circle_type === "consumption"
        ? "var(--energy-battery-in-color)"
        : battery.color.circle_type === "production"
            ? "var(--energy-battery-out-color)"
            : battery.color.circle_type === true
                ? battery.state.fromBattery >= battery.state.toBattery
                    ? "var(--energy-battery-out-color)"
                    : "var(--energy-battery-in-color)"
                : "var(--energy-battery-in-color)");
    if (((_s = entities.battery) === null || _s === void 0 ? void 0 : _s.color_value) === false) {
        main.style.setProperty("--text-battery-in-color", "var(--primary-text-color)");
        main.style.setProperty("--text-battery-out-color", "var(--primary-text-color)");
    }
    else {
        main.style.setProperty("--text-battery-in-color", "var(--energy-battery-in-color)");
        main.style.setProperty("--text-battery-out-color", "var(--energy-battery-out-color)");
    }
    // Non-fossil
    if (nonFossil.color !== undefined) {
        if (typeof nonFossil.color === "object")
            nonFossil.color = (0, convertColor_1.convertColorListToHex)(nonFossil.color);
        main.style.setProperty("--non-fossil-color", nonFossil.color || "var(--energy-non-fossil-color)");
    }
    main.style.setProperty("--icon-non-fossil-color", ((_t = entities.fossil_fuel_percentage) === null || _t === void 0 ? void 0 : _t.color_icon) ? "var(--non-fossil-color)" : "var(--primary-text-color)" || "var(--non-fossil-color)");
    main.style.setProperty("--text-non-fossil-color", ((_u = entities.fossil_fuel_percentage) === null || _u === void 0 ? void 0 : _u.color_value) ? "var(--non-fossil-color)" : "var(--primary-text-color)");
    main.style.setProperty("--secondary-text-non-fossil-color", ((_w = (_v = entities.fossil_fuel_percentage) === null || _v === void 0 ? void 0 : _v.secondary_info) === null || _w === void 0 ? void 0 : _w.color_value) ? "var(--non-fossil-color)" : "var(--primary-text-color)");
    // Home
    main.style.setProperty("--secondary-text-home-color", ((_y = (_x = entities.home) === null || _x === void 0 ? void 0 : _x.secondary_info) === null || _y === void 0 ? void 0 : _y.color_value) ? "var(--text-home-color)" : "var(--primary-text-color)");
    main.style.setProperty("--icon-home-color", (0, colors_1.computeColor)((_z = entities.home) === null || _z === void 0 ? void 0 : _z.color_icon, homeSources, homeLargestSource));
    main.style.setProperty("--text-home-color", (0, colors_1.computeColor)((_0 = entities.home) === null || _0 === void 0 ? void 0 : _0.color_value, homeSources, homeLargestSource));
    // --home-circle-animation
    if (((_1 = entities.home) === null || _1 === void 0 ? void 0 : _1.circle_animation) === false)
        main.style.setProperty("--home-circle-animation", "none");
    //   Battery-Grid line
    main.style.setProperty("--battery-grid-line", grid.state.toBattery || 0 > 0 ? "var(--energy-grid-consumption-color)" : "var(--energy-grid-return-color)");
    // Transparencies
    main.style.setProperty("--transparency-unused-lines", display_zero_lines_transparency ? display_zero_lines_transparency.toString() : "0");
    if (display_zero_lines_grey_color !== undefined) {
        var greyColor = display_zero_lines_grey_color;
        if (typeof greyColor === "object")
            greyColor = (0, convertColor_1.convertColorListToHex)(greyColor);
        main.style.setProperty("--greyed-out--line-color", greyColor);
    }
    if (solar.has) {
        if (battery.has) {
            // has solar, battery and grid
            // main.style.setProperty("--lines-svg-not-flat-line-height", isCardWideEnough ? "106%" : "102%");
            main.style.setProperty("--lines-svg-not-flat-line-height", "106%");
            // main.style.setProperty("--lines-svg-not-flat-line-top", isCardWideEnough ? "-3%" : "-1%");
            main.style.setProperty("--lines-svg-not-flat-line-top", "-3%");
            main.style.setProperty("--lines-svg-flat-width", isCardWideEnough ? "calc(100% - 160px)" : "calc(100% - 160px)");
            main.style.setProperty("--lines-svg-flat-left", "0");
            main.style.setProperty("--lines-svg-not-flat-left", "0");
        }
        else {
            // has solar but no battery
            // main.style.setProperty("--lines-svg-not-flat-line-height", isCardWideEnough ? "104%" : "102%");
            // main.style.setProperty("--lines-svg-not-flat-line-top", isCardWideEnough ? "-2%" : "-1%");
            main.style.setProperty("--lines-svg-not-flat-line-top", "-2%");
            main.style.setProperty("--lines-svg-flat-width", isCardWideEnough ? "calc(100% - 154px)" : "calc(100% - 157px)");
            main.style.setProperty("--lines-svg-not-flat-width", isCardWideEnough ? "calc(103% - 172px)" : "calc(103% - 169px)");
            main.style.setProperty("--lines-svg-not-flat-left", "3px");
            main.style.setProperty("--lines-svg-flat-left", "-3px");
        }
    }
    if (individual === null || individual === void 0 ? void 0 : individual.some(function (ind) { return ind.has; })) {
        var getStylesForIndividual_1 = function (field, index) {
            var _a;
            var colors = ["#d0cc5b", "#964cb5", "#b54c9d", "#5bd0cc"];
            var fieldNames = ["left-top", "left-bottom", "right-top", "right-bottom"];
            var fieldName = (fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames[index]) || "left-top";
            var individualColor = field === null || field === void 0 ? void 0 : field.color;
            if (typeof individualColor === "object")
                individualColor = (0, convertColor_1.convertColorListToHex)(individualColor);
            main.style.setProperty("--individual-".concat(fieldName, "-color"), individualColor || colors[index] || "#d0cc5b");
            main.style.setProperty("--icon-individual-".concat(fieldName, "-color"), (field === null || field === void 0 ? void 0 : field.color_icon) !== false ? "var(--individual-".concat(fieldName, "-color)") : "var(--primary-text-color)");
            main.style.setProperty("--text-individual-".concat(fieldName, "-color"), (field === null || field === void 0 ? void 0 : field.color_value) ? "var(--individual-".concat(fieldName, "-color)") : "var(--primary-text-color)");
            main.style.setProperty("--secondary-text-individual-".concat(fieldName, "-color"), ((_a = field === null || field === void 0 ? void 0 : field.secondary_info) === null || _a === void 0 ? void 0 : _a.color_value) ? "var(--individual-".concat(fieldName, "-color)") : "var(--primary-text-color)");
        };
        var individualIndex_1 = 0;
        individual.forEach(function (_, index) {
            if (!individual[index].has)
                return;
            getStylesForIndividual_1(entities.individual[index], individualIndex_1);
            individualIndex_1++;
        });
    }
};
exports.allDynamicStyles = allDynamicStyles;

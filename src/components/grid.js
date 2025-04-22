"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gridElement = void 0;
var lit_1 = require("lit");
var displayValue_1 = require("../utils/displayValue");
var generalSecondarySpan_1 = require("./spans/generalSecondarySpan");
var gridElement = function (main, config, _a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var entities = _a.entities, grid = _a.grid, templatesObj = _a.templatesObj;
    return (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["<div class=\"circle-container grid\">\n    <div\n      class=\"circle\"\n      @click=", "\n      @keyDown=", "\n    >\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    </div>\n    <span class=\"label\">", "</span>\n  </div>"], ["<div class=\"circle-container grid\">\n    <div\n      class=\"circle\"\n      @click=", "\n      @keyDown=", "\n    >\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    </div>\n    <span class=\"label\">", "</span>\n  </div>"])), function (e) {
        var _a, _b, _c, _d, _e, _f;
        var outageTarget = (_b = (_a = grid.powerOutage) === null || _a === void 0 ? void 0 : _a.entityGenerator) !== null && _b !== void 0 ? _b : (_d = (_c = entities.grid) === null || _c === void 0 ? void 0 : _c.power_outage) === null || _d === void 0 ? void 0 : _d.entity;
        var target = ((_e = grid.powerOutage) === null || _e === void 0 ? void 0 : _e.isOutage) && outageTarget
            ? outageTarget
            : typeof entities.grid.entity === "string"
                ? entities.grid.entity
                : entities.grid.entity.consumption;
        main.openDetails(e, (_f = entities.grid) === null || _f === void 0 ? void 0 : _f.tap_action, target);
    }, function (e) {
        var _a, _b, _c, _d, _e, _f;
        if (e.key === "Enter") {
            var outageTarget = (_b = (_a = grid.powerOutage) === null || _a === void 0 ? void 0 : _a.entityGenerator) !== null && _b !== void 0 ? _b : (_d = (_c = entities.grid) === null || _c === void 0 ? void 0 : _c.power_outage) === null || _d === void 0 ? void 0 : _d.entity;
            var target = ((_e = grid.powerOutage) === null || _e === void 0 ? void 0 : _e.isOutage) && outageTarget
                ? outageTarget
                : typeof entities.grid.entity === "string"
                    ? entities.grid.entity
                    : entities.grid.entity.consumption;
            main.openDetails(e, (_f = entities.grid) === null || _f === void 0 ? void 0 : _f.tap_action, target);
        }
    }, (0, generalSecondarySpan_1.generalSecondarySpan)(main.hass, main, config, templatesObj, grid, "grid"), grid.icon !== " " ? (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject([" <ha-icon id=\"grid-icon\" .icon=", " />"], [" <ha-icon id=\"grid-icon\" .icon=", " />"])), grid.icon) : null, (((_b = entities.grid) === null || _b === void 0 ? void 0 : _b.display_state) === "two_way" ||
        ((_c = entities.grid) === null || _c === void 0 ? void 0 : _c.display_state) === undefined ||
        (((_d = entities.grid) === null || _d === void 0 ? void 0 : _d.display_state) === "one_way_no_zero" && ((_e = grid.state.toGrid) !== null && _e !== void 0 ? _e : 0) > 0) ||
        (((_f = entities.grid) === null || _f === void 0 ? void 0 : _f.display_state) === "one_way" && (grid.state.fromGrid === null || grid.state.fromGrid === 0) && grid.state.toGrid !== 0)) &&
        grid.state.toGrid !== null &&
        !grid.powerOutage.isOutage
        ? (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<span\n            class=\"return\"\n            @click=", "\n            @keyDown=", "\n          >\n            <ha-icon class=\"small\" .icon=", "></ha-icon>\n\n            ", "\n          </span>"], ["<span\n            class=\"return\"\n            @click=", "\n            @keyDown=", "\n          >\n            <ha-icon class=\"small\" .icon=", "></ha-icon>\n\n            ", "\n          </span>"])), function (e) {
            var _a;
            var target = typeof entities.grid.entity === "string" ? entities.grid.entity : entities.grid.entity.production;
            main.openDetails(e, (_a = entities.grid) === null || _a === void 0 ? void 0 : _a.tap_action, target);
        }, function (e) {
            var _a;
            if (e.key === "Enter") {
                var target = typeof entities.grid.entity === "string" ? entities.grid.entity : entities.grid.entity.production;
                main.openDetails(e, (_a = entities.grid) === null || _a === void 0 ? void 0 : _a.tap_action, target);
            }
        }, "mdi:arrow-left", (0, displayValue_1.displayValue)(main.hass, config, grid.state.toGrid, {
            unit: grid.unit,
            unitWhiteSpace: grid.unit_white_space,
            decimals: grid.decimals,
            watt_threshold: config.watt_threshold,
        })) : null, ((((_g = entities.grid) === null || _g === void 0 ? void 0 : _g.display_state) === "two_way" ||
        ((_h = entities.grid) === null || _h === void 0 ? void 0 : _h.display_state) === undefined ||
        (((_j = entities.grid) === null || _j === void 0 ? void 0 : _j.display_state) === "one_way_no_zero" && grid.state.fromGrid > 0) ||
        (((_k = entities.grid) === null || _k === void 0 ? void 0 : _k.display_state) === "one_way" && (grid.state.toGrid === null || grid.state.toGrid === 0))) &&
        grid.state.fromGrid !== null &&
        !grid.powerOutage.isOutage) ||
        (grid.powerOutage.isOutage && !!grid.powerOutage.entityGenerator)
        ? (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject([" <span\n            class=\"consumption\"\n            @click=", "\n            @keyDown=", "\n          >\n            <ha-icon class=\"small\" .icon=", "></ha-icon>\n            ", "\n          </span>"], [" <span\n            class=\"consumption\"\n            @click=", "\n            @keyDown=", "\n          >\n            <ha-icon class=\"small\" .icon=", "></ha-icon>\n            ", "\n          </span>"])), function (e) {
            var _a;
            var target = typeof entities.grid.entity === "string" ? entities.grid.entity : entities.grid.entity.consumption;
            main.openDetails(e, (_a = entities.grid) === null || _a === void 0 ? void 0 : _a.tap_action, target);
        }, function (e) {
            var _a;
            if (e.key === "Enter") {
                var target = typeof entities.grid.entity === "string" ? entities.grid.entity : entities.grid.entity.consumption;
                main.openDetails(e, (_a = entities.grid) === null || _a === void 0 ? void 0 : _a.tap_action, target);
            }
        }, "mdi:arrow-right", (0, displayValue_1.displayValue)(main.hass, config, grid.state.fromGrid, {
            unit: grid.unit,
            unitWhiteSpace: grid.unit_white_space,
            decimals: grid.decimals,
            watt_threshold: config.watt_threshold,
        })) : "", ((_l = grid.powerOutage) === null || _l === void 0 ? void 0 : _l.isOutage) && !((_m = grid.powerOutage) === null || _m === void 0 ? void 0 : _m.entityGenerator) ? (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["<span class=\"grid power-outage\">", "</span>"], ["<span class=\"grid power-outage\">", "</span>"])), grid.powerOutage.name) : "", grid.name);
};
exports.gridElement = gridElement;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.batteryElement = void 0;
var lit_1 = require("lit");
var displayValue_1 = require("../utils/displayValue");
var batteryElement = function (main, config, _a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var battery = _a.battery, entities = _a.entities;
    return (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["<div class=\"circle-container battery\">\n    <div\n      class=\"circle\"\n      @click=", "\n      @keyDown=", "\n    >\n      ", "\n      ", "\n      ", "\n      ", "\n    </div>\n    <span class=\"label\">", "</span>\n  </div>"], ["<div class=\"circle-container battery\">\n    <div\n      class=\"circle\"\n      @click=", "\n      @keyDown=", "\n    >\n      ", "\n      ", "\n      ", "\n      ", "\n    </div>\n    <span class=\"label\">", "</span>\n  </div>"])), function (e) {
        var _a, _b, _c, _d, _e, _f;
        var target = ((_a = entities.battery) === null || _a === void 0 ? void 0 : _a.state_of_charge)
            ? (_b = entities.battery) === null || _b === void 0 ? void 0 : _b.state_of_charge
            : typeof ((_c = entities.battery) === null || _c === void 0 ? void 0 : _c.entity) === "string"
                ? (_d = entities.battery) === null || _d === void 0 ? void 0 : _d.entity
                : (_e = entities.battery) === null || _e === void 0 ? void 0 : _e.entity.production;
        main.openDetails(e, (_f = entities.battery) === null || _f === void 0 ? void 0 : _f.tap_action, target);
    }, function (e) {
        var _a, _b, _c;
        if (e.key === "Enter") {
            var target = ((_a = entities.battery) === null || _a === void 0 ? void 0 : _a.state_of_charge)
                ? (_b = entities.battery) === null || _b === void 0 ? void 0 : _b.state_of_charge
                : typeof entities.battery.entity === "string"
                    ? entities.battery.entity
                    : entities.battery.entity.production;
            main.openDetails(e, (_c = entities.battery) === null || _c === void 0 ? void 0 : _c.tap_action, target);
        }
    }, battery.state_of_charge.state !== null && ((_b = entities.battery) === null || _b === void 0 ? void 0 : _b.show_state_of_charge) !== false
        ? (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject([" <span\n            @click=", "\n            @keyDown=", "\n            id=\"battery-state-of-charge-text\"\n          >\n            ", "\n          </span>"], [" <span\n            @click=", "\n            @keyDown=", "\n            id=\"battery-state-of-charge-text\"\n          >\n            ", "\n          </span>"])), function (e) {
            var _a, _b;
            main.openDetails(e, (_a = entities.battery) === null || _a === void 0 ? void 0 : _a.tap_action, (_b = entities.battery) === null || _b === void 0 ? void 0 : _b.state_of_charge);
        }, function (e) {
            var _a, _b;
            if (e.key === "Enter") {
                main.openDetails(e, (_a = entities.battery) === null || _a === void 0 ? void 0 : _a.tap_action, (_b = entities.battery) === null || _b === void 0 ? void 0 : _b.state_of_charge);
            }
        }, (0, displayValue_1.displayValue)(main.hass, config, battery.state_of_charge.state, {
            unit: (_c = battery.state_of_charge.unit) !== null && _c !== void 0 ? _c : "%",
            unitWhiteSpace: battery.state_of_charge.unit_white_space,
            decimals: battery.state_of_charge.decimals,
            accept_negative: undefined,
            watt_threshold: config.watt_threshold,
        })) : null, battery.icon !== " "
        ? (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject([" <ha-icon\n            id=\"battery-icon\"\n            .icon=", "\n            @click=", "\n            @keyDown=", "\n          />"], [" <ha-icon\n            id=\"battery-icon\"\n            .icon=", "\n            @click=", "\n            @keyDown=", "\n          />"])), battery.icon, function (e) {
            var _a, _b;
            main.openDetails(e, (_a = entities.battery) === null || _a === void 0 ? void 0 : _a.tap_action, (_b = entities.battery) === null || _b === void 0 ? void 0 : _b.state_of_charge);
        }, function (e) {
            var _a, _b;
            if (e.key === "Enter") {
                main.openDetails(e, (_a = entities.battery) === null || _a === void 0 ? void 0 : _a.tap_action, (_b = entities.battery) === null || _b === void 0 ? void 0 : _b.state_of_charge);
            }
        }) : null, ((_d = entities.battery) === null || _d === void 0 ? void 0 : _d.display_state) === "two_way" ||
        ((_e = entities.battery) === null || _e === void 0 ? void 0 : _e.display_state) === undefined ||
        (((_f = entities.battery) === null || _f === void 0 ? void 0 : _f.display_state) === "one_way_no_zero" && battery.state.toBattery > 0) ||
        (((_g = entities.battery) === null || _g === void 0 ? void 0 : _g.display_state) === "one_way" && battery.state.toBattery !== 0)
        ? (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<span\n            class=\"battery-in\"\n            @click=", "\n            @keyDown=", "\n          >\n            <ha-icon class=\"small\" .icon=", "></ha-icon>\n            ", "</span\n          >"], ["<span\n            class=\"battery-in\"\n            @click=", "\n            @keyDown=", "\n          >\n            <ha-icon class=\"small\" .icon=", "></ha-icon>\n            ", "</span\n          >"])), function (e) {
            var _a;
            var target = typeof entities.battery.entity === "string" ? entities.battery.entity : entities.battery.entity.production;
            main.openDetails(e, (_a = entities.battery) === null || _a === void 0 ? void 0 : _a.tap_action, target);
        }, function (e) {
            var _a;
            if (e.key === "Enter") {
                var target = typeof entities.battery.entity === "string" ? entities.battery.entity : entities.battery.entity.production;
                main.openDetails(e, (_a = entities.battery) === null || _a === void 0 ? void 0 : _a.tap_action, target);
            }
        }, "mdi:arrow-down", (0, displayValue_1.displayValue)(main.hass, config, battery.state.toBattery, {
            unit: battery.unit,
            unitWhiteSpace: battery.unit_white_space,
            decimals: battery.decimals,
            watt_threshold: config.watt_threshold,
        })) : "", ((_h = entities.battery) === null || _h === void 0 ? void 0 : _h.display_state) === "two_way" ||
        ((_j = entities.battery) === null || _j === void 0 ? void 0 : _j.display_state) === undefined ||
        (((_k = entities.battery) === null || _k === void 0 ? void 0 : _k.display_state) === "one_way_no_zero" && battery.state.fromBattery > 0) ||
        (((_l = entities.battery) === null || _l === void 0 ? void 0 : _l.display_state) === "one_way" && (battery.state.toBattery === 0 || battery.state.fromBattery !== 0))
        ? (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["<span\n            class=\"battery-out\"\n            @click=", "\n            @keyDown=", "\n          >\n            <ha-icon class=\"small\" .icon=", "></ha-icon>\n            ", "</span\n          >"], ["<span\n            class=\"battery-out\"\n            @click=", "\n            @keyDown=", "\n          >\n            <ha-icon class=\"small\" .icon=", "></ha-icon>\n            ", "</span\n          >"])), function (e) {
            var _a;
            var target = typeof entities.battery.entity === "string" ? entities.battery.entity : entities.battery.entity.consumption;
            main.openDetails(e, (_a = entities.battery) === null || _a === void 0 ? void 0 : _a.tap_action, target);
        }, function (e) {
            var _a;
            if (e.key === "Enter") {
                var target = typeof entities.battery.entity === "string" ? entities.battery.entity : entities.battery.entity.consumption;
                main.openDetails(e, (_a = entities.battery) === null || _a === void 0 ? void 0 : _a.tap_action, target);
            }
        }, "mdi:arrow-up", (0, displayValue_1.displayValue)(main.hass, config, battery.state.fromBattery, {
            unit: battery.unit,
            unitWhiteSpace: battery.unit_white_space,
            decimals: battery.decimals,
            watt_threshold: config.watt_threshold,
        })) : "", battery.name);
};
exports.batteryElement = batteryElement;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

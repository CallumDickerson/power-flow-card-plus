"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.solarElement = void 0;
var lit_1 = require("lit");
var generalSecondarySpan_1 = require("./spans/generalSecondarySpan");
var displayValue_1 = require("../utils/displayValue");
var solarElement = function (main, config, _a) {
    var _b;
    var entities = _a.entities, solar = _a.solar, templatesObj = _a.templatesObj;
    return (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<div class=\"circle-container solar\">\n    <span class=\"label\">", "</span>\n    <div\n      class=\"circle\"\n      @click=", "\n      @keyDown=", "\n    >\n      ", "\n      ", "\n      ", "\n    </div>\n  </div>"], ["<div class=\"circle-container solar\">\n    <span class=\"label\">", "</span>\n    <div\n      class=\"circle\"\n      @click=", "\n      @keyDown=", "\n    >\n      ", "\n      ", "\n      ", "\n    </div>\n  </div>"])), solar.name, function (e) {
        main.openDetails(e, solar.tap_action, solar.entity);
    }, function (e) {
        if (e.key === "Enter") {
            main.openDetails(e, solar.tap_action, solar.entity);
        }
    }, (0, generalSecondarySpan_1.generalSecondarySpan)(main.hass, main, config, templatesObj, solar, "solar"), solar.icon !== " " ? (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject([" <ha-icon id=\"solar-icon\" .icon=", " />"], [" <ha-icon id=\"solar-icon\" .icon=", " />"])), solar.icon) : null, ((_b = entities.solar) === null || _b === void 0 ? void 0 : _b.display_zero_state) !== false || (solar.state.total || 0) > 0
        ? (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject([" <span class=\"solar\">\n            ", "\n          </span>"], [" <span class=\"solar\">\n            ", "\n          </span>"])), (0, displayValue_1.displayValue)(main.hass, config, solar.state.total, {
            unit: solar.state.unit,
            unitWhiteSpace: solar.state.unit_white_space,
            decimals: solar.state.decimals,
            watt_threshold: config.watt_threshold,
        })) : "");
};
exports.solarElement = solarElement;
var templateObject_1, templateObject_2, templateObject_3;

"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nonFossilElement = void 0;
var lit_1 = require("lit");
var generalSecondarySpan_1 = require("./spans/generalSecondarySpan");
var displayNonFossilState_1 = require("../utils/displayNonFossilState");
var styleLine_1 = require("../utils/styleLine");
var computeFlowRate_1 = require("../utils/computeFlowRate");
var showLine_1 = require("../utils/showLine");
var checkShouldShowDots_1 = require("../utils/checkShouldShowDots");
var nonFossilElement = function (main, config, _a) {
    var _b, _c, _d;
    var nonFossil = _a.nonFossil, entities = _a.entities, templatesObj = _a.templatesObj, grid = _a.grid, newDur = _a.newDur;
    return (0, lit_1.html)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["", ""], ["", ""])), !nonFossil.hasPercentage
        ? (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<div class=\"spacer\"></div>"], ["<div class=\"spacer\"></div>"]))) : (0, lit_1.html)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["<div class=\"circle-container low-carbon\">\n        <span class=\"label\">", "</span>\n        <div\n          class=\"circle\"\n          @click=", "\n          @keyDown=", "\n        >\n          ", "\n          ", "\n          ", "\n        </div>\n        ", "\n      </div>"], ["<div class=\"circle-container low-carbon\">\n        <span class=\"label\">", "</span>\n        <div\n          class=\"circle\"\n          @click=", "\n          @keyDown=", "\n        >\n          ", "\n          ", "\n          ", "\n        </div>\n        ", "\n      </div>"])), nonFossil.name, function (e) {
        var _a, _b;
        main.openDetails(e, (_a = entities.fossil_fuel_percentage) === null || _a === void 0 ? void 0 : _a.tap_action, (_b = entities.fossil_fuel_percentage) === null || _b === void 0 ? void 0 : _b.entity);
    }, function (e) {
        var _a, _b;
        if (e.key === "Enter") {
            main.openDetails(e, (_a = entities.fossil_fuel_percentage) === null || _a === void 0 ? void 0 : _a.tap_action, (_b = entities.fossil_fuel_percentage) === null || _b === void 0 ? void 0 : _b.entity);
        }
    }, (0, generalSecondarySpan_1.generalSecondarySpan)(main.hass, main, config, templatesObj, nonFossil, "low-carbon"), nonFossil.icon !== " " ? (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject([" <ha-icon id=\"low-carbon-icon\" .icon=", " />"], [" <ha-icon id=\"low-carbon-icon\" .icon=", " />"])), nonFossil.icon) : null, ((_b = entities.fossil_fuel_percentage) === null || _b === void 0 ? void 0 : _b.display_zero_state) !== false ||
        (nonFossil.state.power || 0) > (((_c = entities.fossil_fuel_percentage) === null || _c === void 0 ? void 0 : _c.display_zero_tolerance) || 0)
        ? (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                <span class=\"low-carbon\"\n                  >", "</span\n                >\n              "], ["\n                <span class=\"low-carbon\"\n                  >", "</span\n                >\n              "])), (0, displayNonFossilState_1.displayNonFossilState)(main.hass, config, entities.fossil_fuel_percentage.entity, grid.state.fromGrid)) : "", (0, showLine_1.showLine)(config, nonFossil.state.power || 0)
        ? (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n              <svg width=\"80\" height=\"30\">\n                <path d=\"M40 -10 v40\" class=\"low-carbon ", "\" id=\"low-carbon\" />\n                ", "\n              </svg>\n            "], ["\n              <svg width=\"80\" height=\"30\">\n                <path d=\"M40 -10 v40\" class=\"low-carbon ", "\" id=\"low-carbon\" />\n                ", "\n              </svg>\n            "])), (0, styleLine_1.styleLine)(nonFossil.state.power || 0, config), (0, checkShouldShowDots_1.checkShouldShowDots)(config) && nonFossil.has && nonFossil.state.power > 0
            ? (0, lit_1.svg)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["<circle\n                r=\"1.75\"\n                class=\"low-carbon\"\n                vector-effect=\"non-scaling-stroke\"\n              >\n                  <animateMotion\n                    dur=\"", "s\"\n                    repeatCount=\"indefinite\"\n                    calcMode=\"linear\"\n                  >\n                    <mpath xlink:href=\"#low-carbon\" />\n                  </animateMotion>\n              </circle>"], ["<circle\n                r=\"1.75\"\n                class=\"low-carbon\"\n                vector-effect=\"non-scaling-stroke\"\n              >\n                  <animateMotion\n                    dur=\"", "s\"\n                    repeatCount=\"indefinite\"\n                    calcMode=\"linear\"\n                  >\n                    <mpath xlink:href=\"#low-carbon\" />\n                  </animateMotion>\n              </circle>"])), (0, computeFlowRate_1.computeIndividualFlowRate)((_d = entities.fossil_fuel_percentage) === null || _d === void 0 ? void 0 : _d.calculate_flow_rate, newDur.nonFossil)) : "") : ""));
};
exports.nonFossilElement = nonFossilElement;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flowBatteryGrid = void 0;
var class_map_js_1 = require("lit/directives/class-map.js");
var showLine_1 = require("@/utils/showLine");
var lit_1 = require("lit");
var styleLine_1 = require("@/utils/styleLine");
var computeIndividualPosition_1 = require("@/utils/computeIndividualPosition");
var checkShouldShowDots_1 = require("@/utils/checkShouldShowDots");
var flowBatteryGrid = function (config, _a) {
    var battery = _a.battery, grid = _a.grid, individual = _a.individual, newDur = _a.newDur;
    return grid.has && battery.has && (0, showLine_1.showLine)(config, Math.max(grid.state.toBattery || 0, battery.state.toGrid || 0))
        ? (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<div\n        class=\"lines ", "\"\n      >\n        <svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" id=\"battery-grid-flow\">\n          <path\n            id=\"battery-grid\"\n            class=", "\n            d=\"M45,100 v-15 c0,-30 -10,-30 -30,-30 h-20\"\n            vector-effect=\"non-scaling-stroke\"\n          ></path>\n          ", "\n          ", "\n        </svg>\n      </div>"], ["<div\n        class=\"lines ", "\"\n      >\n        <svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" id=\"battery-grid-flow\">\n          <path\n            id=\"battery-grid\"\n            class=", "\n            d=\"M45,100 v-15 c0,-30 -10,-30 -30,-30 h-20\"\n            vector-effect=\"non-scaling-stroke\"\n          ></path>\n          ", "\n          ", "\n        </svg>\n      </div>"])), (0, class_map_js_1.classMap)({
            high: battery.has || (0, computeIndividualPosition_1.checkHasBottomIndividual)(individual),
            "individual1-individual2": !battery.has && individual.every(function (i) { return i === null || i === void 0 ? void 0 : i.has; }),
            "multi-individual": (0, computeIndividualPosition_1.checkHasRightIndividual)(individual),
        }), (0, styleLine_1.styleLine)(battery.state.toGrid || grid.state.toBattery || 0, config), (0, checkShouldShowDots_1.checkShouldShowDots)(config) && grid.state.toBattery
            ? (0, lit_1.svg)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<circle\n          r=\"1\"\n          class=\"battery-from-grid\"\n          vector-effect=\"non-scaling-stroke\"\n        >\n          <animateMotion\n            dur=\"", "s\"\n            repeatCount=\"indefinite\"\n            keyPoints=\"1;0\" keyTimes=\"0;1\"\n            calcMode=\"linear\"\n          >\n            <mpath xlink:href=\"#battery-grid\" />\n          </animateMotion>\n        </circle>"], ["<circle\n          r=\"1\"\n          class=\"battery-from-grid\"\n          vector-effect=\"non-scaling-stroke\"\n        >\n          <animateMotion\n            dur=\"", "s\"\n            repeatCount=\"indefinite\"\n            keyPoints=\"1;0\" keyTimes=\"0;1\"\n            calcMode=\"linear\"\n          >\n            <mpath xlink:href=\"#battery-grid\" />\n          </animateMotion>\n        </circle>"])), newDur.batteryGrid) : "", (0, checkShouldShowDots_1.checkShouldShowDots)(config) && battery.state.toGrid
            ? (0, lit_1.svg)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<circle\n              r=\"1\"\n              class=\"battery-to-grid\"\n              vector-effect=\"non-scaling-stroke\"\n            >\n              <animateMotion\n                dur=\"", "s\"\n                repeatCount=\"indefinite\"\n                calcMode=\"linear\"\n              >\n                <mpath xlink:href=\"#battery-grid\" />\n              </animateMotion>\n            </circle>"], ["<circle\n              r=\"1\"\n              class=\"battery-to-grid\"\n              vector-effect=\"non-scaling-stroke\"\n            >\n              <animateMotion\n                dur=\"", "s\"\n                repeatCount=\"indefinite\"\n                calcMode=\"linear\"\n              >\n                <mpath xlink:href=\"#battery-grid\" />\n              </animateMotion>\n            </circle>"])), newDur.batteryGrid) : "") : "";
};
exports.flowBatteryGrid = flowBatteryGrid;
var templateObject_1, templateObject_2, templateObject_3;

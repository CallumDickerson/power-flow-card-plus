"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flowSolarToBattery = void 0;
var class_map_js_1 = require("lit/directives/class-map.js");
var showLine_1 = require("@/utils/showLine");
var lit_1 = require("lit");
var styleLine_1 = require("@/utils/styleLine");
var computeIndividualPosition_1 = require("@/utils/computeIndividualPosition");
var checkShouldShowDots_1 = require("@/utils/checkShouldShowDots");
var flowSolarToBattery = function (config, _a) {
    var battery = _a.battery, individual = _a.individual, solar = _a.solar, newDur = _a.newDur;
    return battery.has && solar.has && (0, showLine_1.showLine)(config, solar.state.toBattery || 0)
        ? (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<div\n        class=\"lines ", "\"\n      >\n        <svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" id=\"solar-battery-flow\" class=\"flat-line\">\n          <path\n            id=\"battery-solar\"\n            class=\"battery-solar ", "\"\n            d=\"M50,0 V100\"\n            vector-effect=\"non-scaling-stroke\"\n          ></path>\n          ", "\n        </svg>\n      </div>"], ["<div\n        class=\"lines ", "\"\n      >\n        <svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" id=\"solar-battery-flow\" class=\"flat-line\">\n          <path\n            id=\"battery-solar\"\n            class=\"battery-solar ", "\"\n            d=\"M50,0 V100\"\n            vector-effect=\"non-scaling-stroke\"\n          ></path>\n          ", "\n        </svg>\n      </div>"])), (0, class_map_js_1.classMap)({
            high: battery.has || (0, computeIndividualPosition_1.checkHasBottomIndividual)(individual),
            "individual1-individual2": !battery.has && individual.every(function (i) { return i === null || i === void 0 ? void 0 : i.has; }),
            "multi-individual": (0, computeIndividualPosition_1.checkHasRightIndividual)(individual),
        }), (0, styleLine_1.styleLine)(solar.state.toBattery || 0, config), (0, checkShouldShowDots_1.checkShouldShowDots)(config) && solar.state.toBattery
            ? (0, lit_1.svg)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<circle\n                r=\"1\"\n                class=\"battery-solar\"\n                vector-effect=\"non-scaling-stroke\"\n              >\n                <animateMotion\n                  dur=\"", "s\"\n                  repeatCount=\"indefinite\"\n                  calcMode=\"linear\"\n                >\n                  <mpath xlink:href=\"#battery-solar\" />\n                </animateMotion>\n              </circle>"], ["<circle\n                r=\"1\"\n                class=\"battery-solar\"\n                vector-effect=\"non-scaling-stroke\"\n              >\n                <animateMotion\n                  dur=\"", "s\"\n                  repeatCount=\"indefinite\"\n                  calcMode=\"linear\"\n                >\n                  <mpath xlink:href=\"#battery-solar\" />\n                </animateMotion>\n              </circle>"])), newDur.solarToBattery) : "") : "";
};
exports.flowSolarToBattery = flowSolarToBattery;
var templateObject_1, templateObject_2;

"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flowBatteryToHome = void 0;
var class_map_js_1 = require("lit/directives/class-map.js");
var showLine_1 = require("@/utils/showLine");
var lit_1 = require("lit");
var styleLine_1 = require("@/utils/styleLine");
var computeIndividualPosition_1 = require("@/utils/computeIndividualPosition");
var checkShouldShowDots_1 = require("@/utils/checkShouldShowDots");
var flowBatteryToHome = function (config, _a) {
    var _b;
    var battery = _a.battery, grid = _a.grid, individual = _a.individual, newDur = _a.newDur;
    return battery.has && (0, showLine_1.showLine)(config, battery.state.toHome) && !((_b = config.entities.home) === null || _b === void 0 ? void 0 : _b.hide)
        ? (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<div\n        class=\"lines ", "\"\n      >\n        <svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" id=\"battery-home-flow\">\n          <path\n            id=\"battery-home\"\n            class=\"battery-home ", "\"\n            d=\"M55,100 v-", " c0,-30 10,-30 30,-30 h20\"\n            vector-effect=\"non-scaling-stroke\"\n          ></path>\n          ", "\n        </svg>\n      </div>"], ["<div\n        class=\"lines ", "\"\n      >\n        <svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" id=\"battery-home-flow\">\n          <path\n            id=\"battery-home\"\n            class=\"battery-home ", "\"\n            d=\"M55,100 v-", " c0,-30 10,-30 30,-30 h20\"\n            vector-effect=\"non-scaling-stroke\"\n          ></path>\n          ", "\n        </svg>\n      </div>"])), (0, class_map_js_1.classMap)({
            high: battery.has || (0, computeIndividualPosition_1.checkHasBottomIndividual)(individual),
            "individual1-individual2": !battery.has && individual.every(function (i) { return i === null || i === void 0 ? void 0 : i.has; }),
            "multi-individual": (0, computeIndividualPosition_1.checkHasRightIndividual)(individual),
        }), (0, styleLine_1.styleLine)(battery.state.toHome || 0, config), grid.has ? 15 : 17, (0, checkShouldShowDots_1.checkShouldShowDots)(config) && battery.state.toHome
            ? (0, lit_1.svg)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<circle\n            r=\"1\"\n            class=\"battery-home\"\n            vector-effect=\"non-scaling-stroke\"\n          >\n            <animateMotion\n              dur=\"", "s\"\n              repeatCount=\"indefinite\"\n              calcMode=\"linear\"\n            >\n              <mpath xlink:href=\"#battery-home\" />\n            </animateMotion>\n          </circle>"], ["<circle\n            r=\"1\"\n            class=\"battery-home\"\n            vector-effect=\"non-scaling-stroke\"\n          >\n            <animateMotion\n              dur=\"", "s\"\n              repeatCount=\"indefinite\"\n              calcMode=\"linear\"\n            >\n              <mpath xlink:href=\"#battery-home\" />\n            </animateMotion>\n          </circle>"])), newDur.batteryToHome) : "") : "";
};
exports.flowBatteryToHome = flowBatteryToHome;
var templateObject_1, templateObject_2;

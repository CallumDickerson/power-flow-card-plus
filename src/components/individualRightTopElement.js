"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.individualRightTopElement = void 0;
var lit_1 = require("lit");
var individualSecondarySpan_1 = require("./spans/individualSecondarySpan");
var computeFlowRate_1 = require("../utils/computeFlowRate");
var showLine_1 = require("../utils/showLine");
var styleLine_1 = require("../utils/styleLine");
var computeIndividualPosition_1 = require("../utils/computeIndividualPosition");
var checkShouldShowDots_1 = require("../utils/checkShouldShowDots");
var individualRightTopElement = function (main, config, _a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var individualObj = _a.individualObj, templatesObj = _a.templatesObj, displayState = _a.displayState, newDur = _a.newDur, battery = _a.battery, individualObjs = _a.individualObjs;
    if (!individualObj)
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<div class=\"spacer\"></div>"], ["<div class=\"spacer\"></div>"])));
    var indexOfIndividual = ((_c = (_b = config === null || config === void 0 ? void 0 : config.entities) === null || _b === void 0 ? void 0 : _b.individual) === null || _c === void 0 ? void 0 : _c.findIndex(function (e) { return e.entity === individualObj.entity; })) || -1;
    if (indexOfIndividual === -1)
        return (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<div class=\"spacer\"></div>"], ["<div class=\"spacer\"></div>"])));
    var duration = newDur.individual[indexOfIndividual] || 1.66;
    var hasBottomRow = !!(battery === null || battery === void 0 ? void 0 : battery.has) || (0, computeIndividualPosition_1.checkHasBottomIndividual)(individualObjs);
    return (0, lit_1.html)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["<div class=\"circle-container individual-top individual-right individual-right-top\">\n    <span class=\"label\">", "</span>\n    <div\n      class=\"circle\"\n      @click=", "\n      @keyDown=", "\n    >\n      ", "\n      ", "\n      ", "\n    </div>\n    ", "\n  </div>"], ["<div class=\"circle-container individual-top individual-right individual-right-top\">\n    <span class=\"label\">", "</span>\n    <div\n      class=\"circle\"\n      @click=", "\n      @keyDown=", "\n    >\n      ", "\n      ", "\n      ", "\n    </div>\n    ", "\n  </div>"])), individualObj.name, function (e) {
        var _a;
        main.openDetails(e, (_a = individualObj === null || individualObj === void 0 ? void 0 : individualObj.field) === null || _a === void 0 ? void 0 : _a.tap_action, individualObj === null || individualObj === void 0 ? void 0 : individualObj.entity);
    }, function (e) {
        var _a;
        if (e.key === "Enter") {
            main.openDetails(e, (_a = individualObj === null || individualObj === void 0 ? void 0 : individualObj.field) === null || _a === void 0 ? void 0 : _a.tap_action, individualObj === null || individualObj === void 0 ? void 0 : individualObj.entity);
        }
    }, (0, individualSecondarySpan_1.individualSecondarySpan)(main.hass, main, config, templatesObj, individualObj, indexOfIndividual, "right-top"), individualObj.icon !== " " ? (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject([" <ha-icon id=\"individual-right-top-icon\" .icon=", " />"], [" <ha-icon id=\"individual-right-top-icon\" .icon=", " />"])), individualObj.icon) : null, ((_d = individualObj === null || individualObj === void 0 ? void 0 : individualObj.field) === null || _d === void 0 ? void 0 : _d.display_zero_state) !== false || (individualObj.state || 0) > ((_e = individualObj.displayZeroTolerance) !== null && _e !== void 0 ? _e : 0)
        ? (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject([" <span class=\"individual-top individual-right-top\">\n            ", "", "\n          </span>"], [" <span class=\"individual-top individual-right-top\">\n            ", "", "\n          </span>"])), (individualObj === null || individualObj === void 0 ? void 0 : individualObj.showDirection)
            ? (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["<ha-icon class=\"small\" .icon=", "></ha-icon>"], ["<ha-icon class=\"small\" .icon=", "></ha-icon>"])), individualObj.invertAnimation ? "mdi:arrow-down" : "mdi:arrow-up") : "", displayState) : "", (0, showLine_1.showLine)(config, individualObj.state || 0) && !((_f = config.entities.home) === null || _f === void 0 ? void 0 : _f.hide)
        ? (0, lit_1.html)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n          <div class=\"right-individual-flow-container\">\n            <svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" class=\"right-individual-flow\">\n              <path\n                id=\"individual-top-right-home\"\n                class=\"", "\"\n                d=\"M", ",0 v15 c0,", " h-20\"\n                vector-effect=\"non-scaling-stroke\"\n              />\n              ", "\n            </svg>\n          </div>\n        "], ["\n          <div class=\"right-individual-flow-container\">\n            <svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" class=\"right-individual-flow\">\n              <path\n                id=\"individual-top-right-home\"\n                class=\"", "\"\n                d=\"M", ",0 v15 c0,", " h-20\"\n                vector-effect=\"non-scaling-stroke\"\n              />\n              ", "\n            </svg>\n          </div>\n        "])), (0, styleLine_1.styleLine)(individualObj.state || 0, config), hasBottomRow ? 45 : 47, hasBottomRow ? "30 -10,30 -30,30" : "35 -10,35 -30,35", (0, checkShouldShowDots_1.checkShouldShowDots)(config) && individualObj.state && individualObj.state >= ((_g = individualObj.displayZeroTolerance) !== null && _g !== void 0 ? _g : 0)
            ? (0, lit_1.svg)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["<circle\n                    r=\"1\"\n                    class=\"individual-top\"\n                    vector-effect=\"non-scaling-stroke\"\n                    >\n\n                    <animateMotion\n                    dur=\"", "s\"\n                    repeatCount=\"indefinite\"\n                    calcMode=\"linear\"\n                    keyPoints=", "\n                    keyTimes=\"0;1\"\n                    >\n                    <mpath xlink:href=\"#individual-top-right-home\" />\n                    </animateMotion>\n                    </circle>"], ["<circle\n                    r=\"1\"\n                    class=\"individual-top\"\n                    vector-effect=\"non-scaling-stroke\"\n                    >\n\n                    <animateMotion\n                    dur=\"", "s\"\n                    repeatCount=\"indefinite\"\n                    calcMode=\"linear\"\n                    keyPoints=", "\n                    keyTimes=\"0;1\"\n                    >\n                    <mpath xlink:href=\"#individual-top-right-home\" />\n                    </animateMotion>\n                    </circle>"])), (0, computeFlowRate_1.computeIndividualFlowRate)((_h = individualObj === null || individualObj === void 0 ? void 0 : individualObj.field) === null || _h === void 0 ? void 0 : _h.calculate_flow_rate, duration), individualObj.invertAnimation ? "0;1" : "1;0") : "") : "");
};
exports.individualRightTopElement = individualRightTopElement;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;

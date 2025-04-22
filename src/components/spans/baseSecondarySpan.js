"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseSecondarySpan = void 0;
var lit_1 = require("lit");
var type_1 = require("@/type");
var baseSecondarySpan = function (_a) {
    var main = _a.main, className = _a.className, template = _a.template, value = _a.value, entityId = _a.entityId, icon = _a.icon, tap_action = _a.tap_action;
    if (value && type_1.offlineStr.includes(value))
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
    if (value || template) {
        return (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<span\n      class=\"secondary-info ", "\"\n      @click=", "\n      @keyDown=", "\n    >\n      ", " ", "</span\n    >"], ["<span\n      class=\"secondary-info ", "\"\n      @click=", "\n      @keyDown=", "\n    >\n      ", " ", "</span\n    >"])), className, function (e) {
            main.openDetails(e, tap_action, entityId);
        }, function (e) {
            if (e.key === "Enter") {
                main.openDetails(e, tap_action, entityId);
            }
        }, icon ? (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<ha-icon class=\"secondary-info small\" .icon=", "></ha-icon>"], ["<ha-icon class=\"secondary-info small\" .icon=", "></ha-icon>"])), icon) : "", template !== null && template !== void 0 ? template : value);
    }
    return (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
};
exports.baseSecondarySpan = baseSecondarySpan;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

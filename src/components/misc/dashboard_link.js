"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardLinkElement = void 0;
var lit_1 = require("lit");
var dashboardLinkElement = function (config, hass) {
    return config.dashboard_link || config.second_dashboard_link
        ? (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        <div class=\"card-actions\">\n          ", "\n          ", "\n        </div>\n      "], ["\n        <div class=\"card-actions\">\n          ", "\n          ", "\n        </div>\n      "])), config.dashboard_link
            ? (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                <a href=", "\n                  ><mwc-button>\n                    ", "\n                  </mwc-button></a\n                >\n              "], ["\n                <a href=", "\n                  ><mwc-button>\n                    ", "\n                  </mwc-button></a\n                >\n              "])), config.dashboard_link, config.dashboard_link_label || hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.go_to_energy_dashboard")) : "", config.second_dashboard_link
            ? (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                <a href=", "\n                  ><mwc-button>\n                    ", "\n                  </mwc-button></a\n                >\n              "], ["\n                <a href=", "\n                  ><mwc-button>\n                    ", "\n                  </mwc-button></a\n                >\n              "])), config.second_dashboard_link, config.second_dashboard_link_label ||
                hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.go_to_energy_dashboard")) : "") : (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
};
exports.dashboardLinkElement = dashboardLinkElement;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerFlowCardPlusEditor = void 0;
/* eslint-disable no-use-before-define */
var lit_1 = require("lit");
var decorators_js_1 = require("lit/decorators.js");
var custom_card_helpers_1 = require("custom-card-helpers");
var superstruct_1 = require("superstruct");
var _schema_all_1 = require("./schema/_schema-all");
var localize_1 = require("../localize/localize");
var get_default_config_1 = require("../utils/get-default-config");
require("./components/individual-devices-editor");
require("./components/link-subpage");
require("./components/subpage-header");
var loadHAForm_1 = require("./utils/loadHAForm");
var grid_1 = require("./schema/grid");
var solar_1 = require("./schema/solar");
var battery_1 = require("./schema/battery");
var fossil_fuel_percentage_1 = require("./schema/fossil_fuel_percentage");
var home_1 = require("./schema/home");
var CONFIG_PAGES = [
    {
        page: "grid",
        icon: "mdi:transmission-tower",
        schema: grid_1.gridSchema,
    },
    {
        page: "solar",
        icon: "mdi:solar-power",
        schema: solar_1.solarSchema,
    },
    {
        page: "battery",
        icon: "mdi:battery-high",
        schema: battery_1.batterySchema,
    },
    {
        page: "fossil_fuel_percentage",
        icon: "mdi:leaf",
        schema: fossil_fuel_percentage_1.nonFossilSchema,
    },
    {
        page: "home",
        icon: "mdi:home",
        schema: home_1.homeSchema,
    },
    {
        page: "individual",
        icon: "mdi:dots-horizontal-circle-outline",
    },
    {
        page: "advanced",
        icon: "mdi:cog",
        schema: _schema_all_1.advancedOptionsSchema,
    },
];
var PowerFlowCardPlusEditor = function () {
    var _classDecorators = [(0, decorators_js_1.customElement)("power-flow-card-plus-editor")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = lit_1.LitElement;
    var _hass_decorators;
    var _hass_initializers = [];
    var _hass_extraInitializers = [];
    var __config_decorators;
    var __config_initializers = [];
    var __config_extraInitializers = [];
    var __configEntities_decorators;
    var __configEntities_initializers = [];
    var __configEntities_extraInitializers = [];
    var __currentConfigPage_decorators;
    var __currentConfigPage_initializers = [];
    var __currentConfigPage_extraInitializers = [];
    var PowerFlowCardPlusEditor = _classThis = /** @class */ (function (_super) {
        __extends(PowerFlowCardPlusEditor_1, _super);
        function PowerFlowCardPlusEditor_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hass = __runInitializers(_this, _hass_initializers, void 0);
            _this._config = (__runInitializers(_this, _hass_extraInitializers), __runInitializers(_this, __config_initializers, void 0));
            _this._configEntities = (__runInitializers(_this, __config_extraInitializers), __runInitializers(_this, __configEntities_initializers, []));
            _this._currentConfigPage = (__runInitializers(_this, __configEntities_extraInitializers), __runInitializers(_this, __currentConfigPage_initializers, null));
            _this._computeLabelCallback = (__runInitializers(_this, __currentConfigPage_extraInitializers), function (schema) {
                return _this.hass.localize("ui.panel.lovelace.editor.card.generic.".concat(schema === null || schema === void 0 ? void 0 : schema.name)) || (0, localize_1.default)("editor.".concat(schema === null || schema === void 0 ? void 0 : schema.name));
            });
            return _this;
        }
        PowerFlowCardPlusEditor_1.prototype.setConfig = function (config) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    (0, superstruct_1.assert)(config, _schema_all_1.cardConfigStruct);
                    this._config = config;
                    return [2 /*return*/];
                });
            });
        };
        PowerFlowCardPlusEditor_1.prototype.connectedCallback = function () {
            _super.prototype.connectedCallback.call(this);
            (0, loadHAForm_1.loadHaForm)();
        };
        PowerFlowCardPlusEditor_1.prototype._editDetailElement = function (pageClicked) {
            this._currentConfigPage = pageClicked;
        };
        PowerFlowCardPlusEditor_1.prototype._goBack = function () {
            this._currentConfigPage = null;
        };
        PowerFlowCardPlusEditor_1.prototype.render = function () {
            var _this = this;
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            if (!this.hass || !this._config) {
                return lit_1.nothing;
            }
            var data = __assign(__assign({}, this._config), { display_zero_lines: {
                    mode: (_b = (_a = this._config.display_zero_lines) === null || _a === void 0 ? void 0 : _a.mode) !== null && _b !== void 0 ? _b : get_default_config_1.defaultValues.displayZeroLines.mode,
                    transparency: (_d = (_c = this._config.display_zero_lines) === null || _c === void 0 ? void 0 : _c.transparency) !== null && _d !== void 0 ? _d : get_default_config_1.defaultValues.displayZeroLines.transparency,
                    grey_color: (_f = (_e = this._config.display_zero_lines) === null || _e === void 0 ? void 0 : _e.grey_color) !== null && _f !== void 0 ? _f : get_default_config_1.defaultValues.displayZeroLines.grey_color,
                } });
            if (this._currentConfigPage !== null) {
                if (this._currentConfigPage === "individual") {
                    return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          <subpage-header @go-back=", " page=", "> </subpage-header>\n          <individual-devices-editor .hass=", " .config=", " @config-changed=", "></individual-devices-editor>\n        "], ["\n          <subpage-header @go-back=", " page=", "> </subpage-header>\n          <individual-devices-editor .hass=", " .config=", " @config-changed=", "></individual-devices-editor>\n        "])), this._goBack, this._currentConfigPage, this.hass, this._config, this._valueChanged);
                }
                var currentPage_1 = this._currentConfigPage;
                var schema = currentPage_1 === "advanced"
                    ? (0, _schema_all_1.advancedOptionsSchema)(localize_1.default, (_h = (_g = this._config.display_zero_lines) === null || _g === void 0 ? void 0 : _g.mode) !== null && _h !== void 0 ? _h : get_default_config_1.defaultValues.displayZeroLines.mode)
                    : (_j = CONFIG_PAGES.find(function (page) { return page.page === currentPage_1; })) === null || _j === void 0 ? void 0 : _j.schema;
                var dataForForm = currentPage_1 === "advanced" ? data : data.entities[currentPage_1];
                return (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <subpage-header @go-back=", " page=", "> </subpage-header>\n        <ha-form\n          .hass=", "\n          .data=", "\n          .schema=", "\n          .computeLabel=", "\n          @value-changed=", "\n        ></ha-form>\n      "], ["\n        <subpage-header @go-back=", " page=", "> </subpage-header>\n        <ha-form\n          .hass=", "\n          .data=", "\n          .schema=", "\n          .computeLabel=", "\n          @value-changed=", "\n        ></ha-form>\n      "])), this._goBack, this._currentConfigPage, this.hass, dataForForm, schema, this._computeLabelCallback, this._valueChanged);
            }
            var renderLinkSubpage = function (page, fallbackIcon) {
                if (fallbackIcon === void 0) { fallbackIcon = "mdi:dots-horizontal-circle-outline"; }
                if (page === null)
                    return (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
                var getIconToUse = function () {
                    var _a, _b;
                    if (page === "individual" || page === "advanced")
                        return fallbackIcon;
                    return ((_b = (_a = _this === null || _this === void 0 ? void 0 : _this._config) === null || _a === void 0 ? void 0 : _a.entities[page]) === null || _b === void 0 ? void 0 : _b.icon) || fallbackIcon;
                };
                var icon = getIconToUse();
                return (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        <link-subpage\n          path=", "\n          header=\"", "\"\n          @open-sub-element-editor=", "\n          icon=", "\n        >\n        </link-subpage>\n      "], ["\n        <link-subpage\n          path=", "\n          header=\"", "\"\n          @open-sub-element-editor=", "\n          icon=", "\n        >\n        </link-subpage>\n      "])), page, (0, localize_1.default)("editor.".concat(page)), function () { return _this._editDetailElement(page); }, icon);
            };
            var renderLinkSubPages = function () {
                return CONFIG_PAGES.map(function (page) { return renderLinkSubpage(page.page, page.icon); });
            };
            return (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      <div class=\"card-config\">\n        <ha-form\n          .hass=", "\n          .data=", "\n          .schema=", "\n          .computeLabel=", "\n          @value-changed=", "\n        ></ha-form>\n        ", "\n      </div>\n    "], ["\n      <div class=\"card-config\">\n        <ha-form\n          .hass=", "\n          .data=", "\n          .schema=", "\n          .computeLabel=", "\n          @value-changed=", "\n        ></ha-form>\n        ", "\n      </div>\n    "])), this.hass, data, _schema_all_1.generalConfigSchema, this._computeLabelCallback, this._valueChanged, renderLinkSubPages());
        };
        PowerFlowCardPlusEditor_1.prototype._valueChanged = function (ev) {
            var _a;
            var config = ev.detail.value || "";
            if (!this._config || !this.hass) {
                return;
            }
            if (this._currentConfigPage !== null && this._currentConfigPage !== "advanced" && this._currentConfigPage !== "individual") {
                config = __assign(__assign({}, this._config), { entities: __assign(__assign({}, this._config.entities), (_a = {}, _a[this._currentConfigPage] = config, _a)) });
            }
            (0, custom_card_helpers_1.fireEvent)(this, "config-changed", { config: config });
        };
        Object.defineProperty(PowerFlowCardPlusEditor_1, "styles", {
            get: function () {
                return (0, lit_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      ha-form {\n        width: 100%;\n      }\n\n      ha-icon-button {\n        align-self: center;\n      }\n\n      .entities-section * {\n        background-color: #f00;\n      }\n\n      .card-config {\n        display: flex;\n        flex-direction: column;\n        gap: 1.5rem;\n        margin-bottom: 10px;\n      }\n\n      .config-header {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n        width: 100%;\n      }\n\n      .config-header.sub-header {\n        margin-top: 24px;\n      }\n\n      ha-icon {\n        padding-bottom: 2px;\n        position: relative;\n        top: -4px;\n        right: 1px;\n      }\n    "], ["\n      ha-form {\n        width: 100%;\n      }\n\n      ha-icon-button {\n        align-self: center;\n      }\n\n      .entities-section * {\n        background-color: #f00;\n      }\n\n      .card-config {\n        display: flex;\n        flex-direction: column;\n        gap: 1.5rem;\n        margin-bottom: 10px;\n      }\n\n      .config-header {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n        width: 100%;\n      }\n\n      .config-header.sub-header {\n        margin-top: 24px;\n      }\n\n      ha-icon {\n        padding-bottom: 2px;\n        position: relative;\n        top: -4px;\n        right: 1px;\n      }\n    "])));
            },
            enumerable: false,
            configurable: true
        });
        return PowerFlowCardPlusEditor_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PowerFlowCardPlusEditor");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _hass_decorators = [(0, decorators_js_1.property)({ attribute: false })];
        __config_decorators = [(0, decorators_js_1.state)()];
        __configEntities_decorators = [(0, decorators_js_1.state)()];
        __currentConfigPage_decorators = [(0, decorators_js_1.state)()];
        __esDecorate(null, null, _hass_decorators, { kind: "field", name: "hass", static: false, private: false, access: { has: function (obj) { return "hass" in obj; }, get: function (obj) { return obj.hass; }, set: function (obj, value) { obj.hass = value; } }, metadata: _metadata }, _hass_initializers, _hass_extraInitializers);
        __esDecorate(null, null, __config_decorators, { kind: "field", name: "_config", static: false, private: false, access: { has: function (obj) { return "_config" in obj; }, get: function (obj) { return obj._config; }, set: function (obj, value) { obj._config = value; } }, metadata: _metadata }, __config_initializers, __config_extraInitializers);
        __esDecorate(null, null, __configEntities_decorators, { kind: "field", name: "_configEntities", static: false, private: false, access: { has: function (obj) { return "_configEntities" in obj; }, get: function (obj) { return obj._configEntities; }, set: function (obj, value) { obj._configEntities = value; } }, metadata: _metadata }, __configEntities_initializers, __configEntities_extraInitializers);
        __esDecorate(null, null, __currentConfigPage_decorators, { kind: "field", name: "_currentConfigPage", static: false, private: false, access: { has: function (obj) { return "_currentConfigPage" in obj; }, get: function (obj) { return obj._currentConfigPage; }, set: function (obj, value) { obj._currentConfigPage = value; } }, metadata: _metadata }, __currentConfigPage_initializers, __currentConfigPage_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PowerFlowCardPlusEditor = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PowerFlowCardPlusEditor = _classThis;
}();
exports.PowerFlowCardPlusEditor = PowerFlowCardPlusEditor;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

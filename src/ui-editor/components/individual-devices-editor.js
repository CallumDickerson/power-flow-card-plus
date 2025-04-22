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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndividualDevicesEditor = void 0;
exports.processEditorEntities = processEditorEntities;
var custom_card_helpers_1 = require("custom-card-helpers");
var lit_1 = require("lit");
var lit_element_1 = require("lit-element");
var _schema_all_1 = require("../schema/_schema-all");
var localize_1 = require("@/localize/localize");
require("./individual-row-editor");
function processEditorEntities(entities) {
    return entities.map(function (entityConf) {
        if (typeof entityConf === "string") {
            return { entity: entityConf };
        }
        return entityConf;
    });
}
var IndividualDevicesEditor = function () {
    var _classDecorators = [(0, lit_element_1.customElement)("individual-devices-editor")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = lit_1.LitElement;
    var _config_decorators;
    var _config_initializers = [];
    var _config_extraInitializers = [];
    var __subElementEditorConfig_decorators;
    var __subElementEditorConfig_initializers = [];
    var __subElementEditorConfig_extraInitializers = [];
    var __configEntities_decorators;
    var __configEntities_initializers = [];
    var __configEntities_extraInitializers = [];
    var IndividualDevicesEditor = _classThis = /** @class */ (function (_super) {
        __extends(IndividualDevicesEditor_1, _super);
        function IndividualDevicesEditor_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.config = __runInitializers(_this, _config_initializers, void 0);
            _this._subElementEditorConfig = (__runInitializers(_this, _config_extraInitializers), __runInitializers(_this, __subElementEditorConfig_initializers, void 0));
            _this._configEntities = (__runInitializers(_this, __subElementEditorConfig_extraInitializers), __runInitializers(_this, __configEntities_initializers, void 0));
            _this._computeLabelCallback = (__runInitializers(_this, __configEntities_extraInitializers), function (schema) {
                return _this.hass.localize("ui.panel.lovelace.editor.card.generic.".concat(schema === null || schema === void 0 ? void 0 : schema.name)) || (0, localize_1.default)("editor.".concat(schema === null || schema === void 0 ? void 0 : schema.name));
            });
            return _this;
        }
        IndividualDevicesEditor_1.prototype.render = function () {
            if (!this.config || !this.hass) {
                return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<div>no config</div>"], ["<div>no config</div>"])));
            }
            this._configEntities = this.config.entities.individual;
            if (this._subElementEditorConfig) {
                return (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <ha-form\n          .hass=", "\n          @value-changed=", "\n          .data=", "\n          .schema=", "\n          .computeLabel=", "\n        ></ha-form>\n      "], ["\n        <ha-form\n          .hass=", "\n          @value-changed=", "\n          .data=", "\n          .schema=", "\n          .computeLabel=", "\n        ></ha-form>\n      "])), this.hass, this._valueChanged, this.config, (0, _schema_all_1.individualDevicesSchema)(this.hass), this._computeLabelCallback);
            }
            return (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      <individual-row-editor\n        .hass=", "\n        .config=", "\n        .entities=", "\n        @open-sub-element-editor=", "\n        @entities-changed=", "\n        style=\"width: 100%;\"\n      ></individual-row-editor>\n    "], ["\n      <individual-row-editor\n        .hass=", "\n        .config=", "\n        .entities=", "\n        @open-sub-element-editor=", "\n        @entities-changed=", "\n        style=\"width: 100%;\"\n      ></individual-row-editor>\n    "])), this.hass, this.config, this._configEntities || [], this._editDetailElement, this._entitiesChanged);
        };
        IndividualDevicesEditor_1.prototype._valueChanged = function (ev) {
            var config = ev.detail.value || "";
            if (!this.config || !this.hass) {
                return;
            }
            (0, custom_card_helpers_1.fireEvent)(this, "config-changed", { config: config });
        };
        IndividualDevicesEditor_1.prototype._entitiesChanged = function (ev) {
            var config = this.config;
            config = __assign(__assign({}, config), { entities: __assign(__assign({}, config.entities), { individual: ev.detail.entities }) });
            this._configEntities = processEditorEntities(config.entities.individual);
            (0, custom_card_helpers_1.fireEvent)(this, "config-changed", { config: config });
        };
        IndividualDevicesEditor_1.prototype._editDetailElement = function (ev) {
            this._subElementEditorConfig = ev.detail.subElementConfig;
        };
        Object.defineProperty(IndividualDevicesEditor_1, "styles", {
            get: function () {
                return (0, lit_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
            },
            enumerable: false,
            configurable: true
        });
        return IndividualDevicesEditor_1;
    }(_classSuper));
    __setFunctionName(_classThis, "IndividualDevicesEditor");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _config_decorators = [(0, lit_element_1.property)({ attribute: false })];
        __subElementEditorConfig_decorators = [(0, lit_element_1.state)()];
        __configEntities_decorators = [(0, lit_element_1.state)()];
        __esDecorate(null, null, _config_decorators, { kind: "field", name: "config", static: false, private: false, access: { has: function (obj) { return "config" in obj; }, get: function (obj) { return obj.config; }, set: function (obj, value) { obj.config = value; } }, metadata: _metadata }, _config_initializers, _config_extraInitializers);
        __esDecorate(null, null, __subElementEditorConfig_decorators, { kind: "field", name: "_subElementEditorConfig", static: false, private: false, access: { has: function (obj) { return "_subElementEditorConfig" in obj; }, get: function (obj) { return obj._subElementEditorConfig; }, set: function (obj, value) { obj._subElementEditorConfig = value; } }, metadata: _metadata }, __subElementEditorConfig_initializers, __subElementEditorConfig_extraInitializers);
        __esDecorate(null, null, __configEntities_decorators, { kind: "field", name: "_configEntities", static: false, private: false, access: { has: function (obj) { return "_configEntities" in obj; }, get: function (obj) { return obj._configEntities; }, set: function (obj, value) { obj._configEntities = value; } }, metadata: _metadata }, __configEntities_initializers, __configEntities_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        IndividualDevicesEditor = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return IndividualDevicesEditor = _classThis;
}();
exports.IndividualDevicesEditor = IndividualDevicesEditor;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

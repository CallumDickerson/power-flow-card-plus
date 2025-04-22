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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndividualRowEditor = void 0;
var js_1 = require("@mdi/js");
var lit_1 = require("lit");
var decorators_js_1 = require("lit/decorators.js");
var repeat_js_1 = require("lit/directives/repeat.js");
var fire_event_1 = require("../utils/fire_event");
var sortable_styles_1 = require("../utils/sortable_styles");
var sortable_ondemand_1 = require("../utils/sortable.ondemand");
var loadHAForm_1 = require("@/ui-editor/utils/loadHAForm");
var individual_1 = require("@/ui-editor/schema/individual");
var localize_1 = require("@/localize/localize");
var IndividualRowEditor = function () {
    var _classDecorators = [(0, decorators_js_1.customElement)("individual-row-editor")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = lit_1.LitElement;
    var _hass_decorators;
    var _hass_initializers = [];
    var _hass_extraInitializers = [];
    var _config_decorators;
    var _config_initializers = [];
    var _config_extraInitializers = [];
    var _entities_decorators;
    var _entities_initializers = [];
    var _entities_extraInitializers = [];
    var _label_decorators;
    var _label_initializers = [];
    var _label_extraInitializers = [];
    var __indexBeingEdited_decorators;
    var __indexBeingEdited_initializers = [];
    var __indexBeingEdited_extraInitializers = [];
    var IndividualRowEditor = _classThis = /** @class */ (function (_super) {
        __extends(IndividualRowEditor_1, _super);
        function IndividualRowEditor_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hass = __runInitializers(_this, _hass_initializers, void 0);
            _this.config = (__runInitializers(_this, _hass_extraInitializers), __runInitializers(_this, _config_initializers, void 0));
            _this.entities = (__runInitializers(_this, _config_extraInitializers), __runInitializers(_this, _entities_initializers, void 0));
            _this.label = (__runInitializers(_this, _entities_extraInitializers), __runInitializers(_this, _label_initializers, void 0));
            _this._indexBeingEdited = (__runInitializers(_this, _label_extraInitializers), __runInitializers(_this, __indexBeingEdited_initializers, -1));
            _this._entityKeys = (__runInitializers(_this, __indexBeingEdited_extraInitializers), new WeakMap());
            _this._computeLabelCallback = function (schema) {
                return _this.hass.localize("ui.panel.lovelace.editor.card.generic.".concat(schema === null || schema === void 0 ? void 0 : schema.name)) || (0, localize_1.default)("editor.".concat(schema === null || schema === void 0 ? void 0 : schema.name));
            };
            return _this;
        }
        IndividualRowEditor_1.prototype.connectedCallback = function () {
            _super.prototype.connectedCallback.call(this);
            void (0, loadHAForm_1.loadHaForm)();
        };
        IndividualRowEditor_1.prototype.disconnectedCallback = function () {
            _super.prototype.disconnectedCallback.call(this);
            this._destroySortable();
        };
        IndividualRowEditor_1.prototype._editRowElement = function (index) {
            this._indexBeingEdited = index;
        };
        IndividualRowEditor_1.prototype._getKey = function (action) {
            if (!this._entityKeys.has(action)) {
                this._entityKeys.set(action, Math.random().toString());
            }
            return this._entityKeys.get(action);
        };
        IndividualRowEditor_1.prototype.render = function () {
            var _this = this;
            if (!this.entities || !this.hass) {
                return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject([" <p>No entities configured.</p> "], [" <p>No entities configured.</p> "])));
            }
            if (this._indexBeingEdited !== -1) {
                return (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <div class=\"individual-header\">\n          <h4>", " / ", " ", "</h4>\n          <ha-icon-button\n            .label=", "\n            .path=", "\n            class=\"remove-icon\"\n            @click=", "\n          ></ha-icon-button>\n        </div>\n        <ha-form\n          .hass=", "\n          .data=", "\n          .schema=", "\n          .computeLabel=", "\n          @value-changed=", "\n        ></ha-form>\n      "], ["\n        <div class=\"individual-header\">\n          <h4>", " / ", " ", "</h4>\n          <ha-icon-button\n            .label=", "\n            .path=", "\n            class=\"remove-icon\"\n            @click=", "\n          ></ha-icon-button>\n        </div>\n        <ha-form\n          .hass=", "\n          .data=", "\n          .schema=", "\n          .computeLabel=", "\n          @value-changed=", "\n        ></ha-form>\n      "])), this._indexBeingEdited + 1, this.entities.length, (0, localize_1.default)("editor.individual"), this.hass.localize("ui.components.entity.entity-picker.clear"), js_1.mdiClose, function () { return (_this._indexBeingEdited = -1); }, this.hass, this.entities[this._indexBeingEdited], individual_1.individualSchema, this._computeLabelCallback, this._configChanged);
            }
            return (0, lit_1.html)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      <div class=\"entities\">\n        ", "\n      </div>\n      <ha-entity-picker class=\"add-entity\" .hass=", " @value-changed=", "></ha-entity-picker>\n    "], ["\n      <div class=\"entities\">\n        ", "\n      </div>\n      <ha-entity-picker class=\"add-entity\" .hass=", " @value-changed=", "></ha-entity-picker>\n    "])), (0, repeat_js_1.repeat)(this.entities, function (entityConf) { return _this._getKey(entityConf); }, function (entityConf, index) { return (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            <div class=\"entity\">\n              <div class=\"handle\">\n                <ha-svg-icon .path=", "></ha-svg-icon>\n              </div>\n              ", "\n              <ha-icon-button\n                .label=", "\n                .path=", "\n                class=\"remove-icon\"\n                .index=", "\n                @click=", "\n              ></ha-icon-button>\n              <ha-icon-button\n                .label=", "\n                .path=", "\n                class=\"edit-icon\"\n                .index=", "\n                @click=", "\n              ></ha-icon-button>\n            </div>\n          "], ["\n            <div class=\"entity\">\n              <div class=\"handle\">\n                <ha-svg-icon .path=", "></ha-svg-icon>\n              </div>\n              ", "\n              <ha-icon-button\n                .label=", "\n                .path=", "\n                class=\"remove-icon\"\n                .index=", "\n                @click=", "\n              ></ha-icon-button>\n              <ha-icon-button\n                .label=", "\n                .path=", "\n                class=\"edit-icon\"\n                .index=", "\n                @click=", "\n              ></ha-icon-button>\n            </div>\n          "])), js_1.mdiDrag, entityConf.type
                ? (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                    <div class=\"special-row\">\n                      <div>\n                        <span> ", " </span>\n                        <span class=\"secondary\">", "</span>\n                      </div>\n                    </div>\n                  "], ["\n                    <div class=\"special-row\">\n                      <div>\n                        <span> ", " </span>\n                        <span class=\"secondary\">", "</span>\n                      </div>\n                    </div>\n                  "])), _this.hass.localize("ui.panel.lovelace.editor.card.entities.entity_row.".concat(entityConf.type)), _this.hass.localize("ui.panel.lovelace.editor.card.entities.edit_special_row")) : (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                    <ha-entity-picker\n                      allow-custom-entity\n                      hideClearIcon\n                      .hass=", "\n                      .value=", "\n                      .index=", "\n                      @value-changed=", "\n                    ></ha-entity-picker>\n                  "], ["\n                    <ha-entity-picker\n                      allow-custom-entity\n                      hideClearIcon\n                      .hass=", "\n                      .value=", "\n                      .index=", "\n                      @value-changed=", "\n                    ></ha-entity-picker>\n                  "])), _this.hass, entityConf.entity, index, _this._valueChanged), _this.hass.localize("ui.components.entity.entity-picker.clear"), js_1.mdiClose, index, _this._removeRow, _this.hass.localize("ui.components.entity.entity-picker.edit"), js_1.mdiPencil, index, function () { return _this._editRowElement(index); }); }), this.hass, this._addEntity);
        };
        IndividualRowEditor_1.prototype._configChanged = function (ev) {
            var newRowConfig = ev.detail.value || "";
            if (!this.config || !this.hass) {
                return;
            }
            if (!Array.isArray(this.config.entities.individual)) {
                this.config.entities.individual = [];
            }
            var individualConfig = __spreadArray([], this.config.entities.individual, true);
            if (!individualConfig)
                return;
            individualConfig[this._indexBeingEdited] = newRowConfig;
            var config = __assign(__assign({}, this.config), { entities: __assign(__assign({}, this.config.entities), { individual: individualConfig }) });
            (0, fire_event_1.fireEvent)(this, "config-changed", { config: config });
        };
        IndividualRowEditor_1.prototype.firstUpdated = function () {
            this._createSortable();
        };
        IndividualRowEditor_1.prototype._createSortable = function () {
            return __awaiter(this, void 0, void 0, function () {
                var Sortable;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, sortable_ondemand_1.loadSortable)()];
                        case 1:
                            Sortable = _a.sent();
                            this._sortable = new Sortable(this.shadowRoot.querySelector(".entities"), {
                                animation: 150,
                                fallbackClass: "sortable-fallback",
                                handle: ".handle",
                                onChoose: function (evt) {
                                    evt.item.placeholder = document.createComment("sort-placeholder");
                                    evt.item.after(evt.item.placeholder);
                                },
                                onEnd: function (evt) {
                                    // put back in original location
                                    if (evt.item.placeholder) {
                                        evt.item.placeholder.replaceWith(evt.item);
                                        delete evt.item.placeholder;
                                    }
                                    _this._rowMoved(evt);
                                },
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        IndividualRowEditor_1.prototype._destroySortable = function () {
            var _a;
            (_a = this._sortable) === null || _a === void 0 ? void 0 : _a.destroy();
            this._sortable = undefined;
        };
        IndividualRowEditor_1.prototype._addEntity = function (ev) {
            return __awaiter(this, void 0, void 0, function () {
                var value, newConfigEntities;
                return __generator(this, function (_a) {
                    value = ev.detail.value;
                    if (value === "") {
                        return [2 /*return*/];
                    }
                    newConfigEntities = this.entities.concat({
                        entity: value,
                    });
                    ev.target.value = "";
                    (0, fire_event_1.fireEvent)(this, "entities-changed", { entities: newConfigEntities });
                    return [2 /*return*/];
                });
            });
        };
        IndividualRowEditor_1.prototype._rowMoved = function (ev) {
            if (ev.oldIndex === ev.newIndex) {
                return;
            }
            var newEntities = this.entities.concat();
            newEntities.splice(ev.newIndex, 0, newEntities.splice(ev.oldIndex, 1)[0]);
            (0, fire_event_1.fireEvent)(this, "entities-changed", { entities: newEntities });
        };
        IndividualRowEditor_1.prototype._removeRow = function (ev) {
            var index = ev.currentTarget.index;
            var newConfigEntities = this.entities.concat();
            newConfigEntities.splice(index, 1);
            (0, fire_event_1.fireEvent)(this, "entities-changed", { entities: newConfigEntities });
        };
        IndividualRowEditor_1.prototype._valueChanged = function (ev) {
            var value = ev.detail.value;
            var index = ev.target.index;
            var newConfigEntities = this.entities.concat();
            if (value === "" || value === undefined) {
                newConfigEntities.splice(index, 1);
            }
            else {
                newConfigEntities[index] = __assign(__assign({}, newConfigEntities[index]), { entity: value });
            }
            (0, fire_event_1.fireEvent)(this, "entities-changed", { entities: newConfigEntities });
        };
        IndividualRowEditor_1.prototype._editRow = function (ev) {
            var index = ev.currentTarget.index;
            (0, fire_event_1.fireEvent)(this, "edit-detail-element", {
                subElementConfig: {
                    index: index,
                    type: "row",
                    elementConfig: this.entities[index],
                },
            });
        };
        Object.defineProperty(IndividualRowEditor_1, "styles", {
            get: function () {
                return [
                    sortable_styles_1.sortableStyles,
                    (0, lit_1.css)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        ha-entity-picker {\n          margin-top: 8px;\n        }\n\n        .individual-header {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          margin-inline: 0.2rem;\n          margin-bottom: 1rem;\n        }\n\n        .add-entity {\n          display: block;\n          margin-left: 31px;\n          margin-right: 71px;\n          margin-inline-start: 31px;\n          margin-inline-end: 71px;\n          direction: var(--direction);\n        }\n        .entity {\n          display: flex;\n          align-items: center;\n        }\n\n        .entity .handle {\n          padding-right: 8px;\n          cursor: move;\n          padding-inline-end: 8px;\n          padding-inline-start: initial;\n          direction: var(--direction);\n        }\n        .entity .handle > * {\n          pointer-events: none;\n        }\n\n        .entity ha-entity-picker {\n          flex-grow: 1;\n        }\n\n        .special-row {\n          height: 60px;\n          font-size: 16px;\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          flex-grow: 1;\n        }\n\n        .special-row div {\n          display: flex;\n          flex-direction: column;\n        }\n\n        .remove-icon,\n        .edit-icon {\n          --mdc-icon-button-size: 36px;\n          color: var(--secondary-text-color);\n        }\n\n        .secondary {\n          font-size: 12px;\n          color: var(--secondary-text-color);\n        }\n      "], ["\n        ha-entity-picker {\n          margin-top: 8px;\n        }\n\n        .individual-header {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          margin-inline: 0.2rem;\n          margin-bottom: 1rem;\n        }\n\n        .add-entity {\n          display: block;\n          margin-left: 31px;\n          margin-right: 71px;\n          margin-inline-start: 31px;\n          margin-inline-end: 71px;\n          direction: var(--direction);\n        }\n        .entity {\n          display: flex;\n          align-items: center;\n        }\n\n        .entity .handle {\n          padding-right: 8px;\n          cursor: move;\n          padding-inline-end: 8px;\n          padding-inline-start: initial;\n          direction: var(--direction);\n        }\n        .entity .handle > * {\n          pointer-events: none;\n        }\n\n        .entity ha-entity-picker {\n          flex-grow: 1;\n        }\n\n        .special-row {\n          height: 60px;\n          font-size: 16px;\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          flex-grow: 1;\n        }\n\n        .special-row div {\n          display: flex;\n          flex-direction: column;\n        }\n\n        .remove-icon,\n        .edit-icon {\n          --mdc-icon-button-size: 36px;\n          color: var(--secondary-text-color);\n        }\n\n        .secondary {\n          font-size: 12px;\n          color: var(--secondary-text-color);\n        }\n      "]))),
                ];
            },
            enumerable: false,
            configurable: true
        });
        return IndividualRowEditor_1;
    }(_classSuper));
    __setFunctionName(_classThis, "IndividualRowEditor");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _hass_decorators = [(0, decorators_js_1.property)({ attribute: false })];
        _config_decorators = [(0, decorators_js_1.property)({ attribute: false })];
        _entities_decorators = [(0, decorators_js_1.property)({ attribute: false })];
        _label_decorators = [(0, decorators_js_1.property)()];
        __indexBeingEdited_decorators = [(0, decorators_js_1.state)()];
        __esDecorate(null, null, _hass_decorators, { kind: "field", name: "hass", static: false, private: false, access: { has: function (obj) { return "hass" in obj; }, get: function (obj) { return obj.hass; }, set: function (obj, value) { obj.hass = value; } }, metadata: _metadata }, _hass_initializers, _hass_extraInitializers);
        __esDecorate(null, null, _config_decorators, { kind: "field", name: "config", static: false, private: false, access: { has: function (obj) { return "config" in obj; }, get: function (obj) { return obj.config; }, set: function (obj, value) { obj.config = value; } }, metadata: _metadata }, _config_initializers, _config_extraInitializers);
        __esDecorate(null, null, _entities_decorators, { kind: "field", name: "entities", static: false, private: false, access: { has: function (obj) { return "entities" in obj; }, get: function (obj) { return obj.entities; }, set: function (obj, value) { obj.entities = value; } }, metadata: _metadata }, _entities_initializers, _entities_extraInitializers);
        __esDecorate(null, null, _label_decorators, { kind: "field", name: "label", static: false, private: false, access: { has: function (obj) { return "label" in obj; }, get: function (obj) { return obj.label; }, set: function (obj, value) { obj.label = value; } }, metadata: _metadata }, _label_initializers, _label_extraInitializers);
        __esDecorate(null, null, __indexBeingEdited_decorators, { kind: "field", name: "_indexBeingEdited", static: false, private: false, access: { has: function (obj) { return "_indexBeingEdited" in obj; }, get: function (obj) { return obj._indexBeingEdited; }, set: function (obj, value) { obj._indexBeingEdited = value; } }, metadata: _metadata }, __indexBeingEdited_initializers, __indexBeingEdited_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        IndividualRowEditor = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return IndividualRowEditor = _classThis;
}();
exports.IndividualRowEditor = IndividualRowEditor;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

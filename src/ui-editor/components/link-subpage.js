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
exports.LinkSubpage = void 0;
var js_1 = require("@mdi/js");
var lit_1 = require("lit");
var lit_element_1 = require("lit-element");
var custom_card_helpers_1 = require("custom-card-helpers");
var LinkSubpage = function () {
    var _classDecorators = [(0, lit_element_1.customElement)("link-subpage")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = lit_1.LitElement;
    var _path_decorators;
    var _path_initializers = [];
    var _path_extraInitializers = [];
    var _outlined_decorators;
    var _outlined_initializers = [];
    var _outlined_extraInitializers = [];
    var _leftChevron_decorators;
    var _leftChevron_initializers = [];
    var _leftChevron_extraInitializers = [];
    var _header_decorators;
    var _header_initializers = [];
    var _header_extraInitializers = [];
    var _icon_decorators;
    var _icon_initializers = [];
    var _icon_extraInitializers = [];
    var _secondary_decorators;
    var _secondary_initializers = [];
    var _secondary_extraInitializers = [];
    var __container_decorators;
    var __container_initializers = [];
    var __container_extraInitializers = [];
    var LinkSubpage = _classThis = /** @class */ (function (_super) {
        __extends(LinkSubpage_1, _super);
        function LinkSubpage_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = __runInitializers(_this, _path_initializers, void 0);
            _this.outlined = (__runInitializers(_this, _path_extraInitializers), __runInitializers(_this, _outlined_initializers, false));
            _this.leftChevron = (__runInitializers(_this, _outlined_extraInitializers), __runInitializers(_this, _leftChevron_initializers, false));
            _this.header = (__runInitializers(_this, _leftChevron_extraInitializers), __runInitializers(_this, _header_initializers, void 0));
            _this.icon = (__runInitializers(_this, _header_extraInitializers), __runInitializers(_this, _icon_initializers, "mdi:format-list-bulleted-type"));
            _this.secondary = (__runInitializers(_this, _icon_extraInitializers), __runInitializers(_this, _secondary_initializers, void 0));
            _this._container = (__runInitializers(_this, _secondary_extraInitializers), __runInitializers(_this, __container_initializers, void 0));
            __runInitializers(_this, __container_extraInitializers);
            return _this;
        }
        LinkSubpage_1.prototype.render = function () {
            return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <div\n        class=\"link-subpage\"\n        @click=", "\n        @keydown=", "\n        @focus=", "\n        @blur=", "\n        role=\"button\"\n      >\n        <ha-icon icon=", " class=\"summary-icon\"></ha-icon>\n        <slot name=\"header\">\n          <div class=\"header\">\n            ", "\n            <slot class=\"secondary\" name=\"secondary\">", "</slot>\n          </div>\n        </slot>\n        <ha-svg-icon .path=", " class=\"summary-icon-right\"></ha-svg-icon>\n      </div>\n    "], ["\n      <div\n        class=\"link-subpage\"\n        @click=", "\n        @keydown=", "\n        @focus=", "\n        @blur=", "\n        role=\"button\"\n      >\n        <ha-icon icon=", " class=\"summary-icon\"></ha-icon>\n        <slot name=\"header\">\n          <div class=\"header\">\n            ", "\n            <slot class=\"secondary\" name=\"secondary\">", "</slot>\n          </div>\n        </slot>\n        <ha-svg-icon .path=", " class=\"summary-icon-right\"></ha-svg-icon>\n      </div>\n    "])), this._openSubElementPage, this._openSubElementPage, this._focusChanged, this._focusChanged, this.icon, this.header, this.secondary, js_1.mdiChevronRight);
        };
        LinkSubpage_1.prototype._focusChanged = function (ev) {
            this.shadowRoot.querySelector(".top").classList.toggle("focused", ev.type === "focus");
        };
        LinkSubpage_1.prototype._openSubElementPage = function () {
            (0, custom_card_helpers_1.fireEvent)(this, "open-sub-element-editor", { open: true });
        };
        Object.defineProperty(LinkSubpage_1, "styles", {
            get: function () {
                return (0, lit_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      :host {\n        display: block;\n      }\n\n      :host([outlined]) {\n        box-shadow: none;\n        border-width: 1px;\n        border-style: solid;\n        border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));\n        border-radius: var(--ha-card-border-radius, 12px);\n      }\n\n      :host([leftchevron]) .summary-icon {\n        margin-left: 0;\n        margin-right: 8px;\n      }\n\n      .link-subpage {\n        width: 100%;\n        display: flex;\n        gap: 1rem;\n        padding: var(--expansion-panel-summary-padding, 0 8px);\n        min-height: 48px;\n        align-items: center;\n        cursor: pointer;\n        overflow: hidden;\n        font-weight: 500;\n        outline: none;\n      }\n\n      .summary-icon {\n        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);\n        direction: var(--direction);\n        color: var(--secondary-text-color);\n      }\n\n      .header,\n      ::slotted([slot=\"header\"]) {\n        flex: 1;\n      }\n\n      .container {\n        padding: var(--expansion-panel-content-padding, 0 8px);\n        overflow: hidden;\n        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);\n        height: 0px;\n      }\n\n      .container.expanded {\n        height: auto;\n      }\n\n      .secondary {\n        display: block;\n        color: var(--secondary-text-color);\n        font-size: 12px;\n      }\n    "], ["\n      :host {\n        display: block;\n      }\n\n      :host([outlined]) {\n        box-shadow: none;\n        border-width: 1px;\n        border-style: solid;\n        border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));\n        border-radius: var(--ha-card-border-radius, 12px);\n      }\n\n      :host([leftchevron]) .summary-icon {\n        margin-left: 0;\n        margin-right: 8px;\n      }\n\n      .link-subpage {\n        width: 100%;\n        display: flex;\n        gap: 1rem;\n        padding: var(--expansion-panel-summary-padding, 0 8px);\n        min-height: 48px;\n        align-items: center;\n        cursor: pointer;\n        overflow: hidden;\n        font-weight: 500;\n        outline: none;\n      }\n\n      .summary-icon {\n        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);\n        direction: var(--direction);\n        color: var(--secondary-text-color);\n      }\n\n      .header,\n      ::slotted([slot=\"header\"]) {\n        flex: 1;\n      }\n\n      .container {\n        padding: var(--expansion-panel-content-padding, 0 8px);\n        overflow: hidden;\n        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);\n        height: 0px;\n      }\n\n      .container.expanded {\n        height: auto;\n      }\n\n      .secondary {\n        display: block;\n        color: var(--secondary-text-color);\n        font-size: 12px;\n      }\n    "])));
            },
            enumerable: false,
            configurable: true
        });
        return LinkSubpage_1;
    }(_classSuper));
    __setFunctionName(_classThis, "LinkSubpage");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _path_decorators = [(0, lit_element_1.property)({ type: String })];
        _outlined_decorators = [(0, lit_element_1.property)({ type: Boolean, reflect: true })];
        _leftChevron_decorators = [(0, lit_element_1.property)({ type: Boolean, reflect: true })];
        _header_decorators = [(0, lit_element_1.property)()];
        _icon_decorators = [(0, lit_element_1.property)({ type: String })];
        _secondary_decorators = [(0, lit_element_1.property)()];
        __container_decorators = [(0, lit_element_1.query)(".container")];
        __esDecorate(null, null, _path_decorators, { kind: "field", name: "path", static: false, private: false, access: { has: function (obj) { return "path" in obj; }, get: function (obj) { return obj.path; }, set: function (obj, value) { obj.path = value; } }, metadata: _metadata }, _path_initializers, _path_extraInitializers);
        __esDecorate(null, null, _outlined_decorators, { kind: "field", name: "outlined", static: false, private: false, access: { has: function (obj) { return "outlined" in obj; }, get: function (obj) { return obj.outlined; }, set: function (obj, value) { obj.outlined = value; } }, metadata: _metadata }, _outlined_initializers, _outlined_extraInitializers);
        __esDecorate(null, null, _leftChevron_decorators, { kind: "field", name: "leftChevron", static: false, private: false, access: { has: function (obj) { return "leftChevron" in obj; }, get: function (obj) { return obj.leftChevron; }, set: function (obj, value) { obj.leftChevron = value; } }, metadata: _metadata }, _leftChevron_initializers, _leftChevron_extraInitializers);
        __esDecorate(null, null, _header_decorators, { kind: "field", name: "header", static: false, private: false, access: { has: function (obj) { return "header" in obj; }, get: function (obj) { return obj.header; }, set: function (obj, value) { obj.header = value; } }, metadata: _metadata }, _header_initializers, _header_extraInitializers);
        __esDecorate(null, null, _icon_decorators, { kind: "field", name: "icon", static: false, private: false, access: { has: function (obj) { return "icon" in obj; }, get: function (obj) { return obj.icon; }, set: function (obj, value) { obj.icon = value; } }, metadata: _metadata }, _icon_initializers, _icon_extraInitializers);
        __esDecorate(null, null, _secondary_decorators, { kind: "field", name: "secondary", static: false, private: false, access: { has: function (obj) { return "secondary" in obj; }, get: function (obj) { return obj.secondary; }, set: function (obj, value) { obj.secondary = value; } }, metadata: _metadata }, _secondary_initializers, _secondary_extraInitializers);
        __esDecorate(null, null, __container_decorators, { kind: "field", name: "_container", static: false, private: false, access: { has: function (obj) { return "_container" in obj; }, get: function (obj) { return obj._container; }, set: function (obj, value) { obj._container = value; } }, metadata: _metadata }, __container_initializers, __container_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LinkSubpage = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LinkSubpage = _classThis;
}();
exports.LinkSubpage = LinkSubpage;
var templateObject_1, templateObject_2;

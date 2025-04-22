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
exports.SubpageHeader = void 0;
var js_1 = require("@mdi/js");
var custom_card_helpers_1 = require("custom-card-helpers");
var lit_1 = require("lit");
var lit_element_1 = require("lit-element");
var localize_1 = require("@/localize/localize");
var SubpageHeader = function () {
    var _classDecorators = [(0, lit_element_1.customElement)("subpage-header")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = lit_1.LitElement;
    var _config_decorators;
    var _config_initializers = [];
    var _config_extraInitializers = [];
    var _page_decorators;
    var _page_initializers = [];
    var _page_extraInitializers = [];
    var SubpageHeader = _classThis = /** @class */ (function (_super) {
        __extends(SubpageHeader_1, _super);
        function SubpageHeader_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.config = __runInitializers(_this, _config_initializers, void 0);
            _this.page = (__runInitializers(_this, _config_extraInitializers), __runInitializers(_this, _page_initializers, void 0));
            __runInitializers(_this, _page_extraInitializers);
            return _this;
        }
        SubpageHeader_1.prototype.render = function () {
            return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <div class=\"header\">\n        <div class=\"back-title\">\n          <ha-icon-button .label=", " .path=", " @click=", "></ha-icon-button>\n          <span>", "</span>\n        </div>\n      </div>\n    "], ["\n      <div class=\"header\">\n        <div class=\"back-title\">\n          <ha-icon-button .label=", " .path=", " @click=", "></ha-icon-button>\n          <span>", "</span>\n        </div>\n      </div>\n    "])), "Go Back", js_1.mdiArrowLeft, this._goBack, (0, localize_1.default)("editor.".concat(this.page)));
        };
        SubpageHeader_1.prototype._goBack = function () {
            (0, custom_card_helpers_1.fireEvent)(this, "go-back");
        };
        Object.defineProperty(SubpageHeader_1, "styles", {
            get: function () {
                return (0, lit_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      .header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-bottom: 1rem;\n      }\n      .back-title {\n        display: flex;\n        align-items: center;\n        font-size: 18px;\n      }\n    "], ["\n      .header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-bottom: 1rem;\n      }\n      .back-title {\n        display: flex;\n        align-items: center;\n        font-size: 18px;\n      }\n    "])));
            },
            enumerable: false,
            configurable: true
        });
        return SubpageHeader_1;
    }(_classSuper));
    __setFunctionName(_classThis, "SubpageHeader");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _config_decorators = [(0, lit_element_1.property)({ attribute: false })];
        _page_decorators = [(0, lit_element_1.property)()];
        __esDecorate(null, null, _config_decorators, { kind: "field", name: "config", static: false, private: false, access: { has: function (obj) { return "config" in obj; }, get: function (obj) { return obj.config; }, set: function (obj, value) { obj.config = value; } }, metadata: _metadata }, _config_initializers, _config_extraInitializers);
        __esDecorate(null, null, _page_decorators, { kind: "field", name: "page", static: false, private: false, access: { has: function (obj) { return "page" in obj; }, get: function (obj) { return obj.page; }, set: function (obj, value) { obj.page = value; } }, metadata: _metadata }, _page_initializers, _page_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SubpageHeader = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SubpageHeader = _classThis;
}();
exports.SubpageHeader = SubpageHeader;
var templateObject_1, templateObject_2;

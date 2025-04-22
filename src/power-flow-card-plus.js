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
exports.PowerFlowCardPlus = void 0;
var lit_1 = require("lit");
var decorators_js_1 = require("lit/decorators.js");
var battery_1 = require("./components/battery");
var flows_1 = require("./components/flows");
var grid_1 = require("./components/grid");
var home_1 = require("./components/home");
var individualLeftBottomElement_1 = require("./components/individualLeftBottomElement");
var individualLeftTopElement_1 = require("./components/individualLeftTopElement");
var individualRightBottomElement_1 = require("./components/individualRightBottomElement");
var individualRightTopElement_1 = require("./components/individualRightTopElement");
var dashboard_link_1 = require("./components/misc/dashboard_link");
var nonFossil_1 = require("./components/nonFossil");
var solar_1 = require("./components/solar");
var handle_action_1 = require("./ha/panels/lovelace/common/handle-action");
var battery_2 = require("./states/raw/battery");
var grid_2 = require("./states/raw/grid");
var home_2 = require("./states/raw/home");
var getIndividualObject_1 = require("./states/raw/individual/getIndividualObject");
var nonFossil_2 = require("./states/raw/nonFossil");
var solar_2 = require("./states/raw/solar");
var base_1 = require("./states/tolerance/base");
var existenceEntity_1 = require("./states/utils/existenceEntity");
var getEntityState_1 = require("./states/utils/getEntityState");
var getEntityStateWatts_1 = require("./states/utils/getEntityStateWatts");
var style_1 = require("./style");
var all_1 = require("./style/all");
var ha_websocket_js_1 = require("./template/ha-websocket.js");
var computeFieldAttributes_1 = require("./utils/computeFieldAttributes");
var computeFlowRate_1 = require("./utils/computeFlowRate");
var computeIndividualPosition_1 = require("./utils/computeIndividualPosition");
var displayValue_1 = require("./utils/displayValue");
var get_default_config_1 = require("./utils/get-default-config");
var register_custom_card_1 = require("./utils/register-custom-card");
var utils_1 = require("./utils/utils");
var circleCircumference = 238.76104;
(0, register_custom_card_1.registerCustomCard)({
    type: "power-flow-card-plus",
    name: "Power Flow Card Plus",
    description: "An extended version of the power flow card with richer options, advanced features and a few small UI enhancements. Inspired by the Energy Dashboard.",
});
var PowerFlowCardPlus = function () {
    var _classDecorators = [(0, decorators_js_1.customElement)("power-flow-card-plus")];
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
    var __templateResults_decorators;
    var __templateResults_initializers = [];
    var __templateResults_extraInitializers = [];
    var __unsubRenderTemplates_decorators;
    var __unsubRenderTemplates_initializers = [];
    var __unsubRenderTemplates_extraInitializers = [];
    var __width_decorators;
    var __width_initializers = [];
    var __width_extraInitializers = [];
    var _batteryGridFlow_decorators;
    var _batteryGridFlow_initializers = [];
    var _batteryGridFlow_extraInitializers = [];
    var _batteryToHomeFlow_decorators;
    var _batteryToHomeFlow_initializers = [];
    var _batteryToHomeFlow_extraInitializers = [];
    var _gridToHomeFlow_decorators;
    var _gridToHomeFlow_initializers = [];
    var _gridToHomeFlow_extraInitializers = [];
    var _solarToBatteryFlow_decorators;
    var _solarToBatteryFlow_initializers = [];
    var _solarToBatteryFlow_extraInitializers = [];
    var _solarToGridFlow_decorators;
    var _solarToGridFlow_initializers = [];
    var _solarToGridFlow_extraInitializers = [];
    var _solarToHomeFlow_decorators;
    var _solarToHomeFlow_initializers = [];
    var _solarToHomeFlow_extraInitializers = [];
    var PowerFlowCardPlus = _classThis = /** @class */ (function (_super) {
        __extends(PowerFlowCardPlus_1, _super);
        function PowerFlowCardPlus_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hass = __runInitializers(_this, _hass_initializers, void 0);
            _this._config = (__runInitializers(_this, _hass_extraInitializers), __runInitializers(_this, __config_initializers, {}));
            _this._templateResults = (__runInitializers(_this, __config_extraInitializers), __runInitializers(_this, __templateResults_initializers, {}));
            _this._unsubRenderTemplates = (__runInitializers(_this, __templateResults_extraInitializers), __runInitializers(_this, __unsubRenderTemplates_initializers, new Map()));
            _this._width = (__runInitializers(_this, __unsubRenderTemplates_extraInitializers), __runInitializers(_this, __width_initializers, 0));
            _this.batteryGridFlow = (__runInitializers(_this, __width_extraInitializers), __runInitializers(_this, _batteryGridFlow_initializers, void 0));
            _this.batteryToHomeFlow = (__runInitializers(_this, _batteryGridFlow_extraInitializers), __runInitializers(_this, _batteryToHomeFlow_initializers, void 0));
            _this.gridToHomeFlow = (__runInitializers(_this, _batteryToHomeFlow_extraInitializers), __runInitializers(_this, _gridToHomeFlow_initializers, void 0));
            _this.solarToBatteryFlow = (__runInitializers(_this, _gridToHomeFlow_extraInitializers), __runInitializers(_this, _solarToBatteryFlow_initializers, void 0));
            _this.solarToGridFlow = (__runInitializers(_this, _solarToBatteryFlow_extraInitializers), __runInitializers(_this, _solarToGridFlow_initializers, void 0));
            _this.solarToHomeFlow = (__runInitializers(_this, _solarToGridFlow_extraInitializers), __runInitializers(_this, _solarToHomeFlow_initializers, void 0));
            _this.previousDur = (__runInitializers(_this, _solarToHomeFlow_extraInitializers), {});
            return _this;
        }
        PowerFlowCardPlus_1.prototype.setConfig = function (config) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            if (config.entities.individual1 || config.entities.individual2) {
                throw new Error("You are using an outdated configuration. Please update your configuration to the latest version.");
            }
            if (!config.entities || (!((_b = (_a = config.entities) === null || _a === void 0 ? void 0 : _a.battery) === null || _b === void 0 ? void 0 : _b.entity) && !((_d = (_c = config.entities) === null || _c === void 0 ? void 0 : _c.grid) === null || _d === void 0 ? void 0 : _d.entity) && !((_f = (_e = config.entities) === null || _e === void 0 ? void 0 : _e.solar) === null || _f === void 0 ? void 0 : _f.entity))) {
                throw new Error("At least one entity for battery, grid or solar must be defined");
            }
            this._config = __assign(__assign({}, config), { kw_decimals: (0, utils_1.coerceNumber)(config.kw_decimals, get_default_config_1.defaultValues.kilowattDecimals), min_flow_rate: (0, utils_1.coerceNumber)(config.min_flow_rate, get_default_config_1.defaultValues.minFlowRate), max_flow_rate: (0, utils_1.coerceNumber)(config.max_flow_rate, get_default_config_1.defaultValues.maxFlowRate), w_decimals: (0, utils_1.coerceNumber)(config.w_decimals, get_default_config_1.defaultValues.wattDecimals), watt_threshold: (0, utils_1.coerceNumber)(config.watt_threshold, get_default_config_1.defaultValues.wattThreshold), max_expected_power: (0, utils_1.coerceNumber)(config.max_expected_power, get_default_config_1.defaultValues.maxExpectedPower), min_expected_power: (0, utils_1.coerceNumber)(config.min_expected_power, get_default_config_1.defaultValues.minExpectedPower), display_zero_lines: {
                    mode: (_h = (_g = config.display_zero_lines) === null || _g === void 0 ? void 0 : _g.mode) !== null && _h !== void 0 ? _h : get_default_config_1.defaultValues.displayZeroLines.mode,
                    transparency: (0, utils_1.coerceNumber)((_j = config.display_zero_lines) === null || _j === void 0 ? void 0 : _j.transparency, get_default_config_1.defaultValues.displayZeroLines.transparency),
                    grey_color: (_l = (_k = config.display_zero_lines) === null || _k === void 0 ? void 0 : _k.grey_color) !== null && _l !== void 0 ? _l : get_default_config_1.defaultValues.displayZeroLines.grey_color,
                } });
        };
        PowerFlowCardPlus_1.prototype.connectedCallback = function () {
            _super.prototype.connectedCallback.call(this);
            this._tryConnectAll();
        };
        PowerFlowCardPlus_1.prototype.disconnectedCallback = function () {
            this._tryDisconnectAll();
        };
        // do not use ui editor for now, as it is not working
        PowerFlowCardPlus_1.getConfigElement = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require("./ui-editor/ui-editor"); })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, document.createElement("power-flow-card-plus-editor")];
                    }
                });
            });
        };
        PowerFlowCardPlus_1.getStubConfig = function (hass) {
            // get available power entities
            return (0, get_default_config_1.getDefaultConfig)(hass);
        };
        PowerFlowCardPlus_1.prototype.getCardSize = function () {
            return 3;
        };
        PowerFlowCardPlus_1.prototype.openDetails = function (event, config, entityId) {
            event.stopPropagation();
            if (!config) {
                if (!entityId || !this._config.clickable_entities)
                    return;
                /* also needs to open details if entity is unavailable, but not if entity doesn't exist is hass states */
                if (!(0, existenceEntity_1.doesEntityExist)(this.hass, entityId))
                    return;
                var e = new CustomEvent("hass-more-info", {
                    composed: true,
                    detail: { entityId: entityId },
                });
                this.dispatchEvent(e);
                return;
            }
            (0, handle_action_1.handleAction)(event.target, this.hass, {
                entity: entityId,
                tap_action: config,
            }, "tap");
        };
        PowerFlowCardPlus_1.prototype.render = function () {
            var _this = this;
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83, _84, _85, _86, _87, _88, _89, _90, _91, _92, _93, _94, _95, _96, _97, _98, _99, _100, _101, _102, _103, _104, _105, _106, _107, _108, _109, _110, _111, _112, _113, _114, _115, _116, _117, _118, _119, _120, _121, _122, _123, _124, _125, _126, _127, _128, _129, _130, _131, _132, _133, _134, _135, _136, _137, _138, _139, _140, _141, _142, _143, _144, _145, _146, _147, _148, _149, _150, _151, _152, _153, _154, _155, _156, _157, _158, _159, _160, _161, _162, _163, _164, _165, _166, _167;
            if (!this._config || !this.hass) {
                return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
            }
            var entities = this._config.entities;
            this.style.setProperty("--clickable-cursor", this._config.clickable_entities ? "pointer" : "default");
            var initialNumericState = null;
            var grid = {
                entity: (_a = entities.grid) === null || _a === void 0 ? void 0 : _a.entity,
                has: ((_b = entities === null || entities === void 0 ? void 0 : entities.grid) === null || _b === void 0 ? void 0 : _b.entity) !== undefined,
                hasReturnToGrid: typeof ((_c = entities.grid) === null || _c === void 0 ? void 0 : _c.entity) === "string" || !!((_e = (_d = entities.grid) === null || _d === void 0 ? void 0 : _d.entity) === null || _e === void 0 ? void 0 : _e.production),
                state: {
                    fromGrid: (0, grid_2.getGridConsumptionState)(this.hass, this._config),
                    toGrid: (0, grid_2.getGridProductionState)(this.hass, this._config),
                    toBattery: initialNumericState,
                    toHome: initialNumericState,
                },
                powerOutage: {
                    has: ((_g = (_f = entities.grid) === null || _f === void 0 ? void 0 : _f.power_outage) === null || _g === void 0 ? void 0 : _g.entity) !== undefined,
                    isOutage: (entities.grid && ((_j = this.hass.states[(_h = entities.grid.power_outage) === null || _h === void 0 ? void 0 : _h.entity]) === null || _j === void 0 ? void 0 : _j.state)) === ((_m = (_l = (_k = entities.grid) === null || _k === void 0 ? void 0 : _k.power_outage) === null || _l === void 0 ? void 0 : _l.state_alert) !== null && _m !== void 0 ? _m : "on"),
                    icon: ((_p = (_o = entities.grid) === null || _o === void 0 ? void 0 : _o.power_outage) === null || _p === void 0 ? void 0 : _p.icon_alert) || "mdi:transmission-tower-off",
                    name: (_s = (_r = (_q = entities.grid) === null || _q === void 0 ? void 0 : _q.power_outage) === null || _r === void 0 ? void 0 : _r.label_alert) !== null && _s !== void 0 ? _s : (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Power<br />Outage"], ["Power<br />Outage"]))),
                    entityGenerator: (_u = (_t = entities.grid) === null || _t === void 0 ? void 0 : _t.power_outage) === null || _u === void 0 ? void 0 : _u.entity_generator,
                },
                icon: (0, computeFieldAttributes_1.computeFieldIcon)(this.hass, entities.grid, "mdi:transmission-tower"),
                name: (0, computeFieldAttributes_1.computeFieldName)(this.hass, entities.grid, this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.grid")),
                mainEntity: typeof ((_v = entities.grid) === null || _v === void 0 ? void 0 : _v.entity) === "object" ? entities.grid.entity.consumption || entities.grid.entity.production : (_w = entities.grid) === null || _w === void 0 ? void 0 : _w.entity,
                color: {
                    fromGrid: (_y = (_x = entities.grid) === null || _x === void 0 ? void 0 : _x.color) === null || _y === void 0 ? void 0 : _y.consumption,
                    toGrid: (_0 = (_z = entities.grid) === null || _z === void 0 ? void 0 : _z.color) === null || _0 === void 0 ? void 0 : _0.production,
                    icon_type: (_1 = entities.grid) === null || _1 === void 0 ? void 0 : _1.color_icon,
                    circle_type: (_2 = entities.grid) === null || _2 === void 0 ? void 0 : _2.color_circle,
                },
                tap_action: (_3 = entities.grid) === null || _3 === void 0 ? void 0 : _3.tap_action,
                secondary: {
                    entity: (_5 = (_4 = entities.grid) === null || _4 === void 0 ? void 0 : _4.secondary_info) === null || _5 === void 0 ? void 0 : _5.entity,
                    decimals: (_7 = (_6 = entities.grid) === null || _6 === void 0 ? void 0 : _6.secondary_info) === null || _7 === void 0 ? void 0 : _7.decimals,
                    template: (_9 = (_8 = entities.grid) === null || _8 === void 0 ? void 0 : _8.secondary_info) === null || _9 === void 0 ? void 0 : _9.template,
                    has: ((_11 = (_10 = entities.grid) === null || _10 === void 0 ? void 0 : _10.secondary_info) === null || _11 === void 0 ? void 0 : _11.entity) !== undefined,
                    state: (0, grid_2.getGridSecondaryState)(this.hass, this._config),
                    icon: (_13 = (_12 = entities.grid) === null || _12 === void 0 ? void 0 : _12.secondary_info) === null || _13 === void 0 ? void 0 : _13.icon,
                    unit: (_15 = (_14 = entities.grid) === null || _14 === void 0 ? void 0 : _14.secondary_info) === null || _15 === void 0 ? void 0 : _15.unit_of_measurement,
                    unit_white_space: (_17 = (_16 = entities.grid) === null || _16 === void 0 ? void 0 : _16.secondary_info) === null || _17 === void 0 ? void 0 : _17.unit_white_space,
                    accept_negative: ((_19 = (_18 = entities.grid) === null || _18 === void 0 ? void 0 : _18.secondary_info) === null || _19 === void 0 ? void 0 : _19.accept_negative) || false,
                    color: {
                        type: (_21 = (_20 = entities.grid) === null || _20 === void 0 ? void 0 : _20.secondary_info) === null || _21 === void 0 ? void 0 : _21.color_value,
                    },
                    tap_action: (_23 = (_22 = entities.grid) === null || _22 === void 0 ? void 0 : _22.secondary_info) === null || _23 === void 0 ? void 0 : _23.tap_action,
                },
            };
            var solar = {
                entity: (_24 = entities.solar) === null || _24 === void 0 ? void 0 : _24.entity,
                has: ((_25 = entities.solar) === null || _25 === void 0 ? void 0 : _25.entity) !== undefined,
                state: {
                    total: (0, solar_2.getSolarState)(this.hass, this._config),
                    toHome: initialNumericState,
                    toGrid: initialNumericState,
                    toBattery: initialNumericState,
                },
                icon: (0, computeFieldAttributes_1.computeFieldIcon)(this.hass, entities.solar, "mdi:solar-power"),
                name: (0, computeFieldAttributes_1.computeFieldName)(this.hass, entities.solar, this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.solar")),
                tap_action: (_26 = entities.solar) === null || _26 === void 0 ? void 0 : _26.tap_action,
                secondary: {
                    entity: (_28 = (_27 = entities.solar) === null || _27 === void 0 ? void 0 : _27.secondary_info) === null || _28 === void 0 ? void 0 : _28.entity,
                    decimals: (_30 = (_29 = entities.solar) === null || _29 === void 0 ? void 0 : _29.secondary_info) === null || _30 === void 0 ? void 0 : _30.decimals,
                    template: (_32 = (_31 = entities.solar) === null || _31 === void 0 ? void 0 : _31.secondary_info) === null || _32 === void 0 ? void 0 : _32.template,
                    has: ((_34 = (_33 = entities.solar) === null || _33 === void 0 ? void 0 : _33.secondary_info) === null || _34 === void 0 ? void 0 : _34.entity) !== undefined,
                    accept_negative: ((_36 = (_35 = entities.solar) === null || _35 === void 0 ? void 0 : _35.secondary_info) === null || _36 === void 0 ? void 0 : _36.accept_negative) || false,
                    state: (0, solar_2.getSolarSecondaryState)(this.hass, this._config),
                    icon: (_38 = (_37 = entities.solar) === null || _37 === void 0 ? void 0 : _37.secondary_info) === null || _38 === void 0 ? void 0 : _38.icon,
                    unit: (_40 = (_39 = entities.solar) === null || _39 === void 0 ? void 0 : _39.secondary_info) === null || _40 === void 0 ? void 0 : _40.unit_of_measurement,
                    unit_white_space: (_42 = (_41 = entities.solar) === null || _41 === void 0 ? void 0 : _41.secondary_info) === null || _42 === void 0 ? void 0 : _42.unit_white_space,
                    tap_action: (_44 = (_43 = entities.solar) === null || _43 === void 0 ? void 0 : _43.secondary_info) === null || _44 === void 0 ? void 0 : _44.tap_action,
                },
            };
            var checkIfHasBattery = function () {
                var _a, _b, _c, _d, _e;
                if (!((_a = entities.battery) === null || _a === void 0 ? void 0 : _a.entity))
                    return false;
                if (typeof ((_b = entities.battery) === null || _b === void 0 ? void 0 : _b.entity) === "object")
                    return ((_c = entities.battery) === null || _c === void 0 ? void 0 : _c.entity.consumption) || ((_d = entities.battery) === null || _d === void 0 ? void 0 : _d.entity.production);
                return ((_e = entities.battery) === null || _e === void 0 ? void 0 : _e.entity) !== undefined;
            };
            var battery = {
                entity: (_45 = entities.battery) === null || _45 === void 0 ? void 0 : _45.entity,
                has: checkIfHasBattery(),
                mainEntity: typeof ((_46 = entities.battery) === null || _46 === void 0 ? void 0 : _46.entity) === "object" ? entities.battery.entity.consumption : (_47 = entities.battery) === null || _47 === void 0 ? void 0 : _47.entity,
                name: (0, computeFieldAttributes_1.computeFieldName)(this.hass, entities.battery, this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.battery")),
                icon: (0, computeFieldAttributes_1.computeFieldIcon)(this.hass, entities.battery, "mdi:battery-high"),
                state_of_charge: {
                    state: (0, battery_2.getBatteryStateOfCharge)(this.hass, this._config),
                    unit: (_49 = (_48 = entities === null || entities === void 0 ? void 0 : entities.battery) === null || _48 === void 0 ? void 0 : _48.state_of_charge_unit) !== null && _49 !== void 0 ? _49 : "%",
                    unit_white_space: (_51 = (_50 = entities === null || entities === void 0 ? void 0 : entities.battery) === null || _50 === void 0 ? void 0 : _50.state_of_charge_unit_white_space) !== null && _51 !== void 0 ? _51 : true,
                    decimals: ((_52 = entities === null || entities === void 0 ? void 0 : entities.battery) === null || _52 === void 0 ? void 0 : _52.state_of_charge_decimals) || 0,
                },
                state: {
                    toBattery: (0, battery_2.getBatteryInState)(this.hass, this._config),
                    fromBattery: (0, battery_2.getBatteryOutState)(this.hass, this._config),
                    toGrid: 0,
                    toHome: 0,
                },
                tap_action: (_53 = entities.battery) === null || _53 === void 0 ? void 0 : _53.tap_action,
                color: {
                    fromBattery: (_55 = (_54 = entities.battery) === null || _54 === void 0 ? void 0 : _54.color) === null || _55 === void 0 ? void 0 : _55.consumption,
                    toBattery: (_57 = (_56 = entities.battery) === null || _56 === void 0 ? void 0 : _56.color) === null || _57 === void 0 ? void 0 : _57.production,
                    icon_type: undefined,
                    circle_type: (_58 = entities.battery) === null || _58 === void 0 ? void 0 : _58.color_circle,
                },
            };
            var home = {
                entity: (_59 = entities.home) === null || _59 === void 0 ? void 0 : _59.entity,
                has: ((_60 = entities === null || entities === void 0 ? void 0 : entities.home) === null || _60 === void 0 ? void 0 : _60.entity) !== undefined,
                state: initialNumericState,
                icon: (0, computeFieldAttributes_1.computeFieldIcon)(this.hass, entities === null || entities === void 0 ? void 0 : entities.home, "mdi:home"),
                name: (0, computeFieldAttributes_1.computeFieldName)(this.hass, entities === null || entities === void 0 ? void 0 : entities.home, this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.home")),
                tap_action: (_61 = entities.home) === null || _61 === void 0 ? void 0 : _61.tap_action,
                secondary: {
                    entity: (_63 = (_62 = entities.home) === null || _62 === void 0 ? void 0 : _62.secondary_info) === null || _63 === void 0 ? void 0 : _63.entity,
                    template: (_65 = (_64 = entities.home) === null || _64 === void 0 ? void 0 : _64.secondary_info) === null || _65 === void 0 ? void 0 : _65.template,
                    has: ((_67 = (_66 = entities.home) === null || _66 === void 0 ? void 0 : _66.secondary_info) === null || _67 === void 0 ? void 0 : _67.entity) !== undefined,
                    state: (0, home_2.getHomeSecondaryState)(this.hass, this._config),
                    accept_negative: ((_69 = (_68 = entities.home) === null || _68 === void 0 ? void 0 : _68.secondary_info) === null || _69 === void 0 ? void 0 : _69.accept_negative) || false,
                    unit: (_71 = (_70 = entities.home) === null || _70 === void 0 ? void 0 : _70.secondary_info) === null || _71 === void 0 ? void 0 : _71.unit_of_measurement,
                    unit_white_space: (_73 = (_72 = entities.home) === null || _72 === void 0 ? void 0 : _72.secondary_info) === null || _73 === void 0 ? void 0 : _73.unit_white_space,
                    icon: (_75 = (_74 = entities.home) === null || _74 === void 0 ? void 0 : _74.secondary_info) === null || _75 === void 0 ? void 0 : _75.icon,
                    decimals: (_77 = (_76 = entities.home) === null || _76 === void 0 ? void 0 : _76.secondary_info) === null || _77 === void 0 ? void 0 : _77.decimals,
                    tap_action: (_79 = (_78 = entities.home) === null || _78 === void 0 ? void 0 : _78.secondary_info) === null || _79 === void 0 ? void 0 : _79.tap_action,
                },
            };
            var individualObjs = ((_80 = entities.individual) === null || _80 === void 0 ? void 0 : _80.map(function (individual) { return (0, getIndividualObject_1.getIndividualObject)(_this.hass, individual); })) || [];
            var nonFossil = {
                entity: (_81 = entities.fossil_fuel_percentage) === null || _81 === void 0 ? void 0 : _81.entity,
                name: (0, computeFieldAttributes_1.computeFieldName)(this.hass, entities.fossil_fuel_percentage, this.hass.localize("card.label.non_fossil_fuel_percentage")),
                icon: (0, computeFieldAttributes_1.computeFieldIcon)(this.hass, entities.fossil_fuel_percentage, "mdi:leaf"),
                has: (0, nonFossil_2.getNonFossilHas)(this.hass, this._config),
                hasPercentage: (0, nonFossil_2.getNonFossilHasPercentage)(this.hass, this._config),
                state: {
                    power: initialNumericState,
                },
                color: (_82 = entities.fossil_fuel_percentage) === null || _82 === void 0 ? void 0 : _82.color,
                color_value: (_83 = entities.fossil_fuel_percentage) === null || _83 === void 0 ? void 0 : _83.color_value,
                tap_action: (_84 = entities.fossil_fuel_percentage) === null || _84 === void 0 ? void 0 : _84.tap_action,
                secondary: {
                    entity: (_86 = (_85 = entities.fossil_fuel_percentage) === null || _85 === void 0 ? void 0 : _85.secondary_info) === null || _86 === void 0 ? void 0 : _86.entity,
                    decimals: (_88 = (_87 = entities.fossil_fuel_percentage) === null || _87 === void 0 ? void 0 : _87.secondary_info) === null || _88 === void 0 ? void 0 : _88.decimals,
                    template: (_90 = (_89 = entities.fossil_fuel_percentage) === null || _89 === void 0 ? void 0 : _89.secondary_info) === null || _90 === void 0 ? void 0 : _90.template,
                    has: ((_92 = (_91 = entities.fossil_fuel_percentage) === null || _91 === void 0 ? void 0 : _91.secondary_info) === null || _92 === void 0 ? void 0 : _92.entity) !== undefined,
                    state: (0, nonFossil_2.getNonFossilSecondaryState)(this.hass, this._config),
                    accept_negative: ((_94 = (_93 = entities.fossil_fuel_percentage) === null || _93 === void 0 ? void 0 : _93.secondary_info) === null || _94 === void 0 ? void 0 : _94.accept_negative) || false,
                    icon: (_96 = (_95 = entities.fossil_fuel_percentage) === null || _95 === void 0 ? void 0 : _95.secondary_info) === null || _96 === void 0 ? void 0 : _96.icon,
                    unit: (_98 = (_97 = entities.fossil_fuel_percentage) === null || _97 === void 0 ? void 0 : _97.secondary_info) === null || _98 === void 0 ? void 0 : _98.unit_of_measurement,
                    unit_white_space: (_100 = (_99 = entities.fossil_fuel_percentage) === null || _99 === void 0 ? void 0 : _99.secondary_info) === null || _100 === void 0 ? void 0 : _100.unit_white_space,
                    color_value: (_102 = (_101 = entities.fossil_fuel_percentage) === null || _101 === void 0 ? void 0 : _101.secondary_info) === null || _102 === void 0 ? void 0 : _102.color_value,
                    tap_action: (_104 = (_103 = entities.fossil_fuel_percentage) === null || _103 === void 0 ? void 0 : _103.secondary_info) === null || _104 === void 0 ? void 0 : _104.tap_action,
                },
            };
            // Reset Values below Display Zero Tolerance
            grid.state.fromGrid = (0, base_1.adjustZeroTolerance)(grid.state.fromGrid, (_105 = entities.grid) === null || _105 === void 0 ? void 0 : _105.display_zero_tolerance);
            grid.state.toGrid = (0, base_1.adjustZeroTolerance)(grid.state.toGrid, (_106 = entities.grid) === null || _106 === void 0 ? void 0 : _106.display_zero_tolerance);
            solar.state.total = (0, base_1.adjustZeroTolerance)(solar.state.total, (_107 = entities.solar) === null || _107 === void 0 ? void 0 : _107.display_zero_tolerance);
            battery.state.fromBattery = (0, base_1.adjustZeroTolerance)(battery.state.fromBattery, (_108 = entities.battery) === null || _108 === void 0 ? void 0 : _108.display_zero_tolerance);
            battery.state.toBattery = (0, base_1.adjustZeroTolerance)(battery.state.toBattery, (_109 = entities.battery) === null || _109 === void 0 ? void 0 : _109.display_zero_tolerance);
            if (grid.state.fromGrid === 0) {
                grid.state.toHome = 0;
                grid.state.toBattery = 0;
            }
            if (solar.state.total === 0) {
                solar.state.toGrid = 0;
                solar.state.toBattery = 0;
                solar.state.toHome = 0;
            }
            if (battery.state.fromBattery === 0) {
                battery.state.toGrid = 0;
                battery.state.toHome = 0;
            }
            if (solar.has) {
                solar.state.toHome = ((_110 = solar.state.total) !== null && _110 !== void 0 ? _110 : 0) - ((_111 = grid.state.toGrid) !== null && _111 !== void 0 ? _111 : 0) - ((_112 = battery.state.toBattery) !== null && _112 !== void 0 ? _112 : 0);
            }
            var largestGridBatteryTolerance = Math.max((_114 = (_113 = entities.grid) === null || _113 === void 0 ? void 0 : _113.display_zero_tolerance) !== null && _114 !== void 0 ? _114 : 0, (_116 = (_115 = entities.battery) === null || _115 === void 0 ? void 0 : _115.display_zero_tolerance) !== null && _116 !== void 0 ? _116 : 0);
            if (solar.state.toHome !== null && solar.state.toHome < 0) {
                // What we returned to the grid and what went in to the battery is more
                // than produced, so we have used grid energy to fill the battery or
                // returned battery energy to the grid
                if (battery.has) {
                    grid.state.toBattery = Math.abs(solar.state.toHome);
                    if (grid.state.toBattery > ((_117 = grid.state.fromGrid) !== null && _117 !== void 0 ? _117 : 0)) {
                        battery.state.toGrid = Math.min(grid.state.toBattery - ((_118 = grid.state.fromGrid) !== null && _118 !== void 0 ? _118 : 0), 0);
                        grid.state.toBattery = grid.state.fromGrid;
                    }
                }
                solar.state.toHome = 0;
            }
            else if (solar.state.toHome !== null && solar.state.toHome > 0) {
                grid.state.toBattery = 0;
            }
            else if (battery.state.toBattery && battery.state.toBattery > 0) {
                grid.state.toBattery = battery.state.toBattery;
            }
            grid.state.toBattery = ((_119 = grid.state.toBattery) !== null && _119 !== void 0 ? _119 : 0) > largestGridBatteryTolerance ? grid.state.toBattery : 0;
            if (battery.has) {
                if (solar.has) {
                    if (!battery.state.toGrid) {
                        battery.state.toGrid = Math.max(0, (grid.state.toGrid || 0) - (solar.state.total || 0) - (battery.state.toBattery || 0) - (grid.state.toBattery || 0));
                    }
                    solar.state.toBattery = battery.state.toBattery - (grid.state.toBattery || 0);
                    if ((_120 = entities.solar) === null || _120 === void 0 ? void 0 : _120.display_zero_tolerance) {
                        if (entities.solar.display_zero_tolerance >= (solar.state.total || 0))
                            solar.state.toBattery = 0;
                    }
                }
                else {
                    battery.state.toGrid = grid.state.toGrid || 0;
                }
                battery.state.toGrid = (battery.state.toGrid || 0) > largestGridBatteryTolerance ? battery.state.toGrid || 0 : 0;
                battery.state.toHome = ((_121 = battery.state.fromBattery) !== null && _121 !== void 0 ? _121 : 0) - ((_122 = battery.state.toGrid) !== null && _122 !== void 0 ? _122 : 0);
            }
            grid.state.toHome = Math.max(grid.state.fromGrid - ((_123 = grid.state.toBattery) !== null && _123 !== void 0 ? _123 : 0), 0);
            if (solar.has && grid.state.toGrid)
                solar.state.toGrid = grid.state.toGrid - ((_124 = battery.state.toGrid) !== null && _124 !== void 0 ? _124 : 0);
            // Handle Power Outage
            if (grid.powerOutage.isOutage) {
                grid.state.fromGrid = grid.powerOutage.entityGenerator ? Math.max((0, getEntityStateWatts_1.getEntityStateWatts)(this.hass, grid.powerOutage.entityGenerator), 0) : 0;
                grid.state.toHome = Math.max(grid.state.fromGrid - ((_125 = grid.state.toBattery) !== null && _125 !== void 0 ? _125 : 0), 0);
                grid.state.toGrid = 0;
                battery.state.toGrid = 0;
                solar.state.toGrid = 0;
                grid.icon = grid.powerOutage.icon;
                nonFossil.has = false;
                nonFossil.hasPercentage = false;
            }
            // Set Initial State for Non Fossil Fuel Percentage
            if (nonFossil.has) {
                var nonFossilFuelDecimal = 1 - ((_127 = (0, getEntityState_1.getEntityState)(this.hass, (_126 = entities.fossil_fuel_percentage) === null || _126 === void 0 ? void 0 : _126.entity)) !== null && _127 !== void 0 ? _127 : 0) / 100;
                nonFossil.state.power = grid.state.toHome * nonFossilFuelDecimal;
            }
            // Calculate Total Consumptions
            var totalIndividualConsumption = (individualObjs === null || individualObjs === void 0 ? void 0 : individualObjs.reduce(function (a, b) { return a + (b.state || 0); }, 0)) || 0;
            var totalHomeConsumption = Math.max(grid.state.toHome + ((_128 = solar.state.toHome) !== null && _128 !== void 0 ? _128 : 0) + ((_129 = battery.state.toHome) !== null && _129 !== void 0 ? _129 : 0), 0);
            // Calculate Circumferences
            var homeBatteryCircumference = battery.state.toHome ? circleCircumference * (battery.state.toHome / totalHomeConsumption) : 0;
            var homeSolarCircumference = solar.state.toHome ? circleCircumference * (solar.state.toHome / totalHomeConsumption) : 0;
            var homeNonFossilCircumference = nonFossil.state.power ? circleCircumference * (nonFossil.state.power / totalHomeConsumption) : 0;
            var homeGridCircumference = circleCircumference *
                ((totalHomeConsumption - ((_130 = nonFossil.state.power) !== null && _130 !== void 0 ? _130 : 0) - ((_131 = battery.state.toHome) !== null && _131 !== void 0 ? _131 : 0) - ((_132 = solar.state.toHome) !== null && _132 !== void 0 ? _132 : 0)) / totalHomeConsumption);
            var homeUsageToDisplay = ((_133 = entities.home) === null || _133 === void 0 ? void 0 : _133.override_state) && entities.home.entity
                ? ((_134 = entities.home) === null || _134 === void 0 ? void 0 : _134.subtract_individual)
                    ? (0, displayValue_1.displayValue)(this.hass, this._config, (0, getEntityStateWatts_1.getEntityStateWatts)(this.hass, entities.home.entity) - totalIndividualConsumption, {
                        unit: (_135 = entities.home) === null || _135 === void 0 ? void 0 : _135.unit_of_measurement,
                        unitWhiteSpace: (_136 = entities.home) === null || _136 === void 0 ? void 0 : _136.unit_white_space,
                        watt_threshold: this._config.watt_threshold,
                    })
                    : (0, displayValue_1.displayValue)(this.hass, this._config, (0, getEntityStateWatts_1.getEntityStateWatts)(this.hass, entities.home.entity), {
                        unit: (_137 = entities.home) === null || _137 === void 0 ? void 0 : _137.unit_of_measurement,
                        unitWhiteSpace: (_138 = entities.home) === null || _138 === void 0 ? void 0 : _138.unit_white_space,
                        watt_threshold: this._config.watt_threshold,
                    })
                : ((_139 = entities.home) === null || _139 === void 0 ? void 0 : _139.subtract_individual)
                    ? (0, displayValue_1.displayValue)(this.hass, this._config, totalHomeConsumption - totalIndividualConsumption || 0, {
                        unit: (_140 = entities.home) === null || _140 === void 0 ? void 0 : _140.unit_of_measurement,
                        unitWhiteSpace: (_141 = entities.home) === null || _141 === void 0 ? void 0 : _141.unit_white_space,
                        watt_threshold: this._config.watt_threshold,
                    })
                    : (0, displayValue_1.displayValue)(this.hass, this._config, totalHomeConsumption, {
                        unit: (_142 = entities.home) === null || _142 === void 0 ? void 0 : _142.unit_of_measurement,
                        unitWhiteSpace: (_143 = entities.home) === null || _143 === void 0 ? void 0 : _143.unit_white_space,
                        watt_threshold: this._config.watt_threshold,
                    });
            var totalLines = grid.state.toHome +
                ((_144 = solar.state.toHome) !== null && _144 !== void 0 ? _144 : 0) +
                ((_145 = solar.state.toGrid) !== null && _145 !== void 0 ? _145 : 0) +
                ((_146 = solar.state.toBattery) !== null && _146 !== void 0 ? _146 : 0) +
                ((_147 = battery.state.toHome) !== null && _147 !== void 0 ? _147 : 0) +
                ((_148 = grid.state.toBattery) !== null && _148 !== void 0 ? _148 : 0) +
                ((_149 = battery.state.toGrid) !== null && _149 !== void 0 ? _149 : 0);
            // Battery SoC
            if (battery.state_of_charge.state === null) {
                battery.icon = "mdi:battery";
            }
            else if (battery.state_of_charge.state < 5) {
                battery.icon = "mdi:battery-outline";
            }
            else if (battery.state_of_charge.state >= 5 && battery.state_of_charge.state < 15) {
                battery.icon = "mdi:battery-10";
            }
            else if (battery.state_of_charge.state >= 15 && battery.state_of_charge.state < 25) {
                battery.icon = "mdi:battery-20";
            }
            else if (battery.state_of_charge.state >= 25 && battery.state_of_charge.state < 35) {
                battery.icon = "mdi:battery-30";
            }
            else if (battery.state_of_charge.state >= 35 && battery.state_of_charge.state < 45) {
                battery.icon = "mdi:battery-40";
            }
            else if (battery.state_of_charge.state >= 45 && battery.state_of_charge.state < 55) {
                battery.icon = "mdi:battery-50";
            }
            else if (battery.state_of_charge.state >= 55 && battery.state_of_charge.state < 65) {
                battery.icon = "mdi:battery-60";
            }
            else if (battery.state_of_charge.state >= 65 && battery.state_of_charge.state < 75) {
                battery.icon = "mdi:battery-70";
            }
            else if (battery.state_of_charge.state >= 75 && battery.state_of_charge.state < 85) {
                battery.icon = "mdi:battery-80";
            }
            else if (battery.state_of_charge.state >= 85 && battery.state_of_charge.state < 95) {
                battery.icon = "mdi:battery-90";
            }
            else if (battery.state_of_charge.state >= 95) {
                battery.icon = "mdi:battery";
            }
            if (((_150 = entities.battery) === null || _150 === void 0 ? void 0 : _150.icon) !== undefined)
                battery.icon = (_151 = entities.battery) === null || _151 === void 0 ? void 0 : _151.icon;
            // Compute durations
            var newDur = {
                batteryGrid: (0, computeFlowRate_1.computeFlowRate)(this._config, (_153 = (_152 = grid.state.toBattery) !== null && _152 !== void 0 ? _152 : battery.state.toGrid) !== null && _153 !== void 0 ? _153 : 0, totalLines),
                batteryToHome: (0, computeFlowRate_1.computeFlowRate)(this._config, (_154 = battery.state.toHome) !== null && _154 !== void 0 ? _154 : 0, totalLines),
                gridToHome: (0, computeFlowRate_1.computeFlowRate)(this._config, grid.state.toHome, totalLines),
                solarToBattery: (0, computeFlowRate_1.computeFlowRate)(this._config, (_155 = solar.state.toBattery) !== null && _155 !== void 0 ? _155 : 0, totalLines),
                solarToGrid: (0, computeFlowRate_1.computeFlowRate)(this._config, (_156 = solar.state.toGrid) !== null && _156 !== void 0 ? _156 : 0, totalLines),
                solarToHome: (0, computeFlowRate_1.computeFlowRate)(this._config, (_157 = solar.state.toHome) !== null && _157 !== void 0 ? _157 : 0, totalLines),
                individual: (individualObjs === null || individualObjs === void 0 ? void 0 : individualObjs.map(function (individual) { var _a; return (0, computeFlowRate_1.computeFlowRate)(_this._config, (_a = individual.state) !== null && _a !== void 0 ? _a : 0, totalIndividualConsumption); })) || [],
                nonFossil: (0, computeFlowRate_1.computeFlowRate)(this._config, (_158 = nonFossil.state.power) !== null && _158 !== void 0 ? _158 : 0, totalLines),
            };
            // Smooth duration changes
            ["batteryGrid", "batteryToHome", "gridToHome", "solarToBattery", "solarToGrid", "solarToHome"].forEach(function (flowName) {
                var flowSVGElement = _this["".concat(flowName, "Flow")];
                if (flowSVGElement && _this.previousDur[flowName] && _this.previousDur[flowName] !== newDur[flowName]) {
                    flowSVGElement.pauseAnimations();
                    flowSVGElement.setCurrentTime(flowSVGElement.getCurrentTime() * (newDur[flowName] / _this.previousDur[flowName]));
                    flowSVGElement.unpauseAnimations();
                }
                _this.previousDur[flowName] = newDur[flowName];
            });
            var homeSources = {
                battery: {
                    value: homeBatteryCircumference,
                    color: "var(--energy-battery-out-color)",
                },
                solar: {
                    value: homeSolarCircumference,
                    color: "var(--energy-solar-color)",
                },
                grid: {
                    value: homeGridCircumference,
                    color: "var(--energy-grid-consumption-color)",
                },
                gridNonFossil: {
                    value: homeNonFossilCircumference,
                    color: "var(--energy-non-fossil-color)",
                },
            };
            var homeLargestSource = Object.keys(homeSources).reduce(function (a, b) { return (homeSources[a].value > homeSources[b].value ? a : b); });
            var getIndividualDisplayState = function (field) {
                if (!field)
                    return "";
                if ((field === null || field === void 0 ? void 0 : field.state) === undefined)
                    return "";
                return (0, displayValue_1.displayValue)(_this.hass, _this._config, field === null || field === void 0 ? void 0 : field.state, {
                    decimals: field === null || field === void 0 ? void 0 : field.decimals,
                    unit: field === null || field === void 0 ? void 0 : field.unit,
                    unitWhiteSpace: field === null || field === void 0 ? void 0 : field.unit_white_space,
                    watt_threshold: _this._config.watt_threshold,
                });
            };
            var individualKeys = ["left-top", "left-bottom", "right-top", "right-bottom"];
            // Templates
            var templatesObj = {
                gridSecondary: (_159 = this._templateResults.gridSecondary) === null || _159 === void 0 ? void 0 : _159.result,
                solarSecondary: (_160 = this._templateResults.solarSecondary) === null || _160 === void 0 ? void 0 : _160.result,
                homeSecondary: (_161 = this._templateResults.homeSecondary) === null || _161 === void 0 ? void 0 : _161.result,
                nonFossilFuelSecondary: (_162 = this._templateResults.nonFossilFuelSecondary) === null || _162 === void 0 ? void 0 : _162.result,
                individual: (individualObjs === null || individualObjs === void 0 ? void 0 : individualObjs.map(function (_, index) { var _a; return (_a = _this._templateResults["".concat(individualKeys[index], "Secondary")]) === null || _a === void 0 ? void 0 : _a.result; })) || [],
            };
            // Styles
            var isCardWideEnough = this._width > 420;
            (0, all_1.allDynamicStyles)(this, {
                grid: grid,
                solar: solar,
                battery: battery,
                display_zero_lines_grey_color: ((_163 = this._config.display_zero_lines) === null || _163 === void 0 ? void 0 : _163.mode) === "grey_out" ? (_164 = this._config.display_zero_lines) === null || _164 === void 0 ? void 0 : _164.grey_color : "",
                display_zero_lines_transparency: ((_165 = this._config.display_zero_lines) === null || _165 === void 0 ? void 0 : _165.mode) === "transparency" ? (_166 = this._config.display_zero_lines) === null || _166 === void 0 ? void 0 : _166.transparency : "",
                entities: entities,
                homeLargestSource: homeLargestSource,
                homeSources: homeSources,
                individual: individualObjs,
                nonFossil: nonFossil,
                isCardWideEnough: isCardWideEnough,
            });
            var sortedIndividualObjects = this._config.sort_individual_devices ? sortIndividualObjects(individualObjs) : individualObjs;
            var individualFieldLeftTop = (0, computeIndividualPosition_1.getTopLeftIndividual)(sortedIndividualObjects);
            var individualFieldLeftBottom = (0, computeIndividualPosition_1.getBottomLeftIndividual)(sortedIndividualObjects);
            var individualFieldRightTop = (0, computeIndividualPosition_1.getTopRightIndividual)(sortedIndividualObjects);
            var individualFieldRightBottom = (0, computeIndividualPosition_1.getBottomRightIndividual)(sortedIndividualObjects);
            return (0, lit_1.html)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n      <ha-card\n        .header=", "\n        class=", "\n        style=", "\n      >\n        <div\n          class=\"card-content ", "\"\n          id=\"power-flow-card-plus\"\n          style=", "\n        >\n          ", "\n          <div class=\"row\">\n            ", "\n            <div class=\"spacer\"></div>\n            ", "\n            ", "\n          </div>\n          ", "\n          ", "\n        </div>\n        ", "\n      </ha-card>\n    "], ["\n      <ha-card\n        .header=", "\n        class=", "\n        style=", "\n      >\n        <div\n          class=\"card-content ", "\"\n          id=\"power-flow-card-plus\"\n          style=", "\n        >\n          ", "\n          <div class=\"row\">\n            ", "\n            <div class=\"spacer\"></div>\n            ", "\n            ", "\n          </div>\n          ", "\n          ", "\n        </div>\n        ", "\n      </ha-card>\n    "])), this._config.title, this._config.full_size ? "full-size" : "", this._config.style_ha_card ? this._config.style_ha_card : "", this._config.full_size ? "full-size" : "", this._config.style_card_content ? this._config.style_card_content : "", solar.has || (individualObjs === null || individualObjs === void 0 ? void 0 : individualObjs.some(function (individual) { return individual === null || individual === void 0 ? void 0 : individual.has; })) || nonFossil.hasPercentage
                ? (0, lit_1.html)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["<div class=\"row\">\n                ", "\n                ", "\n                ", "\n                ", "\n              </div>"], ["<div class=\"row\">\n                ", "\n                ", "\n                ", "\n                ", "\n              </div>"])), (0, nonFossil_1.nonFossilElement)(this, this._config, {
                    entities: entities,
                    grid: grid,
                    newDur: newDur,
                    nonFossil: nonFossil,
                    templatesObj: templatesObj,
                }), solar.has
                    ? (0, solar_1.solarElement)(this, this._config, {
                        entities: entities,
                        solar: solar,
                        templatesObj: templatesObj,
                    })
                    : (individualObjs === null || individualObjs === void 0 ? void 0 : individualObjs.some(function (individual) { return individual === null || individual === void 0 ? void 0 : individual.has; }))
                        ? (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<div class=\"spacer\"></div>"], ["<div class=\"spacer\"></div>"]))) : "", individualFieldLeftTop
                    ? (0, individualLeftTopElement_1.individualLeftTopElement)(this, this._config, {
                        individualObj: individualFieldLeftTop,
                        displayState: getIndividualDisplayState(individualFieldLeftTop),
                        newDur: newDur,
                        templatesObj: templatesObj,
                    })
                    : (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["<div class=\"spacer\"></div>"], ["<div class=\"spacer\"></div>"]))), (0, computeIndividualPosition_1.checkHasRightIndividual)(individualObjs)
                    ? (0, individualRightTopElement_1.individualRightTopElement)(this, this._config, {
                        displayState: getIndividualDisplayState(individualFieldRightTop),
                        individualObj: individualFieldRightTop,
                        newDur: newDur,
                        templatesObj: templatesObj,
                        battery: battery,
                        individualObjs: individualObjs,
                    })
                    : (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])))) : (0, lit_1.html)(templateObject_7 || (templateObject_7 = __makeTemplateObject([""], [""]))), grid.has
                ? (0, grid_1.gridElement)(this, this._config, {
                    entities: entities,
                    grid: grid,
                    templatesObj: templatesObj,
                })
                : (0, lit_1.html)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["<div class=\"spacer\"></div>"], ["<div class=\"spacer\"></div>"]))), !((_167 = entities.home) === null || _167 === void 0 ? void 0 : _167.hide)
                ? (0, home_1.homeElement)(this, this._config, {
                    circleCircumference: circleCircumference,
                    entities: entities,
                    grid: grid,
                    home: home,
                    homeBatteryCircumference: homeBatteryCircumference,
                    homeGridCircumference: homeGridCircumference,
                    homeNonFossilCircumference: homeNonFossilCircumference,
                    homeSolarCircumference: homeSolarCircumference,
                    newDur: newDur,
                    templatesObj: templatesObj,
                    homeUsageToDisplay: homeUsageToDisplay,
                    individual: individualObjs,
                })
                : (0, lit_1.html)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["<div class=\"spacer\"></div>"], ["<div class=\"spacer\"></div>"]))), (0, computeIndividualPosition_1.checkHasRightIndividual)(individualObjs) ? (0, lit_1.html)(templateObject_10 || (templateObject_10 = __makeTemplateObject([" <div class=\"spacer\"></div>"], [" <div class=\"spacer\"></div>"]))) : (0, lit_1.html)(templateObject_11 || (templateObject_11 = __makeTemplateObject([""], [""]))), battery.has || (0, computeIndividualPosition_1.checkHasBottomIndividual)(individualObjs)
                ? (0, lit_1.html)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["<div class=\"row\">\n                <div class=\"spacer\"></div>\n                ", "\n                ", "\n                ", "\n              </div>"], ["<div class=\"row\">\n                <div class=\"spacer\"></div>\n                ", "\n                ", "\n                ", "\n              </div>"])), battery.has ? (0, battery_1.batteryElement)(this, this._config, { battery: battery, entities: entities }) : (0, lit_1.html)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["<div class=\"spacer\"></div>"], ["<div class=\"spacer\"></div>"]))), individualFieldLeftBottom
                    ? (0, individualLeftBottomElement_1.individualLeftBottomElement)(this, this._config, {
                        displayState: getIndividualDisplayState(individualFieldLeftBottom),
                        individualObj: individualFieldLeftBottom,
                        newDur: newDur,
                        templatesObj: templatesObj,
                    })
                    : (0, lit_1.html)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["<div class=\"spacer\"></div>"], ["<div class=\"spacer\"></div>"]))), (0, computeIndividualPosition_1.checkHasRightIndividual)(individualObjs)
                    ? (0, individualRightBottomElement_1.individualRightBottomElement)(this, this._config, {
                        displayState: getIndividualDisplayState(individualFieldRightBottom),
                        individualObj: individualFieldRightBottom,
                        newDur: newDur,
                        templatesObj: templatesObj,
                        battery: battery,
                        individualObjs: individualObjs,
                    })
                    : (0, lit_1.html)(templateObject_14 || (templateObject_14 = __makeTemplateObject([""], [""])))) : (0, lit_1.html)(templateObject_16 || (templateObject_16 = __makeTemplateObject(["<div class=\"spacer\"></div>"], ["<div class=\"spacer\"></div>"]))), (0, flows_1.flowElement)(this._config, {
                battery: battery,
                grid: grid,
                individual: individualObjs,
                newDur: newDur,
                solar: solar,
            }), (0, dashboard_link_1.dashboardLinkElement)(this._config, this.hass));
        };
        PowerFlowCardPlus_1.prototype.updated = function (changedProps) {
            var _a;
            _super.prototype.updated.call(this, changedProps);
            if (!this._config || !this.hass) {
                return;
            }
            var elem = (_a = this === null || this === void 0 ? void 0 : this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("#power-flow-card-plus");
            var widthStr = elem ? getComputedStyle(elem).getPropertyValue("width") : "0px";
            this._width = parseInt(widthStr.replace("px", ""), 10);
            this._tryConnectAll();
        };
        PowerFlowCardPlus_1.prototype._tryConnectAll = function () {
            var _this = this;
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            var entities = this._config.entities;
            var templatesObj = {
                gridSecondary: (_b = (_a = entities.grid) === null || _a === void 0 ? void 0 : _a.secondary_info) === null || _b === void 0 ? void 0 : _b.template,
                solarSecondary: (_d = (_c = entities.solar) === null || _c === void 0 ? void 0 : _c.secondary_info) === null || _d === void 0 ? void 0 : _d.template,
                homeSecondary: (_f = (_e = entities.home) === null || _e === void 0 ? void 0 : _e.secondary_info) === null || _f === void 0 ? void 0 : _f.template,
                individualSecondary: (_g = entities.individual) === null || _g === void 0 ? void 0 : _g.map(function (individual) { var _a; return (_a = individual.secondary_info) === null || _a === void 0 ? void 0 : _a.template; }),
                nonFossilFuelSecondary: (_j = (_h = entities.fossil_fuel_percentage) === null || _h === void 0 ? void 0 : _h.secondary_info) === null || _j === void 0 ? void 0 : _j.template,
            };
            var _loop_1 = function (key, value) {
                if (value) {
                    if (Array.isArray(value)) {
                        var individualKeys_1 = ["left-top", "left-bottom", "right-top", "right-bottom"];
                        value.forEach(function (template, index) {
                            if (template)
                                _this._tryConnect(template, "".concat(individualKeys_1[index], "Secondary"));
                        });
                    }
                    else {
                        this_1._tryConnect(value, key);
                    }
                }
            };
            var this_1 = this;
            for (var _i = 0, _k = Object.entries(templatesObj); _i < _k.length; _i++) {
                var _l = _k[_i], key = _l[0], value = _l[1];
                _loop_1(key, value);
            }
        };
        PowerFlowCardPlus_1.prototype._tryConnect = function (inputTemplate, topic) {
            return __awaiter(this, void 0, void 0, function () {
                var sub, _err_1;
                var _a;
                var _this = this;
                var _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            if (!this.hass || !this._config || ((_b = this._unsubRenderTemplates) === null || _b === void 0 ? void 0 : _b.get(topic)) !== undefined || inputTemplate === "") {
                                return [2 /*return*/];
                            }
                            _e.label = 1;
                        case 1:
                            _e.trys.push([1, 3, , 4]);
                            sub = (0, ha_websocket_js_1.subscribeRenderTemplate)(this.hass.connection, function (result) {
                                _this._templateResults[topic] = result;
                            }, {
                                template: inputTemplate,
                                entity_ids: this._config.entity_id,
                                variables: {
                                    config: this._config,
                                    user: this.hass.user.name,
                                },
                                strict: true,
                            });
                            (_c = this._unsubRenderTemplates) === null || _c === void 0 ? void 0 : _c.set(topic, sub);
                            return [4 /*yield*/, sub];
                        case 2:
                            _e.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            _err_1 = _e.sent();
                            this._templateResults = __assign(__assign({}, this._templateResults), (_a = {}, _a[topic] = {
                                result: inputTemplate,
                                listeners: { all: false, domains: [], entities: [], time: false },
                            }, _a));
                            (_d = this._unsubRenderTemplates) === null || _d === void 0 ? void 0 : _d.delete(topic);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        PowerFlowCardPlus_1.prototype._tryDisconnectAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                var entities, templatesObj, _i, _a, _b, key, value;
                var _c, _d, _e, _f, _g, _h, _j;
                return __generator(this, function (_k) {
                    entities = this._config.entities;
                    templatesObj = {
                        gridSecondary: (_d = (_c = entities.grid) === null || _c === void 0 ? void 0 : _c.secondary_info) === null || _d === void 0 ? void 0 : _d.template,
                        solarSecondary: (_f = (_e = entities.solar) === null || _e === void 0 ? void 0 : _e.secondary_info) === null || _f === void 0 ? void 0 : _f.template,
                        homeSecondary: (_h = (_g = entities.home) === null || _g === void 0 ? void 0 : _g.secondary_info) === null || _h === void 0 ? void 0 : _h.template,
                        individualSecondary: (_j = entities.individual) === null || _j === void 0 ? void 0 : _j.map(function (individual) { var _a; return (_a = individual.secondary_info) === null || _a === void 0 ? void 0 : _a.template; }),
                    };
                    for (_i = 0, _a = Object.entries(templatesObj); _i < _a.length; _i++) {
                        _b = _a[_i], key = _b[0], value = _b[1];
                        if (value) {
                            this._tryDisconnect(key);
                        }
                    }
                    return [2 /*return*/];
                });
            });
        };
        PowerFlowCardPlus_1.prototype._tryDisconnect = function (topic) {
            return __awaiter(this, void 0, void 0, function () {
                var unsubRenderTemplate, unsub, err_1;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            unsubRenderTemplate = (_a = this._unsubRenderTemplates) === null || _a === void 0 ? void 0 : _a.get(topic);
                            if (!unsubRenderTemplate) {
                                return [2 /*return*/];
                            }
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, unsubRenderTemplate];
                        case 2:
                            unsub = _c.sent();
                            unsub();
                            (_b = this._unsubRenderTemplates) === null || _b === void 0 ? void 0 : _b.delete(topic);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _c.sent();
                            if (err_1.code === "not_found" || err_1.code === "template_error") {
                                // If we get here, the connection was probably already closed. Ignore.
                            }
                            else {
                                throw err_1;
                            }
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return PowerFlowCardPlus_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PowerFlowCardPlus");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _hass_decorators = [(0, decorators_js_1.property)({ attribute: false })];
        __config_decorators = [(0, decorators_js_1.state)()];
        __templateResults_decorators = [(0, decorators_js_1.state)()];
        __unsubRenderTemplates_decorators = [(0, decorators_js_1.state)()];
        __width_decorators = [(0, decorators_js_1.state)()];
        _batteryGridFlow_decorators = [(0, decorators_js_1.query)("#battery-grid-flow")];
        _batteryToHomeFlow_decorators = [(0, decorators_js_1.query)("#battery-home-flow")];
        _gridToHomeFlow_decorators = [(0, decorators_js_1.query)("#grid-home-flow")];
        _solarToBatteryFlow_decorators = [(0, decorators_js_1.query)("#solar-battery-flow")];
        _solarToGridFlow_decorators = [(0, decorators_js_1.query)("#solar-grid-flow")];
        _solarToHomeFlow_decorators = [(0, decorators_js_1.query)("#solar-home-flow")];
        __esDecorate(null, null, _hass_decorators, { kind: "field", name: "hass", static: false, private: false, access: { has: function (obj) { return "hass" in obj; }, get: function (obj) { return obj.hass; }, set: function (obj, value) { obj.hass = value; } }, metadata: _metadata }, _hass_initializers, _hass_extraInitializers);
        __esDecorate(null, null, __config_decorators, { kind: "field", name: "_config", static: false, private: false, access: { has: function (obj) { return "_config" in obj; }, get: function (obj) { return obj._config; }, set: function (obj, value) { obj._config = value; } }, metadata: _metadata }, __config_initializers, __config_extraInitializers);
        __esDecorate(null, null, __templateResults_decorators, { kind: "field", name: "_templateResults", static: false, private: false, access: { has: function (obj) { return "_templateResults" in obj; }, get: function (obj) { return obj._templateResults; }, set: function (obj, value) { obj._templateResults = value; } }, metadata: _metadata }, __templateResults_initializers, __templateResults_extraInitializers);
        __esDecorate(null, null, __unsubRenderTemplates_decorators, { kind: "field", name: "_unsubRenderTemplates", static: false, private: false, access: { has: function (obj) { return "_unsubRenderTemplates" in obj; }, get: function (obj) { return obj._unsubRenderTemplates; }, set: function (obj, value) { obj._unsubRenderTemplates = value; } }, metadata: _metadata }, __unsubRenderTemplates_initializers, __unsubRenderTemplates_extraInitializers);
        __esDecorate(null, null, __width_decorators, { kind: "field", name: "_width", static: false, private: false, access: { has: function (obj) { return "_width" in obj; }, get: function (obj) { return obj._width; }, set: function (obj, value) { obj._width = value; } }, metadata: _metadata }, __width_initializers, __width_extraInitializers);
        __esDecorate(null, null, _batteryGridFlow_decorators, { kind: "field", name: "batteryGridFlow", static: false, private: false, access: { has: function (obj) { return "batteryGridFlow" in obj; }, get: function (obj) { return obj.batteryGridFlow; }, set: function (obj, value) { obj.batteryGridFlow = value; } }, metadata: _metadata }, _batteryGridFlow_initializers, _batteryGridFlow_extraInitializers);
        __esDecorate(null, null, _batteryToHomeFlow_decorators, { kind: "field", name: "batteryToHomeFlow", static: false, private: false, access: { has: function (obj) { return "batteryToHomeFlow" in obj; }, get: function (obj) { return obj.batteryToHomeFlow; }, set: function (obj, value) { obj.batteryToHomeFlow = value; } }, metadata: _metadata }, _batteryToHomeFlow_initializers, _batteryToHomeFlow_extraInitializers);
        __esDecorate(null, null, _gridToHomeFlow_decorators, { kind: "field", name: "gridToHomeFlow", static: false, private: false, access: { has: function (obj) { return "gridToHomeFlow" in obj; }, get: function (obj) { return obj.gridToHomeFlow; }, set: function (obj, value) { obj.gridToHomeFlow = value; } }, metadata: _metadata }, _gridToHomeFlow_initializers, _gridToHomeFlow_extraInitializers);
        __esDecorate(null, null, _solarToBatteryFlow_decorators, { kind: "field", name: "solarToBatteryFlow", static: false, private: false, access: { has: function (obj) { return "solarToBatteryFlow" in obj; }, get: function (obj) { return obj.solarToBatteryFlow; }, set: function (obj, value) { obj.solarToBatteryFlow = value; } }, metadata: _metadata }, _solarToBatteryFlow_initializers, _solarToBatteryFlow_extraInitializers);
        __esDecorate(null, null, _solarToGridFlow_decorators, { kind: "field", name: "solarToGridFlow", static: false, private: false, access: { has: function (obj) { return "solarToGridFlow" in obj; }, get: function (obj) { return obj.solarToGridFlow; }, set: function (obj, value) { obj.solarToGridFlow = value; } }, metadata: _metadata }, _solarToGridFlow_initializers, _solarToGridFlow_extraInitializers);
        __esDecorate(null, null, _solarToHomeFlow_decorators, { kind: "field", name: "solarToHomeFlow", static: false, private: false, access: { has: function (obj) { return "solarToHomeFlow" in obj; }, get: function (obj) { return obj.solarToHomeFlow; }, set: function (obj, value) { obj.solarToHomeFlow = value; } }, metadata: _metadata }, _solarToHomeFlow_initializers, _solarToHomeFlow_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PowerFlowCardPlus = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.styles = style_1.styles;
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PowerFlowCardPlus = _classThis;
}();
exports.PowerFlowCardPlus = PowerFlowCardPlus;
function sortIndividualObjects(individualObjs) {
    var sorted = __spreadArray([], individualObjs, true);
    sorted
        .sort(function (a, b) {
        return (a.state || 0) - (b.state || 0);
    })
        .reverse();
    return sorted;
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultValues = void 0;
exports.getDefaultConfig = getDefaultConfig;
var mutliEntity_1 = require("../states/utils/mutliEntity");
exports.defaultValues = {
    maxFlowRate: 6,
    minFlowRate: 0.75,
    wattDecimals: 0,
    kilowattDecimals: 1,
    minExpectedPower: 0.01,
    maxExpectedPower: 2000,
    wattThreshold: 1000,
    transparencyZeroLines: 0,
    displayZeroLines: {
        mode: "show",
        transparency: 50,
        grey_color: [189, 189, 189],
    },
};
function getDefaultConfig(hass) {
    function checkStrings(entiyId, testStrings) {
        var firstId = (0, mutliEntity_1.getFirstEntityName)(entiyId);
        var friendlyName = hass.states[firstId].attributes.friendly_name;
        return testStrings.some(function (str) { return firstId.includes(str) || (friendlyName === null || friendlyName === void 0 ? void 0 : friendlyName.includes(str)); });
    }
    var powerEntities = Object.keys(hass.states).filter(function (entityId) {
        var stateObj = hass.states[(0, mutliEntity_1.getFirstEntityName)(entityId)];
        var isAvailable = (stateObj.state && stateObj.attributes && stateObj.attributes.device_class === "power") || stateObj.entity_id.includes("power");
        return isAvailable;
    });
    var gridPowerTestString = ["grid", "utility", "net", "meter"];
    var solarTests = ["solar", "pv", "photovoltaic", "inverter"];
    var batteryTests = ["battery"];
    var batteryPercentTests = ["battery_percent", "battery_level", "state_of_charge", "soc", "percentage"];
    var firstGridPowerEntity = powerEntities.filter(function (entityId) { return checkStrings(entityId, gridPowerTestString); })[0];
    var firstSolarPowerEntity = powerEntities.filter(function (entityId) { return checkStrings(entityId, solarTests); })[0];
    var firstBatteryPowerEntity = powerEntities.filter(function (entityId) { return checkStrings(entityId, batteryTests); })[0];
    var percentageEntities = Object.keys(hass.states).filter(function (entityId) {
        var stateObj = hass.states[entityId];
        var isAvailable = stateObj && stateObj.state && stateObj.attributes && stateObj.attributes.unit_of_measurement === "%";
        return isAvailable;
    });
    var firstBatteryPercentageEntity = percentageEntities.filter(function (entityId) { return checkStrings(entityId, batteryPercentTests); })[0];
    return {
        entities: {
            battery: {
                entity: firstBatteryPowerEntity !== null && firstBatteryPowerEntity !== void 0 ? firstBatteryPowerEntity : "",
                state_of_charge: firstBatteryPercentageEntity !== null && firstBatteryPercentageEntity !== void 0 ? firstBatteryPercentageEntity : "",
            },
            grid: firstGridPowerEntity ? { entity: firstGridPowerEntity } : undefined,
            solar: firstSolarPowerEntity ? { entity: firstSolarPowerEntity, display_zero_state: true } : undefined,
        },
        clickable_entities: true,
        display_zero_lines: true,
        use_new_flow_rate_model: true,
        w_decimals: exports.defaultValues.wattDecimals,
        kw_decimals: exports.defaultValues.kilowattDecimals,
        min_flow_rate: exports.defaultValues.minFlowRate,
        max_flow_rate: exports.defaultValues.maxFlowRate,
        max_expected_power: exports.defaultValues.maxExpectedPower,
        min_expected_power: exports.defaultValues.minExpectedPower,
        watt_threshold: exports.defaultValues.wattThreshold,
        transparency_zero_lines: exports.defaultValues.transparencyZeroLines,
        sort_individual_devices: false,
    };
}

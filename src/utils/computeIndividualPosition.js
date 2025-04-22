"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHasBottomIndividual = exports.checkHasRightIndividual = exports.getBottomRightIndividual = exports.getTopRightIndividual = exports.getBottomLeftIndividual = exports.getTopLeftIndividual = void 0;
var filterUnusedIndividualObjs = function (individualObjs) {
    var cloneIndividualObjs = JSON.parse(JSON.stringify(individualObjs));
    var individualObjsWithHas = cloneIndividualObjs.filter(function (i) { return i === null || i === void 0 ? void 0 : i.has; });
    return individualObjsWithHas;
};
var getIndividualObjSortPowerMode = function (individualObjs, index) {
    var _a;
    var filteredIndividualObjs = filterUnusedIndividualObjs(individualObjs);
    return (_a = filteredIndividualObjs === null || filteredIndividualObjs === void 0 ? void 0 : filteredIndividualObjs[index]) !== null && _a !== void 0 ? _a : undefined;
};
var getTopLeftIndividual = function (individualObjs) {
    return getIndividualObjSortPowerMode(individualObjs, 0);
};
exports.getTopLeftIndividual = getTopLeftIndividual;
var getBottomLeftIndividual = function (individualObjs) {
    return getIndividualObjSortPowerMode(individualObjs, 1);
};
exports.getBottomLeftIndividual = getBottomLeftIndividual;
var getTopRightIndividual = function (individualObjs) {
    return getIndividualObjSortPowerMode(individualObjs, 2);
};
exports.getTopRightIndividual = getTopRightIndividual;
var getBottomRightIndividual = function (individualObjs) {
    return getIndividualObjSortPowerMode(individualObjs, 3);
};
exports.getBottomRightIndividual = getBottomRightIndividual;
var checkHasRightIndividual = function (individualObjs) {
    return !!(0, exports.getTopRightIndividual)(individualObjs) || !!(0, exports.getBottomRightIndividual)(individualObjs);
};
exports.checkHasRightIndividual = checkHasRightIndividual;
var checkHasBottomIndividual = function (individualObjs) {
    return !!(0, exports.getBottomLeftIndividual)(individualObjs) || !!(0, exports.getBottomRightIndividual)(individualObjs);
};
exports.checkHasBottomIndividual = checkHasBottomIndividual;

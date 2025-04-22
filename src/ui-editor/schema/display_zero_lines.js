"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayZeroLinesSchema = void 0;
var memoize_one_1 = require("memoize-one");
var greyColorSchema = {
    name: "grey_color",
    selector: { color_rgb: {} },
};
var transparencySchema = {
    name: "transparency",
    selector: {
        number: {
            min: 0,
            max: 100,
            step: 1,
            mode: "box",
        },
    },
};
var gridCustomSchema = {
    name: "",
    type: "grid",
    column_min_width: "200px",
    schema: [transparencySchema, greyColorSchema],
};
var displayZeroLinesOptionsSchema = function (mode) {
    switch (mode) {
        case "grey_out":
            return greyColorSchema;
        case "transparency":
            return transparencySchema;
        case "custom":
            return gridCustomSchema;
        default:
            return [];
    }
};
exports.displayZeroLinesSchema = (0, memoize_one_1.default)(function (localize, mode) { return [
    {
        name: "display_zero_lines",
        type: "grid",
        column_min_width: "400px",
        schema: [
            {
                name: "mode",
                selector: {
                    select: {
                        mode: "dropdown",
                        options: [
                            {
                                value: "show",
                                label: localize("editor.show"),
                            },
                            {
                                value: "hide",
                                label: localize("editor.hide"),
                            },
                            {
                                value: "transparency",
                                label: localize("editor.transparency"),
                            },
                            {
                                value: "grey_out",
                                label: localize("editor.grey_out"),
                            },
                            {
                                value: "custom",
                                label: localize("editor.custom"),
                            },
                        ],
                    },
                },
            },
            displayZeroLinesOptionsSchema(mode),
        ],
    },
]; });

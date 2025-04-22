"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCustomlocalize = setupCustomlocalize;
var cs = require("./languages/cs.json");
var en = require("./languages/en.json");
var de = require("./languages/de.json");
var dk = require("./languages/dk.json");
var pt = require("./languages/pt-PT.json");
var ptBR = require("./languages/pt-BR.json");
var es = require("./languages/es.json");
var nl = require("./languages/nl.json");
var it = require("./languages/it.json");
var fr = require("./languages/fr.json");
var ru = require("./languages/ru.json");
var fi = require("./languages/fi.json");
var pl = require("./languages/pl.json");
var sk = require("./languages/sk.json");
var sv = require("./languages/sv.json");
var languages = {
    cs: cs,
    en: en,
    de: de,
    dk: dk,
    pt: pt,
    pt_BR: ptBR,
    es: es,
    nl: nl,
    it: it,
    fr: fr,
    ru: ru,
    fi: fi,
    pl: pl,
    sk: sk,
    sv: sv,
};
var defaultLang = "en";
function getTranslatedString(key, lang) {
    try {
        return key.split(".").reduce(function (o, i) { return o[i]; }, languages[lang]);
    }
    catch (_) {
        return undefined;
    }
}
function setupCustomlocalize(key) {
    var lang = (localStorage.getItem("selectedLanguage") || "en").replace(/['"]+/g, "").replace("-", "_");
    var translated = getTranslatedString(key, lang);
    if (!translated)
        translated = getTranslatedString(key, defaultLang);
    return translated !== null && translated !== void 0 ? translated : key;
}
exports.default = setupCustomlocalize;

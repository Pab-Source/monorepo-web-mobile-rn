"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
var react_1 = __importDefault(require("react"));
var lib_web_components_1 = require("@pab-source/lib-web-components");
var lib_shared_themes_1 = require("@pab-source/lib-shared-themes");
var Login = function (_a) {
    var title = _a.title;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("pre", null, JSON.stringify(lib_shared_themes_1.theme, null, 2)),
        react_1.default.createElement("h1", null, title),
        react_1.default.createElement(lib_web_components_1.Button, null)));
};
exports.Login = Login;
//# sourceMappingURL=Login.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rippleEffectMixin = exports.buttonBaseMixin = exports.createCSSFromColorType = void 0;

var createCSSFromColorType = function createCSSFromColorType(base, hovered, activated, text) {
  var border = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  return "\n        color: ".concat(text, ";\n        border: 1px solid ").concat(border || base, ";\n        background-color: ").concat(base, ";\n        &:hover {\n            background-color: ").concat(hovered, ";\n            border-color: ").concat(border || hovered, ";\n            /* box-shadow */\n        }\n        &:active {\n            background-color: ").concat(activated, ";\n            border-color: ").concat(border || activated, ";\n            box-shadow: none;\n            outline: none;\n        }\n        &:focus {\n            box-shadow: none;\n            outline: none;\n        }\n    ");
};

exports.createCSSFromColorType = createCSSFromColorType;
var buttonBaseMixin = "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-style: none;\n    padding: 0;\n    cursor: pointer;\n    box-shadow: none;\n    outline: none;\n";
exports.buttonBaseMixin = buttonBaseMixin;

var rippleEffectMixin = function rippleEffectMixin(_ref) {
  var theme = _ref.theme;
  return "\n    position: relative;\n    overflow: hidden;\n    transform: translate3d(0, 0, 0);\n    transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;\n\n    &:after {\n        content: '';\n        display: block;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        pointer-events: none;\n        background-image: radial-gradient(\n            circle,\n            ".concat(theme.colors.grayScale.S0, " 10%,\n            transparent 10.01%\n        );\n        background-repeat: no-repeat;\n        background-position: 50%;\n        transform: scale(10, 10);\n        opacity: 0;\n        transition: transform 0.2s, opacity 1s;\n    }\n    &:active:after {\n        transform: scale(0, 0);\n        opacity: 0.3;\n        transition: 0s;\n    }\n");
};

exports.rippleEffectMixin = rippleEffectMixin;
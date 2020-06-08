"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

var React = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../modules/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    height: 100%;\n    font-size: 14px;\n    padding: 8px 12px;\n    color: ", ";\n    max-width: 280px;\n    word-break: break-all;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-flex;\n    align-items: center;\n    background: ", ";\n    border-radius: 6px;\n    filter: drop-shadow(", ");\n    position: relative;\n    ", ": 6px;\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Component = React.memo(function (_ref) {
  var text = _ref.text,
      direction = _ref.direction,
      props = _objectWithoutProperties(_ref, ["text", "direction"]);

  return /*#__PURE__*/React.createElement(Outer, _extends({
    "data-test": "tool-tip"
  }, props, {
    direction: direction
  }), /*#__PURE__*/React.createElement(Text, null, text));
});
exports.Component = Component;
Component.displayName = 'Tooltip';

/**
 * Styles
 */
var Outer = _theme.default.div(_templateObject(), function (props) {
  return props.theme.colors.grayScale.S5;
}, function (props) {
  return props.theme.shadows.dropShadow.L5;
}, function (props) {
  return props.direction;
}, function (props) {
  return props.direction === 'top' && "\n            &::before {\n                content: '';\n                position: absolute;\n                right: 0;\n                top: -6px;\n                left: 0;\n                width: 0;\n                height: 0;\n                margin: auto;\n\n                border-right: 6px solid transparent;\n                border-bottom: 6px solid ".concat(props.theme.colors.grayScale.S5, ";\n                border-left: 6px solid transparent;\n            }\n        ");
}, function (props) {
  return props.direction === 'right' && "\n            &::before {\n                content: '';\n                position: absolute;\n                right: 0;\n                width: 0;\n                height: 0;\n                margin-right: -6px;\n        \n                border-left: 6px solid ".concat(props.theme.colors.grayScale.S5, ";\n                border-top: 6px solid transparent;\n                border-bottom: 6px solid transparent;\n            }\n        ");
}, function (props) {
  return props.direction === 'bottom' && "\n            &::before {\n                content: '';\n                position: absolute;\n                right: 0;\n                bottom: -6px;\n                left: 0;\n                width: 0;\n                height: 0;\n                margin: auto;\n        \n                border-top: 6px solid ".concat(props.theme.colors.grayScale.S5, ";\n                border-right: 6px solid transparent;\n                border-left: 6px solid transparent;\n            }\n        ");
}, function (props) {
  return props.direction === 'left' && "\n            &::before {\n                content: '';\n                position: absolute;\n                width: 0;\n                height: 0;\n                margin-left: -6px;\n        \n                border-right: 6px solid ".concat(props.theme.colors.grayScale.S5, ";\n                border-top: 6px solid transparent;\n                border-bottom: 6px solid transparent;\n            }\n        ");
});

var Text = _theme.default.span(_templateObject2(), function (props) {
  return props.theme.colors.text.default;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

var React = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../modules/theme"));

var IconFiles = _interopRequireWildcard(require("../../lib/iconFiles"));

var Icon = _interopRequireWildcard(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    height: 100%;\n    font-size: 14px;\n    padding-left: 4px;\n    color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 24px;\n    width: 24px;\n\n    & #fill {\n        fill: ", ";\n        &.disabled {\n            fill: ", ";\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-flex;\n    align-items: center;\n    cursor: pointer;\n"]);

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
      indeterminate = _ref.indeterminate,
      checked = _ref.checked,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ["text", "indeterminate", "checked", "disabled"]);

  if (disabled) {
    return /*#__PURE__*/React.createElement(Outer, _extends({
      tabIndex: 1,
      "data-test": "disabled-box"
    }, props), /*#__PURE__*/React.createElement(CheckIcon, {
      svg: IconFiles.icons.CheckBoxDisabled,
      size: "24px"
    }), /*#__PURE__*/React.createElement(Text, null, text));
  } // ON の方を優先にする


  if (checked) {
    return /*#__PURE__*/React.createElement(Outer, _extends({
      tabIndex: 1,
      "data-test": "checked-box"
    }, props), /*#__PURE__*/React.createElement(CheckIcon, {
      svg: IconFiles.icons.CheckBoxOn,
      size: "24px"
    }), /*#__PURE__*/React.createElement(Text, null, text));
  }

  if (indeterminate) {
    return /*#__PURE__*/React.createElement(Outer, _extends({
      tabIndex: 1,
      "data-test": "indeterminate-box"
    }, props), /*#__PURE__*/React.createElement(CheckIcon, {
      svg: IconFiles.icons.CheckBoxAll,
      size: "24px"
    }), /*#__PURE__*/React.createElement(Text, null, text));
  }

  return /*#__PURE__*/React.createElement(Outer, _extends({
    tabIndex: 1,
    "data-test": "nocheck-box"
  }, props), /*#__PURE__*/React.createElement(CheckIcon, {
    svg: IconFiles.icons.CheckBoxOff,
    size: "24px"
  }), /*#__PURE__*/React.createElement(Text, null, text));
});
/**
 * Styles
 */

exports.Component = Component;

var Outer = _theme.default.div(_templateObject());

var CheckIcon = (0, _theme.default)(Icon.Component)(_templateObject2(), function (props) {
  return props.theme.colors.primary.default;
}, function (props) {
  return props.theme.colors.grayScale.S20;
});

var Text = _theme.default.span(_templateObject3(), function (props) {
  return props.theme.colors.text;
});
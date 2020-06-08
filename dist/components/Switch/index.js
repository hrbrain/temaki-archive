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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    line-height: 24px;\n    max-width: 112px;\n    white-space: nowrap;\n    overflow: hidden;\n    font-size: 14px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    left: 0;\n    margin: 4px;\n    width: 16px;\n    height: 16px;\n    border-radius: 8px;\n    background: ", ";\n    transition: 0.2s;\n    &.activeSwitch {\n        left: 22px;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 8px;\n    position: relative;\n    width: 46px;\n    height: 24px;\n    border-radius: 12px;\n    cursor: pointer;\n    background: ", ";\n    transition: 0.2s;\n    &.activeOuter {\n        background: ", ";\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Component = React.memo(function (_ref) {
  var onClick = _ref.onClick,
      checked = _ref.checked,
      text = _ref.text;

  if (checked) {
    return /*#__PURE__*/React.createElement(Outer, {
      "data-test": "switch-on"
    }, /*#__PURE__*/React.createElement(Text, null, text.off), /*#__PURE__*/React.createElement(Switch, {
      className: "activeOuter",
      "data-test": "switch",
      onClick: onClick
    }, /*#__PURE__*/React.createElement(SwitchItem, {
      className: "activeSwitch"
    })), /*#__PURE__*/React.createElement(Text, null, text.on));
  }

  return /*#__PURE__*/React.createElement(Outer, {
    "data-test": "switch-off"
  }, /*#__PURE__*/React.createElement(Text, null, text.off), /*#__PURE__*/React.createElement(Switch, {
    "data-test": "switch",
    onClick: onClick
  }, /*#__PURE__*/React.createElement(SwitchItem, null)), /*#__PURE__*/React.createElement(Text, null, text.on));
});
/**
 * Styles
 */

exports.Component = Component;

var Outer = _theme.default.div(_templateObject());

var Switch = _theme.default.div(_templateObject2(), function (props) {
  return props.theme.colors.primary.N60;
}, function (props) {
  return props.theme.colors.primary.default;
});

var SwitchItem = _theme.default.span(_templateObject3(), function (props) {
  return props.theme.colors.grayScale.S0;
});

var Text = _theme.default.span(_templateObject4());
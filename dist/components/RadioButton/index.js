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
  var data = _taggedTemplateLiteral(["\n    max-width: 280px;\n    word-break: break-all;\n    font-size: 14px;\n    padding-left: 4px;\n    height: 24px;\n    line-height: 24px;\n    color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 24px;\n    width: 24px;\n"]);

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

var Component = React.memo(function (_ref) {
  var text = _ref.text,
      checked = _ref.checked,
      onClick = _ref.onClick;

  if (checked) {
    return /*#__PURE__*/React.createElement(Outer, {
      "data-test": "radio-on",
      onClick: onClick
    }, /*#__PURE__*/React.createElement(RadioButton, {
      svg: IconFiles.icons.RadioOn,
      size: "24px"
    }), /*#__PURE__*/React.createElement(Label, null, text));
  }

  return /*#__PURE__*/React.createElement(Outer, {
    "data-test": "radio-off",
    onClick: onClick
  }, /*#__PURE__*/React.createElement(RadioButton, {
    svg: IconFiles.icons.RadioOff,
    size: "24px"
  }), /*#__PURE__*/React.createElement(Label, null, text));
});
/**
 * Styles
 */

exports.Component = Component;

var Outer = _theme.default.div(_templateObject());

var RadioButton = (0, _theme.default)(Icon.Component)(_templateObject2());

var Label = _theme.default.span(_templateObject3(), function (props) {
  return props.theme.colors.primary.P95;
});
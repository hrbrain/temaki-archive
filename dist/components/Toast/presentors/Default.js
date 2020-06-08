"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

var React = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../../modules/theme"));

var _styledComponents = require("styled-components");

var IconFiles = _interopRequireWildcard(require("../../../lib/iconFiles"));

var Icon = _interopRequireWildcard(require("../../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    max-width: 290px;\n    word-break: break-all;\n    white-space: pre-wrap;\n    font-size: 14px;\n    padding: 4px 0 0 4px;\n    color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    max-width: 290px;\n    word-break: break-all;\n    line-height: 24px;\n    font-size: 14px;\n    padding-left: 4px;\n    font-weight: bold;\n    color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    top: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-flex;\n    align-items: start;\n    padding: 12px;\n    border-radius: 6px;\n    box-shadow: ", ";\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Component = React.memo(function (props) {
  return /*#__PURE__*/React.createElement(Outer, {
    variant: props.variant,
    "data-test": "".concat(props.variant, "-default-toast")
  }, /*#__PURE__*/React.createElement(Icons, {
    svg: IconFiles.icons.SingleCheck,
    size: "24px",
    color: 'white'
  }), props.text ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, props.label), /*#__PURE__*/React.createElement(Text, null, props.text)) : /*#__PURE__*/React.createElement(Label, null, props.label), /*#__PURE__*/React.createElement(CloseButton, {
    onClick: props.onClickClose
  }, /*#__PURE__*/React.createElement(Icons, {
    svg: IconFiles.icons.Close,
    size: "24px",
    color: "white"
  })));
});
/**
 * Styles
 */

exports.Component = Component;

var Outer = _theme.default.div(_templateObject(), function (props) {
  return props.theme.shadows.boxShadow.L5;
}, function (props) {
  return getVariantColor({
    variant: props.variant,
    highlightGreen: props.theme.colors.utilities.highlightGreen.default,
    red: props.theme.colors.utilities.red.default
  });
});

var getVariantColor = function getVariantColor(props) {
  if (props.variant === 'info') {
    return "\n      background-color: ".concat(props.highlightGreen, ";\n    ");
  } else if (props.variant === 'warning') {
    return "\n        background-color: ".concat(props.red, ";\n    ");
  }

  return '';
};

var Icons = (0, _theme.default)(Icon.Component)(_templateObject2());
var buttonMixin = (0, _styledComponents.css)(_templateObject3());

var CloseButton = _theme.default.span(_templateObject4(), buttonMixin);

var Label = _theme.default.div(_templateObject5(), function (props) {
  return props.theme.colors.grayScale.S0;
});

var Text = _theme.default.div(_templateObject6(), function (props) {
  return props.theme.colors.grayScale.S0;
});
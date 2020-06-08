"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Presenter = void 0;

var React = _interopRequireWildcard(require("react"));

var _theme = _interopRequireWildcard(require("../../../modules/theme"));

var FormErrorMessage = _interopRequireWildcard(require("../../lib/FormErrorMessage"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 1px;\n    right: 1px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: calc(100% - 2px);\n    padding: 0 12px;\n\n    border-top-right-radius: 6px;\n    border-bottom-right-radius: 6px;\n    background-color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n                  /* \u30D5\u30A9\u30F3\u30C8\u6570 * \u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA + Unit\u306E\u5DE6\u53F3Padding + \u3053\u308C\u306EPadding */\n                  padding-right: ", "px;\n              "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                  background: ", ";\n              "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            border-color: ", ";\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    height: 40px;\n    padding: 0 12px;\n    border-radius: 6px;\n    border: solid 1px ", ";\n    transition: 0.15s border-color;\n\n    ", "\n\n    ", "\n    \n    ", "\n\n    &:focus {\n        outline: none;\n        border-color: ", ";\n    }\n\n    &::placeholder {\n        color: ", ";\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: inline-flex;\n    flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Presenter = function Presenter(_ref) {
  var _ = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(Wrapper, {
    className: props.className
  }, /*#__PURE__*/React.createElement(Outer, props), props.unit && /*#__PURE__*/React.createElement(Unit, null, props.unit), /*#__PURE__*/React.createElement(FormErrorMessage.Component, {
    errored: props.errored,
    message: props.errorMessage
  }));
};

exports.Presenter = Presenter;

var Wrapper = _theme.default.div(_templateObject());

var Outer = _theme.default.input(_templateObject2(), function (props) {
  return props.theme.colors.grayScale.S10;
}, function (props) {
  return props.errored && (0, _theme.css)(_templateObject3(), props.theme.colors.utilities.red.default);
}, function (props) {
  return props.diff ? (0, _theme.css)(_templateObject4(), props.theme.colors.utilities.paleYellow) : '';
}, function (props) {
  return props.unit ? (0, _theme.css)(_templateObject5(), Number(props.unit.length) * 14 + 12 * 2 + 12) : '';
}, function (props) {
  return props.theme.colors.utilities.highlightGreen.default;
}, function (props) {
  return props.theme.colors.grayScale.S20;
});

var Unit = _theme.default.div(_templateObject6(), function (props) {
  return props.theme.colors.grayScale.S10;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

var React = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../modules/theme"));

var Icon = _interopRequireWildcard(require("../Icon"));

var Button = _interopRequireWildcard(require("../Button"));

var IconFiles = _interopRequireWildcard(require("../../lib/iconFiles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    min-width: 158px;\n    & + & {\n        margin-left: 16px;\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    padding: 24px;\n    border-top: 1px solid ", ";\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    padding: 24px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-size: 18px;\n    font-weight: bold;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 24px;\n    border-bottom: 1px solid ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 678px;\n    background-color: ", ";\n    border-radius: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: fixed;\n    z-index: 600;\n    overflow: scroll;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.6);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Component = function Component(props) {
  return /*#__PURE__*/React.createElement(Background, null, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Head, null, /*#__PURE__*/React.createElement(Title, null, props.title), /*#__PURE__*/React.createElement(IconWrap, {
    onClick: props.onClose,
    "data-test": "closeIcon"
  }, /*#__PURE__*/React.createElement(Icon.Component, {
    svg: IconFiles.icons.Close,
    size: "24"
  }))), /*#__PURE__*/React.createElement(Body, null, props.children), props.buttons && /*#__PURE__*/React.createElement(Footer, null, props.buttons.map(function (buttonProps, index) {
    return /*#__PURE__*/React.createElement(StyledButton, _extends({
      key: index,
      dataTest: "button".concat(index)
    }, buttonProps), buttonProps.text);
  }))));
};

exports.Component = Component;

var Background = _theme.default.div(_templateObject());

var Wrap = _theme.default.div(_templateObject2(), function (props) {
  return props.theme.colors.grayScale.S0;
});

var Head = _theme.default.div(_templateObject3(), function (props) {
  return props.theme.colors.grayScale.S20;
});

var Title = _theme.default.div(_templateObject4());

var IconWrap = _theme.default.div(_templateObject5());

var Body = _theme.default.div(_templateObject6());

var Footer = _theme.default.div(_templateObject7(), function (props) {
  return props.theme.colors.grayScale.S20;
});

var StyledButton = (0, _theme.default)(Button.Component)(_templateObject8());
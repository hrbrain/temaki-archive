"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

var React = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../../modules/theme"));

var ClickOutside = _interopRequireWildcard(require("../../../modules/ClickOutside"));

var IconFiles = _interopRequireWildcard(require("../../../lib/iconFiles"));

var Icon = _interopRequireWildcard(require("../../Icon"));

var ItemList = _interopRequireWildcard(require("../ItemList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    padding-right: 4px;\n    width: 100%;\n    max-width: 210px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n    display: flex;\n    border-radius: 6px;\n    user-select: none;\n    font-size: 14px;\n    cursor: pointer;\n\n    background-color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 12px;\n    top: 50%;\n    transform: translateY(-50%);\n    transition: 0.2s;\n    &.visible {\n        transform: translateY(-50%) rotate(180deg);\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    margin-top: 4px;\n    transform-origin: top;\n    transition: 0.2s;\n    ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    width: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Component = React.memo(function (props) {
  return /*#__PURE__*/React.createElement(Wrap, {
    width: props.width
  }, /*#__PURE__*/React.createElement(ClickOutside.Component, {
    onClickOutside: props.onClickOutside,
    inactive: !props.isMenuVisible
  }, /*#__PURE__*/React.createElement(Body, {
    "data-test": "body",
    onClick: props.onClick,
    diff: props.diff
  }, /*#__PURE__*/React.createElement(Text, {
    "data-test": "text"
  }, props.showTextBySelected(props.items, props.value)), /*#__PURE__*/React.createElement(DropDownIcon, {
    className: props.isMenuVisible ? 'visible' : '',
    svg: IconFiles.icons.DropdownOff,
    size: "24px"
  })), /*#__PURE__*/React.createElement(StyledItemList, {
    items: props.items,
    value: props.value,
    onClickItem: props.onClickMenuItem,
    isVisible: props.isMenuVisible
  })));
});
/**
 * Styles
 */

exports.Component = Component;

var Wrap = _theme.default.div(_templateObject(), function (props) {
  return props.width || '100%';
});

var StyledItemList = (0, _theme.default)(ItemList.Component)(_templateObject2(), function (props) {
  return props.isVisible ? "\n        visibility: visible;\n        transform: scaleY(1);\n    " : "\n        visibility: hidden;\n        transform: scaleY(0);\n    ";
});
var DropDownIcon = (0, _theme.default)(Icon.Component)(_templateObject3());

var Body = _theme.default.div(_templateObject4(), function (props) {
  return props.width || '100%';
}, function (props) {
  return props.diff ? props.theme.colors.utilities.paleYellow : 'inherit';
});

var Text = _theme.default.div(_templateObject5());
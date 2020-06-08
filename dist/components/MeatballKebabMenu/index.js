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

var ClickOutside = _interopRequireWildcard(require("../../modules/ClickOutside"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    list-style: none;\n    & + & {\n        margin-top: 8px;\n    }\n    color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    white-space: nowrap;\n    position: absolute;\n    display: block;\n    right: 0;\n    max-width: 140px;\n    background: ", ";\n    border-radius: 6px;\n    box-shadow: ", ";\n    padding: 12px;\n    transition: 0.2s;\n    visibility: visible;\n    transform: scaleY(1);\n    &.top {\n        transform-origin: top;\n        top: 24px;\n    }\n    &.bottom {\n        transform-origin: bottom;\n        bottom: 24px;\n    }\n    &.hidden {\n        visibility: hidden;\n        transform: scaleY(0);\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    position: relative;\n    right: 0;\n    &.top {\n        top: 0;\n    }\n    &.bottom {\n        bottom: 0;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    width: 24px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var renderListItem = function renderListItem(isShow, setIsShow) {
  return function (listItem, index) {
    var listClick = React.useCallback(function (e) {
      listItem.onClick(e);
      setIsShow(!isShow);
    }, [isShow]);
    return /*#__PURE__*/React.createElement(ListItem, {
      "data-test": "list-item".concat(index),
      onClick: listClick,
      key: listItem.item,
      color: listItem.color
    }, listItem.item);
  };
};

var Component = React.memo(function (_ref) {
  var type = _ref.type,
      position = _ref.position,
      listItems = _ref.listItems,
      onClick = _ref.onClick;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isShow = _React$useState2[0],
      setIsShow = _React$useState2[1];

  var handleClick = React.useCallback(function (e) {
    setIsShow(!isShow);
    onClick(e);
  }, [isShow]);
  var clickOutside = React.useCallback(function () {
    setIsShow(false);
  }, [isShow]);
  return /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(ClickOutside.Component, {
    "data-test": "click-outside",
    onClickOutside: clickOutside
  }, /*#__PURE__*/React.createElement(Menu, {
    "data-test": "menu-component",
    className: position,
    onClick: handleClick
  }, /*#__PURE__*/React.createElement(MenuItem, {
    "data-test": "icon-src",
    svg: selectMeatOrKebab(type),
    size: "24px"
  }), /*#__PURE__*/React.createElement(ListWrapper, null, /*#__PURE__*/React.createElement(List, {
    "data-test": "list-component",
    className: "".concat(position, " ").concat(!isShow ? 'hidden' : ''),
    listNum: listItems.length
  }, listItems.map(renderListItem(isShow, setIsShow)))))));
});
exports.Component = Component;

var selectMeatOrKebab = function selectMeatOrKebab(type) {
  if (type == 'meatball') {
    return IconFiles.icons.MenuH;
  } else {
    return IconFiles.icons.MenuV;
  }
};
/**
 * style
 */


var Wrap = _theme.default.div(_templateObject());

var Menu = _theme.default.div(_templateObject2());

var MenuItem = (0, _theme.default)(Icon.Component)(_templateObject3());

var ListWrapper = _theme.default.div(_templateObject4());

var List = _theme.default.ul(_templateObject5(), function (props) {
  return props.theme.colors.grayScale.S0;
}, function (props) {
  return props.theme.shadows.boxShadow.L5;
});

var ListItem = _theme.default.li(_templateObject6(), function (props) {
  if (props.color === 'primary') {
    return props.theme.colors.primary.default;
  }

  if (props.color === 'destructive') {
    return props.theme.colors.utilities.red.default;
  }

  return props.theme.colors.text.default;
});
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

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    padding-left: 4px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    & #fill {\n        fill: ", ";\n        & .disabled {\n            fill: ", ";\n        }\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    list-style-type: none;\n    user-select: none;\n    font-size: 14px;\n    display: flex;\n    cursor: pointer;\n    &:hover {\n        color: ", ";\n    }\n    & + & {\n        margin-top: 12px;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    background: ", ";\n    border-radius: 6px;\n    box-shadow: ", ";\n    max-height: 204px;\n    overflow-y: auto;\n    z-index: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Component = React.memo(function (props) {
  var showItem = props.filteredItems.map(renderItem(props.values, props.onClickItem));
  return /*#__PURE__*/React.createElement(ItemList, {
    "data-test": "itemList",
    className: props.className,
    isVisible: props.isVisible
  }, /*#__PURE__*/React.createElement(ListInner, null, showItem));
});
exports.Component = Component;

var renderItem = function renderItem(selected, onClickItem) {
  return function (item, index) {
    return /*#__PURE__*/React.createElement(ItemComponent, {
      item: item,
      key: index,
      selected: selected,
      onClickItem: onClickItem
    });
  };
};
/**
 * ItemComponent
 */


var ItemComponent = React.memo(function (props) {
  var handleClick = React.useCallback(function () {
    props.onClickItem(props.item.value);
  }, [props.onClickItem, props.item]);
  return /*#__PURE__*/React.createElement(ListItem, {
    onClick: handleClick
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    svg: props.selected.indexOf(props.item.value) >= 0 ? IconFiles.icons.CheckBoxOn : IconFiles.icons.CheckBoxOff,
    size: "24px"
  }), /*#__PURE__*/React.createElement(Text, null, props.item.text));
});
/**
 * Styles
 */

var ItemList = _theme.default.ul(_templateObject(), function (props) {
  return props.theme.colors.grayScale.S0;
}, function (props) {
  return props.theme.shadows.dropShadow.L5;
});

var ListInner = _theme.default.div(_templateObject2());

var ListItem = _theme.default.li(_templateObject3(), function (props) {
  return props.theme.colors.primary.default;
});

var CheckIcon = (0, _theme.default)(Icon.Component)(_templateObject4(), function (props) {
  return props.theme.colors.primary.default;
}, function (props) {
  return props.theme.colors.grayScale.S20;
});

var Text = _theme.default.div(_templateObject5());
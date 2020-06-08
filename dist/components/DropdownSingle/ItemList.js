"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

var React = _interopRequireWildcard(require("react"));

var _theme = _interopRequireWildcard(require("../../modules/theme"));

var IconFiles = _interopRequireWildcard(require("../../lib/iconFiles"));

var Icon = _interopRequireWildcard(require("../Icon"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    padding-left: 4px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    list-style-type: none;\n    user-select: none;\n    font-size: 14px;\n    display: flex;\n    cursor: pointer;\n    &:hover {\n        color: ", ";\n    }\n    & + & {\n        margin-top: 12px;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n    border-radius: 6px;\n    box-shadow: ", ";\n    max-height: 204px;\n    overflow-y: auto;\n    padding: 12px;\n    z-index: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Component = React.memo(function (props) {
  var showItem = props.filteredItems ? props.filteredItems.map(renderItem(props.value, props.onClickItem, props.onBlurSearchValue)) : props.items.map(renderItem(props.value, props.onClickItem));
  return /*#__PURE__*/React.createElement(ItemList, {
    "data-test": "itemList",
    className: props.className
  }, showItem);
});
exports.Component = Component;

var renderItem = function renderItem(selected, onClickItem, onBlurSearchValue) {
  return function (item, index) {
    return /*#__PURE__*/React.createElement(ItemComponent, {
      item: item,
      key: index,
      selected: selected,
      onClickItem: onClickItem,
      onBlurSearchValue: onBlurSearchValue
    });
  };
};
/**
 * ItemComponent
 */


var ItemComponent = React.memo(function (props) {
  var handleClick = React.useCallback(function () {
    if (props.onBlurSearchValue !== undefined) props.onBlurSearchValue();
    props.onClickItem(props.item.value);
  }, [props.onClickItem, props.item, props.onBlurSearchValue]);
  return /*#__PURE__*/React.createElement(Item, {
    onClick: handleClick
  }, /*#__PURE__*/React.createElement(Icon.Component, {
    svg: IconFiles.icons.SingleCheck,
    size: "24px",
    color: props.item.value === props.selected ? _theme.defaultTheme.colors.primary.default : _theme.defaultTheme.colors.grayScale.S10
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

var Item = _theme.default.li(_templateObject2(), function (props) {
  return props.theme.colors.primary.default;
});

var Text = _theme.default.div(_templateObject3());
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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    transition: 0.2s;\n    background: ", ";\n    color: ", ";\n    display: inline-flex;\n    text-align: center;\n    padding-left: 12px;\n    padding-right: 12px;\n    font-size: 14px;\n    height: 40px;\n    line-height: 40px;\n    border: 1px solid ", ";\n    border-right: 0;\n    border-collapse: collapse;\n    user-select: none;\n    cursor: pointer;\n    width: ", ";\n    justify-content: center;\n    align-items: center;\n\n    &:first-child {\n        border-top-left-radius: 6px;\n        border-bottom-left-radius: 6px;\n    }\n\n    &:last-child {\n        border-top-right-radius: 6px;\n        border-bottom-right-radius: 6px;\n        border-right: 1px solid ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Component = React.memo(function (_ref) {
  var items = _ref.items,
      selectedIndex = _ref.selectedIndex,
      onClickTab = _ref.onClickTab,
      className = _ref.className,
      itemsWidth = _ref.itemsWidth;
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, items.map(renderItem(selectedIndex, onClickTab, itemsWidth)));
});
exports.Component = Component;

var renderItem = function renderItem(selectedIndex, onClickTab, itemWidth) {
  return function (item, key) {
    var handleClick = React.useCallback(function () {
      return onClickTab(key);
    }, []);
    return /*#__PURE__*/React.createElement(Box, {
      "data-test": "item".concat(key),
      selected: selectedIndex === key,
      onClick: handleClick,
      key: key,
      itemWidth: itemWidth
    }, item.text);
  };
};

Component.displayName = 'SegmentedControl';
/**
 * Styles
 */

var Box = _theme.default.div(_templateObject(), function (props) {
  return props.selected ? props.theme.colors.primary.default : props.theme.colors.grayScale.S0;
}, function (props) {
  return props.selected ? props.theme.colors.grayScale.S0 : props.theme.colors.primary.default;
}, function (props) {
  return props.theme.colors.primary.default;
}, function (props) {
  return props.itemWidth || '100%';
}, function (props) {
  return props.theme.colors.primary.default;
});
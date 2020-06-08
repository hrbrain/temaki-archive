"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = require("@storybook/react");

var React = _interopRequireWildcard(require("react"));

var MeatballKebabMenu = _interopRequireWildcard(require("./"));

var ClickOutside = _interopRequireWildcard(require("../../modules/ClickOutside"));

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _react.storiesOf)('Components|MeatballKebabMenu', module).add('all', function () {
  return /*#__PURE__*/React.createElement("div", {
    className: "mr-10 mt-56"
  }, /*#__PURE__*/React.createElement(MeatballKebabMenu.Component, {
    type: (0, _addonKnobs.select)('Type', {
      meatball: 'meatball',
      kebab: 'kebab'
    }, 'meatball'),
    position: (0, _addonKnobs.select)('Position', {
      top: 'top',
      bottom: 'bottom'
    }, 'top'),
    listItems: menuItems,
    onClick: (0, _addonActions.action)('onClick')
  }), /*#__PURE__*/React.createElement(ClickOutside.Component, {
    onClickOutside: (0, _addonActions.action)('onClickOutside')
  }));
});
var menuItems = [{
  item: (0, _addonKnobs.text)('text1', 'リスト1'),
  onClick: (0, _addonActions.action)('onClick1')
}, {
  item: (0, _addonKnobs.text)('text2', 'リスト2'),
  onClick: (0, _addonActions.action)('onClick2')
}, {
  item: (0, _addonKnobs.text)('text3', 'リスト3'),
  onClick: (0, _addonActions.action)('onClick3'),
  color: 'destructive'
}];
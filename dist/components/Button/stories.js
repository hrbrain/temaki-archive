"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = require("@storybook/react");

var React = _interopRequireWildcard(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var Button = _interopRequireWildcard(require("./index"));

var IconFiles = _interopRequireWildcard(require("../../lib/iconFiles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var boxOptions = {
  Primary: 'primary',
  PrimaryGhost: 'primary ghost',
  Secondary: 'secondary',
  SecondaryGhost: 'secondary ghost',
  Destructive: 'destructive',
  DestructiveGhost: 'destructive ghost',
  Disabled: 'disabled'
};
var circleOptions = {
  Primary: 'primary',
  Secondary: 'secondary'
};
var textOptions = {
  Primary: 'primary',
  Destructive: 'destructive'
};
(0, _react.storiesOf)('Components|Button', module).add('Box', function () {
  return /*#__PURE__*/React.createElement(Button.Component, {
    variant: "box",
    type: "submit",
    colorType: (0, _addonKnobs.select)('ColorType', boxOptions, boxOptions.Primary),
    onClick: (0, _addonActions.action)('onClick')
  }, "Confirm");
}).add('Circle', function () {
  return /*#__PURE__*/React.createElement(Button.Component, {
    variant: "circle",
    type: "reset",
    colorType: (0, _addonKnobs.select)('ColorType', circleOptions, circleOptions.Primary),
    svg: IconFiles.icons.ArrowDown,
    onClick: (0, _addonActions.action)('onClick')
  });
}).add('Text', function () {
  return /*#__PURE__*/React.createElement(Button.Component, {
    variant: "text",
    type: "button",
    colorType: (0, _addonKnobs.select)('ColorType', textOptions, textOptions.Primary),
    svg: IconFiles.icons.ArrowDown,
    onClick: (0, _addonActions.action)('onClick')
  }, (0, _addonKnobs.text)('text', 'Show filters'));
});
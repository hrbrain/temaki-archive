"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _react = require("@storybook/react");

var React = _interopRequireWildcard(require("react"));

var Input = _interopRequireWildcard(require("./index"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _react.storiesOf)('Components|Input', module).add('Text', function () {
  return /*#__PURE__*/React.createElement(Input.Component, {
    format: "text",
    value: (0, _addonKnobs.text)('Value', ''),
    placeholder: (0, _addonKnobs.text)('Placeholder', 'Enter your name'),
    onChange: (0, _addonActions.action)('onChange'),
    onBlur: (0, _addonActions.action)('onBlur'),
    errored: (0, _addonKnobs.boolean)('Error', false),
    errorMessage: (0, _addonKnobs.text)('Error Message', 'Error Message'),
    onKeyDown: (0, _addonActions.action)('onKeyDown'),
    onKeyUp: (0, _addonActions.action)('onKeyUp')
  });
}).add('Number', function () {
  return /*#__PURE__*/React.createElement(Input.Component, {
    format: "number",
    unit: (0, _addonKnobs.text)('単位', ''),
    value: (0, _addonKnobs.number)('Value', 0),
    placeholder: (0, _addonKnobs.text)('Placeholder', 'Enter your age'),
    onChange: (0, _addonActions.action)('onChange'),
    onBlur: (0, _addonActions.action)('onBlur'),
    errored: (0, _addonKnobs.boolean)('Error', false),
    errorMessage: (0, _addonKnobs.text)('Error Message', 'Error Message'),
    onKeyDown: (0, _addonActions.action)('onKeyDown'),
    onKeyUp: (0, _addonActions.action)('onKeyUp')
  });
});
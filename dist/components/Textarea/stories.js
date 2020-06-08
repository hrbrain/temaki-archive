"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _react = require("@storybook/react");

var React = _interopRequireWildcard(require("react"));

var Textarea = _interopRequireWildcard(require("./index"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _react.storiesOf)('Components|Textarea', module).add('all', function () {
  return /*#__PURE__*/React.createElement(Textarea.Component, {
    value: (0, _addonKnobs.text)('value', ''),
    placeholder: (0, _addonKnobs.text)('placeholder', '文字を入力してください。'),
    minRows: (0, _addonKnobs.number)('minRows', 2),
    maxRows: (0, _addonKnobs.number)('maxRows', 10),
    errored: (0, _addonKnobs.boolean)('errored', false),
    errorMessage: (0, _addonKnobs.text)('ErrorMessage', ''),
    onChange: (0, _addonActions.action)('onChange'),
    onFocus: (0, _addonActions.action)('onFocus'),
    onBlur: (0, _addonActions.action)('onBlur')
  });
});
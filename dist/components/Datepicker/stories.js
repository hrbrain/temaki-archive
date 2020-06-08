"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = require("@storybook/react");

var React = _interopRequireWildcard(require("react"));

var Datepicker = _interopRequireWildcard(require("./index"));

var Knobs = _interopRequireWildcard(require("@storybook/addon-knobs"));

var Actions = _interopRequireWildcard(require("@storybook/addon-actions"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var name = 'date';
var defaultDate = new Date('2019/12/25');

var testKnobDate = function testKnobDate(label, defaultValue) {
  var stringTimestamp = Knobs.date(label, defaultValue);
  return new Date(stringTimestamp);
};

(0, _react.storiesOf)('Components|Datepicker', module).add('Standard', function () {
  return /*#__PURE__*/React.createElement(Datepicker.Component, {
    date: testKnobDate(name, defaultDate),
    placeholderText: Knobs.text('placeholderText', ''),
    displayFormat: Knobs.text('displayFormat', 'YYYY年M月D日'),
    monthFormat: Knobs.text('monthFormat', 'YYYY[年]M[月]'),
    onChange: Actions.action('onChange'),
    width: Knobs.text('width', '100%'),
    selectedColor: Knobs.text('selectedColor', ''),
    defaultHoverColor: Knobs.text('defaultHoverColor', ''),
    errored: Knobs.boolean('Error', false),
    errorMessage: Knobs.text('ErrorMessage', '')
  });
}).add('Null', function () {
  return /*#__PURE__*/React.createElement(Datepicker.Component, {
    date: null,
    placeholderText: Knobs.text('placeholderText', ''),
    displayFormat: Knobs.text('displayFormat', 'YYYY年M月D日'),
    monthFormat: Knobs.text('monthFormat', 'YYYY[年]M[月]'),
    onChange: Actions.action('onChange'),
    width: Knobs.text('width', '100%'),
    selectedColor: Knobs.text('selectedColor', ''),
    defaultHoverColor: Knobs.text('defaultHoverColor', ''),
    errored: Knobs.boolean('Error', false),
    errorMessage: Knobs.text('ErrorMessage', '')
  });
});
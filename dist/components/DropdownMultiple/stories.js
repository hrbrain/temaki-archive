"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _react = require("@storybook/react");

var React = _interopRequireWildcard(require("react"));

var DropdownMultiple = _interopRequireWildcard(require("./index"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var items = [{
  value: '1',
  text: 'りんご'
}, {
  value: '2',
  text: 'いちご'
}, {
  value: '3',
  text: 'バナナ'
}, {
  value: '4',
  text: 'メロン'
}, {
  value: '5',
  text: 'さくらんぼ'
}, {
  value: '6',
  text: 'ぶどう'
}];
var itemOptions = items.reduce(function (accum, item) {
  return _objectSpread({}, accum, _defineProperty({}, item.text, item.value));
}, {});
(0, _react.storiesOf)('Components|DropdownMultiple', module).add('Multi', function () {
  return /*#__PURE__*/React.createElement("div", {
    className: "ml-20 mt-10"
  }, /*#__PURE__*/React.createElement(DropdownMultiple.Component, {
    placeholder: (0, _addonKnobs.text)('placeholder', '選択してください'),
    items: items,
    values: (0, _addonKnobs.optionsKnob)('selected', itemOptions, [], {
      display: 'check'
    }),
    isError: (0, _addonKnobs.boolean)('isError', false),
    errorMessage: (0, _addonKnobs.text)('ErrorMessage', ''),
    width: (0, _addonKnobs.text)('width', '250px'),
    onChange: (0, _addonActions.action)('onChange'),
    diff: (0, _addonKnobs.boolean)('Diff', false)
  }));
}).add('Input', function () {
  return /*#__PURE__*/React.createElement("div", {
    className: "ml-20 mt-10"
  }, /*#__PURE__*/React.createElement(DropdownMultiple.Component, {
    placeholder: (0, _addonKnobs.text)('placeholder', '選択してください'),
    items: [{
      value: '1',
      text: 'りんご'
    }, {
      value: '2',
      text: 'いちご'
    }, {
      value: '3',
      text: 'バナナ'
    }, {
      value: '4',
      text: 'メロン'
    }, {
      value: '5',
      text: 'さくらんぼ'
    }, {
      value: '6',
      text: 'ぶどう'
    }],
    values: [],
    isError: (0, _addonKnobs.boolean)('isError', false),
    errorMessage: (0, _addonKnobs.text)('ErrorMessage', ''),
    width: (0, _addonKnobs.text)('width', '250px'),
    onChange: (0, _addonActions.action)('onChange'),
    diff: (0, _addonKnobs.boolean)('Diff', false)
  }));
});
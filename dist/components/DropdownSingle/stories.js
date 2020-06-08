"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _react = require("@storybook/react");

var React = _interopRequireWildcard(require("react"));

var DropdownSingle = _interopRequireWildcard(require("./index"));

var ItemList = _interopRequireWildcard(require("./ItemList"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _react.storiesOf)('Components|DropdownSingle', module).add('Default', function () {
  return /*#__PURE__*/React.createElement("div", {
    className: "ml-20 mt-10"
  }, /*#__PURE__*/React.createElement(DropdownSingle.Component, {
    type: 'default',
    placeholder: (0, _addonKnobs.text)('placeholder', '選択してください'),
    items: [{
      value: '',
      text: ''
    }, {
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
    value: (0, _addonKnobs.select)('selected', {
      未選択時: '',
      りんご: '1',
      いちご: '2',
      バナナ: '3',
      メロン: '4',
      さくらんぼ: '5',
      ぶどう: '6'
    }, ''),
    isError: (0, _addonKnobs.boolean)('isError', false),
    errorMessage: (0, _addonKnobs.text)('ErrorMessage', ''),
    width: (0, _addonKnobs.text)('width', '200px'),
    onChange: (0, _addonActions.action)('onChange'),
    diff: (0, _addonKnobs.boolean)('Diff', false)
  }));
}).add('Input', function () {
  return /*#__PURE__*/React.createElement("div", {
    className: "ml-20 mt-10"
  }, /*#__PURE__*/React.createElement(DropdownSingle.Component, {
    type: 'default',
    placeholder: (0, _addonKnobs.text)('placeholder', '選択してください'),
    items: [{
      value: '',
      text: ''
    }, {
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
    value: '',
    isError: (0, _addonKnobs.boolean)('isError', false),
    errorMessage: (0, _addonKnobs.text)('ErrorMessage', ''),
    width: (0, _addonKnobs.text)('width', '200px'),
    onChange: (0, _addonActions.action)('onChange'),
    diff: (0, _addonKnobs.boolean)('Diff', false)
  }));
}).add('Borderless', function () {
  return /*#__PURE__*/React.createElement("div", {
    className: "ml-20 mt-10"
  }, /*#__PURE__*/React.createElement(DropdownSingle.Component, {
    type: 'borderless',
    placeholder: (0, _addonKnobs.text)('placeholder', ''),
    items: [{
      value: '20',
      text: '20'
    }, {
      value: '50',
      text: '50'
    }, {
      value: '100',
      text: '100'
    }],
    value: (0, _addonKnobs.select)('selected', {
      '20': '20',
      '50': '50',
      '100': '100'
    }, '20'),
    isError: (0, _addonKnobs.boolean)('isError', false),
    width: (0, _addonKnobs.text)('width', '250px'),
    onChange: (0, _addonActions.action)('text'),
    diff: (0, _addonKnobs.boolean)('Diff', false)
  }));
}).add('ItemList', function () {
  return /*#__PURE__*/React.createElement("div", {
    className: "ml-20 mt-10"
  }, /*#__PURE__*/React.createElement(ItemList.Component, {
    items: [{
      value: '',
      text: ''
    }, {
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
    value: (0, _addonKnobs.select)('selected', {
      未選択時: '',
      りんご: '1',
      いちご: '2',
      バナナ: '3',
      メロン: '4',
      さくらんぼ: '5',
      ぶどう: '6'
    }, ''),
    onClickItem: (0, _addonActions.action)('text'),
    isVisible: (0, _addonKnobs.boolean)('isVisible', false)
  }));
});
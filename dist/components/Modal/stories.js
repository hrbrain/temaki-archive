"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Actions = _interopRequireWildcard(require("@storybook/addon-actions"));

var Knobs = _interopRequireWildcard(require("@storybook/addon-knobs"));

var _react = require("@storybook/react");

var React = _interopRequireWildcard(require("react"));

var Modal = _interopRequireWildcard(require("./index"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _react.storiesOf)('Components|Modal', module).add('all', function () {
  return /*#__PURE__*/React.createElement("div", {
    className: "m-10"
  }, /*#__PURE__*/React.createElement(Modal.Component, {
    isOpen: Knobs.boolean('isOpen', true),
    title: Knobs.text('title', 'ロール作成'),
    buttons: [{
      variant: 'box',
      colorType: 'primary',
      text: '登録'
    }],
    onClose: Actions.action('onClose')
  }, "\u30B3\u30F3\u30C6\u30F3\u30C4"));
});
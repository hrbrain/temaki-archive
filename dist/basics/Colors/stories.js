"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = require("@storybook/react");

var React = _interopRequireWildcard(require("react"));

var _theme = require("../../modules/theme");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Square = function Square(_ref) {
  var name = _ref.name,
      color = _ref.color;
  return /*#__PURE__*/React.createElement("div", {
    className: "ml-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-16 w-16",
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-center text-xs mt-2"
  }, name));
};

var renderColorsEachKeys = function renderColorsEachKeys(obj) {
  return Object.keys(obj).sort(function (a, b) {
    return a > b ? -1 : 1;
  }).map(function (key, index) {
    return /*#__PURE__*/React.createElement(Square, {
      key: index,
      color: obj[key],
      name: key
    });
  });
};

(0, _react.storiesOf)('Basics|Colors', module).add('all', function () {
  return /*#__PURE__*/React.createElement("div", {
    className: "container p-4"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-xl"
  }, "Primary"), /*#__PURE__*/React.createElement("div", {
    className: "flex mt-4"
  }, renderColorsEachKeys(_theme.defaultTheme.colors.primary)), /*#__PURE__*/React.createElement("h1", {
    className: "text-xl mt-8"
  }, "Utility"), /*#__PURE__*/React.createElement("h2", {
    className: "text-l mt-4"
  }, "Red"), /*#__PURE__*/React.createElement("div", {
    className: "flex mt-4"
  }, renderColorsEachKeys(_theme.defaultTheme.colors.utilities.red)), /*#__PURE__*/React.createElement("h2", {
    className: "text-l mt-4"
  }, "Highlight Green"), /*#__PURE__*/React.createElement("div", {
    className: "flex mt-4"
  }, renderColorsEachKeys(_theme.defaultTheme.colors.utilities.highlightGreen)));
});
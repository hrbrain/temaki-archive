"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = require("@storybook/react");

var React = _interopRequireWildcard(require("react"));

var _theme = require("../../modules/theme");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _react.storiesOf)('Basics|Typography', module).add('Body', function () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DeviceSection, {
    name: "PC",
    theme: _theme.defaultTheme.typography.pc
  }), /*#__PURE__*/React.createElement(DeviceSection, {
    name: "SP",
    theme: _theme.defaultTheme.typography.sp,
    className: "mt-12"
  }));
});

var DeviceSection = function DeviceSection(_ref) {
  var name = _ref.name,
      theme = _ref.theme,
      className = _ref.className;
  return /*#__PURE__*/React.createElement("section", {
    className: "container p-4 ".concat(className)
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-8 w-64"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl"
  }, "Heading"), /*#__PURE__*/React.createElement(TypoList, {
    className: "mt-4",
    sizes: theme.heading
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 w-64"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl"
  }, "Body"), /*#__PURE__*/React.createElement(TypoList, {
    className: "mt-4",
    sizes: theme.body
  }))));
};

var TypoList = function TypoList(_ref2) {
  var sizes = _ref2.sizes,
      className = _ref2.className;
  var keyList = Object.keys(sizes);
  return /*#__PURE__*/React.createElement("ul", {
    className: "list-reset ".concat(className)
  }, keyList.map(typoListItem(sizes)));
};

var typoListItem = function typoListItem(sizes) {
  return function (key) {
    return /*#__PURE__*/React.createElement("li", {
      className: "mt-2",
      style: {
        fontSize: sizes[key]
      },
      key: key
    }, key, " - ", sizes[key]);
  };
};
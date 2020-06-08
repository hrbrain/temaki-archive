"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Knobs = _interopRequireWildcard(require("@storybook/addon-knobs"));

var Storybook = _interopRequireWildcard(require("@storybook/react"));

var React = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../modules/theme"));

var IconFiles = _interopRequireWildcard(require("../../lib/iconFiles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 12px;\n    margin-left: 12px;\n    & #fill {\n        fill: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Storybook.storiesOf('basics|Icons', module).add('index', function () {
  var iconElements = Object.keys(IconFiles.icons).map(compose(renderIcon(Knobs.color('カラー', '#888')), toSvgRaw(IconFiles.icons)));
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap w-64"
  }, iconElements);
});
/* tslint:disable:no-any */

var compose = function compose() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (arg) {
    return functions.reduceRight(function (p, f) {
      return f(p);
    }, arg);
  };
};
/* tslint:enable:no-any */


var toSvgRaw = function toSvgRaw(iconMap) {
  return function (key) {
    return iconMap[key];
  };
};

var renderIcon = function renderIcon(fill) {
  return function (html) {
    return /*#__PURE__*/React.createElement(Icon, {
      dangerouslySetInnerHTML: {
        __html: html
      },
      fill: fill
    });
  };
};

var Icon = _theme.default.div(_templateObject(), function (props) {
  return props.fill;
});
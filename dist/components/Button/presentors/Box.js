"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

var React = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../../modules/theme"));

var Styles = _interopRequireWildcard(require("../lib/styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 6px;\n    border-style: none;\n    padding: 0 ", ";\n    cursor: pointer;\n    height: ", ";\n    width: ", ";\n    box-shadow: none;\n    outline: none;\n    font-size: 14px;\n\n    /* size */\n    &.small {\n        height: ", ";\n    }\n\n    /* color */\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Component = function Component(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(Outer, {
    onClick: props.onClick,
    type: props.type,
    height: props.height,
    width: props.width,
    colorType: props.colorType,
    disabled: props.colorType === 'disabled',
    className: props.className,
    "data-test": props.dataTest
  }, children);
};
/**
 * Styles
 */


exports.Component = Component;

var Outer = _theme.default.button(_templateObject(), Styles.rippleEffectMixin, function (props) {
  return props.width ? '0' : '16px';
}, function (props) {
  return props.height || '40px';
}, function (props) {
  return props.width || 'auto';
}, function (props) {
  return props.height || '32px';
}, function (props) {
  switch (props.colorType) {
    case 'primary':
      return Styles.createCSSFromColorType(props.theme.colors.primary.default, props.theme.colors.primary.N20, props.theme.colors.primary.N40, props.theme.colors.grayScale.S0);

    case 'primary ghost':
      return Styles.createCSSFromColorType('inherit', props.theme.colors.primary.N80, props.theme.colors.primary.N60, props.theme.colors.primary.default, props.theme.colors.primary.default);

    case 'secondary':
      return Styles.createCSSFromColorType(props.theme.colors.grayScale.S5, props.theme.colors.grayScale.S20, props.theme.colors.grayScale.S40, props.theme.colors.grayScale.S100, props.theme.colors.grayScale.S10);

    case 'secondary ghost':
      return Styles.createCSSFromColorType('inherit', props.theme.colors.grayScale.S20, props.theme.colors.grayScale.S40, props.theme.colors.grayScale.S100, props.theme.colors.grayScale.S50);

    case 'destructive':
      return Styles.createCSSFromColorType(props.theme.colors.utilities.red.default, 'rgb(179, 68, 58)', 'rgb(133, 51, 43)', props.theme.colors.grayScale.S0);

    case 'destructive ghost':
      return Styles.createCSSFromColorType('inherit', 'rgb(250, 221, 218)', 'rgb(244, 187, 182)', props.theme.colors.utilities.red.default, props.theme.colors.utilities.red.default);

    case 'disabled':
      return Styles.createCSSFromColorType(props.theme.colors.grayScale.S20, props.theme.colors.grayScale.S20, props.theme.colors.grayScale.S20, props.theme.colors.grayScale.S0);

    default:
      return '';
  }
});
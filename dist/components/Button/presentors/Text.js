"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

var React = _interopRequireWildcard(require("react"));

var _theme = _interopRequireWildcard(require("../../../modules/theme"));

var Styles = _interopRequireWildcard(require("../lib/styles"));

var Icon = _interopRequireWildcard(require("../../Icon"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    padding-left: ", ";\n    font-size: 14px;\n    font-weight: normal;\n    white-space: nowrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background: transparent;\n    ", "\n    ", "\n    height: 24px;\n    width: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Component = function Component(_ref) {
  var svg = _ref.svg,
      colorType = _ref.colorType,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["svg", "colorType", "children"]);

  return /*#__PURE__*/React.createElement(Outer, {
    type: props.type,
    onClick: props.onClick,
    className: props.className,
    "data-test": props.dataTest
  }, renderIcon(svg, colorType), renderText(svg, colorType, children));
};

exports.Component = Component;

function renderIcon(svg, colorType) {
  if (!svg) {
    return null;
  }

  return /*#__PURE__*/React.createElement(_theme.ThemeConsumer, null, function (theme) {
    return /*#__PURE__*/React.createElement(Icon.Component, {
      svg: svg,
      size: "24px",
      color: selectIconColor(theme, colorType)
    });
  });
}

function renderText(svg, colorType, children) {
  if (!children) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Text, {
    colorType: colorType,
    svg: svg,
    "data-test": "text-button-child"
  }, children);
}

function selectIconColor(theme, colorType) {
  switch (colorType) {
    case 'primary':
      return theme.colors.primary.default;

    case 'destructive':
      return theme.colors.utilities.red.default;

    default:
      return theme.colors.text.default;
  }
}
/**
 * Styles
 */


var Outer = _theme.default.button(_templateObject(), Styles.buttonBaseMixin, Styles.rippleEffectMixin);

var Text = _theme.default.span(_templateObject2(), function (props) {
  switch (props.colorType) {
    case 'primary':
      return props.theme.colors.primary.default;

    case 'destructive':
      return props.theme.colors.utilities.red.default;

    default:
      return props.theme.colors.text;
  }
}, function (props) {
  return props.svg ? '4px' : '0';
});
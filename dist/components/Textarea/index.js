"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

var React = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../modules/theme"));

var _reactTextareaAutosize = _interopRequireDefault(require("react-textarea-autosize"));

var FormErrorMessage = _interopRequireWildcard(require("../lib/FormErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    border: 1px solid ", ";\n    border-radius: 6px;\n    width: 100%;\n    padding: 8px;\n    margin-top: 4px;\n    font-size: 14px;\n    resize: none;\n    outline: none;\n    color: ", ";\n    &::placeholder {\n        color: ", ";\n    }\n\n    &:focus {\n        border-color: ", ";\n    }\n\n    border-color: ", ";\n\n    background-color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-flex;\n    flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Component = React.memo(function (props) {
  var _React$useState = React.useState(props.value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var changeValue = React.useCallback(function (e) {
    e.persist();
    props.onChangeNative && props.onChangeNative(e);
    props.onChange && props.onChange(e.target.value);
    setValue(e.target.value);
  }, [props.onChange, props.onChangeNative]);
  React.useLayoutEffect(function () {
    setValue(props.value);
  }, [props.value]);
  return /*#__PURE__*/React.createElement(Outer, {
    className: props.className
  }, /*#__PURE__*/React.createElement(Textarea, {
    name: props.name,
    value: value,
    placeholder: props.placeholder,
    minRows: props.minRows,
    maxRows: props.maxRows,
    errored: props.errored,
    onChange: changeValue,
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    diff: props.diff
  }), /*#__PURE__*/React.createElement(FormErrorMessage.Component, {
    errored: props.errored,
    message: props.errorMessage
  }));
});
exports.Component = Component;
Component.displayName = 'Textarea';
/**
 * Styles
 */

var Outer = _theme.default.div(_templateObject());

var Textarea = (0, _theme.default)(_reactTextareaAutosize.default)(_templateObject2(), function (props) {
  return props.theme.colors.grayScale.S10;
}, function (props) {
  return props.theme.colors.grayScale.S100;
}, function (props) {
  return props.theme.colors.grayScale.S20;
}, function (props) {
  return props.errored ? props.theme.colors.utilities.red.default : props.theme.colors.utilities.highlightGreen.default;
}, function (props) {
  return props.errored && props.theme.colors.utilities.red.default;
}, function (props) {
  return props.diff ? props.theme.colors.utilities.paleYellow : "inherit";
});
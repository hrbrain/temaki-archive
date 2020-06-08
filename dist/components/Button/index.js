"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = exports.buttonShapeType = void 0;

var React = _interopRequireWildcard(require("react"));

var Box = _interopRequireWildcard(require("./presentors/Box"));

var Circle = _interopRequireWildcard(require("./presentors/Circle"));

var TextPresentor = _interopRequireWildcard(require("./presentors/Text"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var buttonShapeType = {
  box: 'box',
  circle: 'circle',
  text: 'text'
}; // 別のコンポーネントで必要なら共通化して下さい

exports.buttonShapeType = buttonShapeType;

var useIsLoadingByAsyncClick = function useIsLoadingByAsyncClick(fn) {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isLoading = _React$useState2[0],
      setIsLoading = _React$useState2[1];

  var handleClick = React.useCallback(function (e) {
    if (!fn) {
      return;
    }

    var res = fn(e);

    if (res) {
      setIsLoading(true);
      res.then(function () {
        return setIsLoading(false);
      });
    }
  }, [isLoading, fn]);
  return [isLoading, handleClick];
};
/**
 * Component
 */


var Component = function Component(props) {
  var _useIsLoadingByAsyncC = useIsLoadingByAsyncClick(props.onClick),
      _useIsLoadingByAsyncC2 = _slicedToArray(_useIsLoadingByAsyncC, 2),
      isLoading = _useIsLoadingByAsyncC2[0],
      handleClick = _useIsLoadingByAsyncC2[1];

  switch (props.variant) {
    case 'circle':
      return /*#__PURE__*/React.createElement(Circle.Component, {
        dataTest: props.dataTest,
        onClick: handleClick,
        type: props.type || 'submit',
        colorType: props.colorType || 'primary',
        svg: props.svg,
        isLoading: isLoading,
        className: props.className
      });

    case 'text':
      return /*#__PURE__*/React.createElement(TextPresentor.Component, {
        dataTest: props.dataTest,
        onClick: handleClick,
        colorType: props.colorType || 'primary',
        svg: props.svg,
        type: props.type || 'submit',
        className: props.className
      }, props.children);

    default:
      return /*#__PURE__*/React.createElement(Box.Component, {
        dataTest: props.dataTest,
        height: props.height,
        width: props.width,
        colorType: props.colorType || 'primary',
        onClick: handleClick,
        type: props.type || 'submit',
        className: props.className
      }, isLoading ? 'loading...' : props.children);
  }
};

exports.Component = Component;
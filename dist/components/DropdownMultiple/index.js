"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

var React = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../modules/theme"));

var Body = _interopRequireWildcard(require("./body"));

var ItemList = _interopRequireWildcard(require("./itemList"));

var ClickOutside = _interopRequireWildcard(require("../../modules/ClickOutside"));

var ErrorMessage = _interopRequireWildcard(require("../lib/FormErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: ", ";\n    background: ", ";\n    border-radius: 6px;\n    box-shadow: ", ";\n    max-height: 204px;\n    overflow-y: auto;\n    z-index: 1;\n    color: ", ";\n    word-break: break-all;\n    padding: 12px;\n    margin-top: 6px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    position: absolute;\n    right: 0;\n    margin-top: 4px;\n    transform-origin: top;\n    transition: 0.2s;\n\n    ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Component = React.memo(function (props) {
  var _React$useState = React.useState(props.defaultExpanded),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isMenuVisible = _React$useState2[0],
      setIsMenuVisible = _React$useState2[1];

  var _React$useState3 = React.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      searchValue = _React$useState4[0],
      setSearchValue = _React$useState4[1];

  var changeSearchValue = React.useCallback(function (event) {
    setSearchValue(event.target.value);
  }, [searchValue]);
  var clickBody = React.useCallback(function (e) {
    e.preventDefault();
    setIsMenuVisible(!isMenuVisible);
  }, [isMenuVisible]);
  var clickOutside = React.useCallback(function (e) {
    e.preventDefault();
    setIsMenuVisible(false);
    setSearchValue('');
  }, [isMenuVisible]);
  var changeValue = React.useCallback(function (value) {
    if (props.values.includes(value)) {
      var newValues = props.values.filter(function (x) {
        return x !== value;
      });
      props.onChange(newValues);
    } else {
      var _newValues = [].concat(_toConsumableArray(props.values), [value]);

      props.onChange(_newValues);
    }
  }, [props.values, props.onChange]);
  var filteredItems = React.useMemo(function () {
    var items = props.items.filter(function (item) {
      return item.text.includes(searchValue);
    });
    return items;
  }, [searchValue]);
  var keyDownInInput = React.useCallback(function (e) {
    if (e.keyCode === 8 && searchValue === '') {
      var slicedItem = props.values.slice(0, -1);
      props.onChange(slicedItem);
    }
  }, [props.values, searchValue, props.onChange]);
  return /*#__PURE__*/React.createElement(Wrap, {
    className: props.className,
    width: props.width
  }, /*#__PURE__*/React.createElement(Inner, null, /*#__PURE__*/React.createElement(ClickOutside.Component, {
    onClickOutside: clickOutside,
    inactive: !isMenuVisible
  }, /*#__PURE__*/React.createElement(Body.Component, {
    onClick: clickBody,
    items: props.items,
    values: props.values,
    placeholder: props.placeholder,
    isMenuVisible: isMenuVisible,
    diff: props.diff,
    isError: props.isError,
    onChangeSearchValue: changeSearchValue,
    searchValue: searchValue,
    onKeydown: keyDownInInput
  }), filteredItems.length ? /*#__PURE__*/React.createElement(StyledItemList, {
    filteredItems: filteredItems,
    isVisible: isMenuVisible,
    items: props.items,
    onClickItem: changeValue,
    values: props.values
  }) : /*#__PURE__*/React.createElement(NotFoundText, {
    isVisible: isMenuVisible
  }, "\"", searchValue, "\"\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"))), /*#__PURE__*/React.createElement(ErrorMessage.Component, {
    errored: props.isError,
    message: props.errorMessage
  }));
});
exports.Component = Component;
Component.displayName = 'DropdownMultiple';
/**
 * Styles
 */

var Wrap = _theme.default.div(_templateObject(), function (props) {
  return props.width || '100%';
});

var Inner = _theme.default.div(_templateObject2());

var StyledItemList = (0, _theme.default)(ItemList.Component)(_templateObject3(), function (props) {
  return props.isVisible ? "\n        visibility: visible;\n        transform: scaleY(1);\n    " : "\n        visibility: hidden;\n        transform: scaleY(0);\n    ";
});

var NotFoundText = _theme.default.div(_templateObject4(), function (props) {
  return props.isVisible ? 'block' : 'none';
}, function (props) {
  return props.theme.colors.grayScale.S0;
}, function (props) {
  return props.theme.shadows.dropShadow.L5;
}, function (props) {
  return props.theme.colors.grayScale.S50;
});
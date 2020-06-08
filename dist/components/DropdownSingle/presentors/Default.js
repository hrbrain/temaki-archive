"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

var React = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../../modules/theme"));

var ClickOutside = _interopRequireWildcard(require("../../../modules/ClickOutside"));

var IconFiles = _interopRequireWildcard(require("../../../lib/iconFiles"));

var Icon = _interopRequireWildcard(require("../../Icon"));

var ItemList = _interopRequireWildcard(require("../ItemList"));

var ErrorMessage = _interopRequireWildcard(require("../../lib/FormErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    display: ", ";\n    background: ", ";\n    border-radius: 6px;\n    box-shadow: ", ";\n    max-height: 204px;\n    overflow-y: auto;\n    z-index: 1;\n    color: ", ";\n    word-break: break-all;\n    padding: 12px;\n    margin-top: 6px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    border: none;\n    background: none;\n    &:focus {\n        outline: 0;\n    }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    padding-right: 4px;\n    width: calc(100% - 28px);\n    transition: border-color 0.15s;\n    outline: 0;\n    &.focused {\n        border-color: ", ";\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    padding-right: 4px;\n    width: calc(100% - 28px);\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    left: 0;\n    width: 100%;\n    transition: all 0.2s;\n    transform-origin: top;\n    ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    min-height: 40px;\n    position: relative;\n    display: flex;\n    padding: 8px 12px;\n    border: 1px solid\n        ", ";\n    border-radius: 6px;\n    user-select: none;\n    font-size: 14px;\n    cursor: pointer;\n\n    background-color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 12px;\n    top: 50%;\n    transform: translateY(-50%);\n    transition: 0.2s;\n    &.visible {\n        transform: translateY(-50%) rotate(180deg);\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

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

var Component = React.memo(function (props) {
  var inputRef = React.useRef(null);
  React.useEffect(function () {
    if (inputRef.current && props.isMenuVisible) inputRef.current.focus();
  }, [props.isMenuVisible]);
  var filteredItems = React.useMemo(function () {
    var items = props.items.filter(function (item) {
      return item.text.includes(props.searchValue);
    });
    return items;
  }, [props.searchValue]);
  return /*#__PURE__*/React.createElement(Wrap, {
    width: props.width,
    className: props.className
  }, /*#__PURE__*/React.createElement(Inner, null, /*#__PURE__*/React.createElement(ClickOutside.Component, {
    onClickOutside: props.onClickOutside,
    inactive: !props.isMenuVisible
  }, /*#__PURE__*/React.createElement(Body, {
    "data-test": "body",
    isMenuVisible: props.isMenuVisible,
    isError: props.isError,
    onClick: props.onClick,
    diff: props.diff
  }, props.isMenuVisible ? /*#__PURE__*/React.createElement(SelectorInput, null, props.showTextBySelected(props.items, props.value), /*#__PURE__*/React.createElement(Input, {
    "data-test": "input",
    type: "text",
    value: props.searchValue,
    onChange: props.onChangeSearchValue,
    onKeyDown: props.onKeyDown,
    ref: inputRef
  })) : /*#__PURE__*/React.createElement(Text, {
    "data-test": "text"
  }, props.showTextBySelected(props.items, props.value)), /*#__PURE__*/React.createElement(IconWrap, {
    onClick: props.onClick
  }, /*#__PURE__*/React.createElement(DropdownIcon, {
    className: props.isMenuVisible ? 'visible' : '',
    svg: IconFiles.icons.DropdownOff,
    size: "24px"
  }))), filteredItems.length ? /*#__PURE__*/React.createElement(StyledItemList, {
    value: props.value,
    filteredItems: filteredItems,
    onClickItem: props.onClickMenuItem,
    items: props.items,
    isVisible: props.isMenuVisible,
    onBlurSearchValue: props.onBlurSearchValue
  }) : /*#__PURE__*/React.createElement(NotFoundText, {
    isVisible: props.isMenuVisible
  }, "\"", props.searchValue, "\"\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"))), /*#__PURE__*/React.createElement(ErrorMessage.Component, {
    message: props.errorMessage,
    errored: props.isError
  }));
});
/**
 * Styles
 */

exports.Component = Component;

var Wrap = _theme.default.div(_templateObject(), function (props) {
  return props.width || '100%';
});

var Inner = _theme.default.div(_templateObject2());

var IconWrap = _theme.default.div(_templateObject3());

var DropdownIcon = (0, _theme.default)(Icon.Component)(_templateObject4());

var Body = _theme.default.div(_templateObject5(), function (props) {
  if (props.isError) {
    return props.theme.colors.utilities.red.default;
  }

  if (props.isMenuVisible) {
    return props.theme.colors.utilities.highlightGreen.default;
  }

  return props.theme.colors.grayScale.S10;
}, function (props) {
  return props.diff ? props.theme.colors.utilities.paleYellow : 'inherit';
});

var StyledItemList = (0, _theme.default)(ItemList.Component)(_templateObject6(), function (props) {
  return props.isVisible ? "\n        visibility: visible;\n        transform: scaleY(1);\n    " : "\n        visibility: hidden;\n        transform: scaleY(0);\n    ";
});

var Text = _theme.default.div(_templateObject7());

var SelectorInput = _theme.default.div(_templateObject8(), function (props) {
  return props.theme.colors.utilities.highlightGreen.default;
});

var Input = _theme.default.input(_templateObject9());

var NotFoundText = _theme.default.div(_templateObject10(), function (props) {
  return props.isVisible ? "block" : "none";
}, function (props) {
  return props.theme.colors.grayScale.S0;
}, function (props) {
  return props.theme.shadows.dropShadow.L5;
}, function (props) {
  return props.theme.colors.grayScale.S50;
});
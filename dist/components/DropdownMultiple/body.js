"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

var React = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../modules/theme"));

var IconFiles = _interopRequireWildcard(require("../../lib/iconFiles"));

var Icon = _interopRequireWildcard(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    border: none;\n    background: none;\n    &:focus {\n        outline: 0;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    padding-right: 4px;\n    width: calc(100% - 28px);\n    transition: border-color 0.15s;\n    outline: 0;\n    &.focused {\n        border-color: ", ";\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    background: ", ";\n    color: ", ";\n    padding: 0 4px;\n    margin: 4px 8px 4px 0px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    padding: 4px 4px 4px 0;\n    width: calc(100% - 28px);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    min-height: 40px;\n    position: relative;\n    ", "\n    display: flex;\n    align-items: center;\n    padding: 0px 12px;\n    border: 1px solid\n        ", ";\n    border-radius: 6px;\n    user-select: none;\n    font-size: 14px;\n    cursor: pointer;\n\n    background-color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 12px;\n    top: 50%;\n    transform: translateY(-50%);\n    transition: 0.2s;\n    &.visible {\n        transform: translateY(-50%) rotate(180deg);\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

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
  return /*#__PURE__*/React.createElement(Body, {
    "data-test": "body",
    onClick: props.onClick,
    isMenuVisible: props.isMenuVisible,
    isError: props.isError,
    diff: props.diff,
    width: props.width
  }, props.isMenuVisible ? /*#__PURE__*/React.createElement(SelectorInput, null, showTextBySelected(props.items, props.values, props.placeholder), /*#__PURE__*/React.createElement(Input, {
    "data-test": "input",
    type: "text",
    value: props.searchValue,
    onChange: props.onChangeSearchValue,
    ref: inputRef,
    onKeyDown: props.onKeydown
  })) : /*#__PURE__*/React.createElement(Text, {
    "data-test": "text"
  }, showTextBySelected(props.items, props.values, props.placeholder)), /*#__PURE__*/React.createElement(IconWrap, {
    onClick: props.onClick
  }, /*#__PURE__*/React.createElement(DropdownIcon, {
    className: props.isMenuVisible ? 'visible' : '',
    svg: IconFiles.icons.DropdownOff,
    size: "24px"
  })));
});
exports.Component = Component;

var showTextBySelected = function showTextBySelected(items, values, placeholder) {
  if (values.length <= 0) {
    return placeholder || '';
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, values.map(function (value, index) {
    return renderText(value, index, items);
  }));
};

var renderText = function renderText(value, key, items) {
  var item = items.find(function (item) {
    return item.value === value;
  });

  if (!item) {
    throw new Error("Items don't have the value");
  }

  return /*#__PURE__*/React.createElement(InnerText, {
    key: key
  }, item.text);
};
/**
 * Styles
 */


var IconWrap = _theme.default.div(_templateObject());

var DropdownIcon = (0, _theme.default)(Icon.Component)(_templateObject2());

var Body = _theme.default.div(_templateObject3(), function (props) {
  return props.width ? "width: ".concat(props.width, ";") : '';
}, function (props) {
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

var Text = _theme.default.div(_templateObject4());

var InnerText = _theme.default.div(_templateObject5(), function (props) {
  return props.theme.colors.primary.N95;
}, function (props) {
  return props.theme.colors.primary.default;
});

var SelectorInput = _theme.default.div(_templateObject6(), function (props) {
  return props.theme.colors.utilities.highlightGreen.default;
});

var Input = _theme.default.input(_templateObject7());
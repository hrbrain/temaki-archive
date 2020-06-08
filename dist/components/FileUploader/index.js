"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

var React = _interopRequireWildcard(require("react"));

var Theme = _interopRequireWildcard(require("../../modules/theme"));

var ReactDropzone = _interopRequireWildcard(require("react-dropzone"));

var IconFiles = _interopRequireWildcard(require("../../lib/iconFiles"));

var Icon = _interopRequireWildcard(require("../Icon"));

var ErrorMessage = _interopRequireWildcard(require("../lib/FormErrorMessage"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    width: 24px;\n    height: 24px;\n    top: 50%;\n    right: 24px;\n    cursor: pointer;\n    transform: translateY(-50%);\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    max-width: 248px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 13px;\n    margin-left: 4px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 7px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    display: inline-flex;\n    line-height: 40px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    text-align: center;\n    height: 40px;\n    padding: 0 44px 0 16px;\n    border-radius: 6px;\n    border: 1px dashed\n        ", ";\n    &.attach {\n        border: 1px solid\n            ", ";\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    width: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Utils
 */
var styled = Theme.default;
var iconSize = '24px';
/**
 * Props
 */

/**
 * Component
 */
var Component = React.memo(function (props) {
  var onDrop = React.useCallback(function (files) {
    var file = files[0];
    if (!file) return;
    props.onChange && props.onChange(file);
  }, [props.onChange]);
  var dropzone = ReactDropzone.useDropzone({
    onDrop: onDrop,
    accept: props.accept
  });
  var remove = React.useCallback(function (e) {
    e.stopPropagation();
    props.onChange && props.onChange(null);
  }, [props.onChange]);
  return /*#__PURE__*/React.createElement(Wrap, dropzone.getRootProps({
    width: props.width,
    className: props.className
  }), /*#__PURE__*/React.createElement(FileBox, {
    errored: props.errored
  }, /*#__PURE__*/React.createElement(Input, dropzone.getInputProps()), /*#__PURE__*/React.createElement(FileItems, null, props.fileName ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FileIcon, {
    svg: IconFiles.icons.Attachment,
    size: iconSize
  }), /*#__PURE__*/React.createElement(FileLabel, null, props.fileName), renderRemoveButton(remove)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FileIcon, {
    svg: IconFiles.icons.Dragdrop,
    size: iconSize
  }), /*#__PURE__*/React.createElement(FileLabel, null, "\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u307E\u305F\u306F\u30C9\u30E9\u30C3\u30B0&\u30C9\u30ED\u30C3\u30D7")))), /*#__PURE__*/React.createElement(ErrorMessage.Component, {
    message: props.errorMessage,
    errored: props.errored
  }));
});
exports.Component = Component;

function renderRemoveButton(onClick) {
  return /*#__PURE__*/React.createElement(Theme.ThemeConsumer, null, function (color) {
    return /*#__PURE__*/React.createElement(RemoveButton, {
      onClick: onClick
    }, /*#__PURE__*/React.createElement(Icon.Component, {
      svg: IconFiles.icons.Remove,
      size: "24px",
      color: color.colors.utilities.red.default
    }));
  });
}
/**
 * Styles
 */


var Wrap = styled.div(_templateObject(), function (props) {
  return props.width ? props.width : '100%';
});
var FileBox = styled.div(_templateObject2(), function (props) {
  return props.errored ? props.theme.colors.utilities.red.default : props.theme.colors.primary.default;
}, function (props) {
  return props.errored ? props.theme.colors.utilities.red.default : props.theme.colors.primary.default;
});
var FileItems = styled.div(_templateObject3());
var FileIcon = styled(Icon.Component)(_templateObject4());
var FileLabel = styled.span(_templateObject5());
var Input = styled.input(_templateObject6());
var RemoveButton = styled.div(_templateObject7());
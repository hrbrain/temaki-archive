"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTheme = exports.keyframes = exports.isStyledComponent = exports.css = exports.createGlobalStyle = exports.ThemeProvider = exports.ThemeContext = exports.ThemeConsumer = exports.StyleSheetManager = exports.ServerStyleSheet = exports.default = exports.defaultTheme = void 0;

var styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var defaultTheme = {
  colors: {
    primary: {
      default: 'rgb(51, 51, 51)',
      N20: 'rgb(92, 92, 92)',
      N40: 'rgb(133, 133, 133)',
      N60: 'rgb(173, 173, 173)',
      N80: 'rgb(214, 214, 214)',
      N95: 'rgb(245, 245, 245)',
      P20: 'rgb(41, 41, 41)',
      P40: 'rgb(31, 31, 31)',
      P60: 'rgb(20, 20, 20)',
      P80: 'rgb(10, 10, 10)',
      P95: 'rgb(0, 0, 0)'
    },
    grayScale: {
      S0: 'rgb(255, 255, 255)',
      S5: 'rgb(245, 245, 245)',
      S10: 'rgb(234, 234, 234)',
      S20: 'rgb(214, 214, 214)',
      S30: 'rgb(193, 193, 193)',
      S40: 'rgb(173, 173, 173)',
      S50: 'rgb(153, 153, 153)',
      S60: 'rgb(133, 133, 133)',
      S70: 'rgb(112, 112, 112)',
      S80: 'rgb(92, 92, 92)',
      S90: 'rgb(71, 71, 71)',
      S100: 'rgb(51, 51, 51)'
    },
    utilities: {
      red: {
        default: 'rgb(224, 85, 72)',
        N20: 'rgb(230, 119, 109)',
        N40: 'rgb(236, 153, 145)',
        N60: 'rgb(243, 187, 182)',
        N80: 'rgb(249, 221, 218)',
        N90: 'rgb(251, 238, 236)',
        N95: 'rgb(253, 246, 246)',
        P20: 'rgb(179, 68, 57)',
        P40: 'rgb(134, 51, 43)',
        P60: 'rgb(89, 34, 28)'
      },
      blue: 'rgb(48, 120, 191)',
      highlightGreen: {
        default: 'rgb(114, 206, 92)',
        N20: 'rgb(142, 216, 125)',
        N40: 'rgb(170, 226, 157)',
        N60: 'rgb(199, 235, 190)',
        N80: 'rgb(227, 245, 222)',
        N90: 'rgb(240, 250, 238)',
        N95: 'rgb(248, 252, 247)',
        P20: 'rgb(68, 123, 55)',
        P40: 'rgb(91, 164, 73)',
        P60: 'rgb(114, 206, 92)'
      },
      paleRed: 'rgb(253, 246, 246)',
      paleGreen: 'rgb(248 ,252, 247)',
      paleBlue: 'rgb(245, 249, 252)',
      paleYellow: 'rgb(255, 255, 233)'
    },
    text: {
      default: '#333'
    }
  },
  shadows: {
    boxShadow: {
      L1: '0 0 2px 0 rgba(0, 0, 0, 0.16)',
      L2: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
      L3: '0 2px 5px 0 rgba(0, 0, 0, 0.16)',
      L4: '0 3px 8px 0 rgba(0, 0, 0, 0.16)',
      L5: '0 5px 11px 0 rgba(0, 0, 0, 0.16)'
    },
    dropShadow: {
      L1: '0 0 2px rgba(0, 0, 0, 0.16)',
      L2: '0 1px 3px rgba(0, 0, 0, 0.16)',
      L3: '0 2px 5px rgba(0, 0, 0, 0.16)',
      L4: '0 3px 8px rgba(0, 0, 0, 0.16)',
      L5: '0 5px 11px rgba(0, 0, 0, 0.16)'
    }
  },
  typography: {
    pc: {
      body: {
        XL: '18px',
        L: '16px',
        default: '14px',
        S: '12px'
      },
      heading: {
        H1: '24px',
        H2: '22px',
        H3: '20px',
        H4: '18px',
        H5: '16px',
        H6: '14px'
      }
    },
    sp: {
      body: {
        XL: '18px',
        L: '16px',
        default: '14px',
        S: '12px'
      },
      heading: {
        H1: '24px',
        H2: '22px',
        H3: '20px',
        H4: '18px',
        H5: '16px',
        H6: '14px'
      }
    }
  }
};
exports.defaultTheme = defaultTheme;
var casted = styledComponents;
var styled = casted.default,
    ServerStyleSheet = casted.ServerStyleSheet,
    StyleSheetManager = casted.StyleSheetManager,
    createGlobalStyle = casted.createGlobalStyle,
    css = casted.css,
    isStyledComponent = casted.isStyledComponent,
    keyframes = casted.keyframes,
    withTheme = casted.withTheme;
exports.withTheme = withTheme;
exports.keyframes = keyframes;
exports.isStyledComponent = isStyledComponent;
exports.css = css;
exports.createGlobalStyle = createGlobalStyle;
exports.StyleSheetManager = StyleSheetManager;
exports.ServerStyleSheet = ServerStyleSheet;
var ThemeConsumer = casted.ThemeConsumer;
exports.ThemeConsumer = ThemeConsumer;
var ThemeContext = casted.ThemeContext;
exports.ThemeContext = ThemeContext;
var ThemeProvider = casted.ThemeProvider;
/* eslint-disable import/no-default-export */

exports.ThemeProvider = ThemeProvider;
var _default = styled;
/* eslint-enable import/no-default-export */

exports.default = _default;
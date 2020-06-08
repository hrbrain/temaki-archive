"use strict";

var babelOptions = {
  plugins: ['require-context-hook']
};
/* eslint-disable @typescript-eslint/no-require-imports */

module.exports = require('ts-jest').createTransformer({
  babelConfig: babelOptions
});
/* eslint-enable @typescript-eslint/no-require-imports */
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "eslint-plugin-prettier",
    "@typescript-eslint",
    'react',
    "eslint-plugin-import",
    "jest"
  ],
  parserOptions: {
    ecmaVersion: 2017,
    eecmaFeatures: {
      jsx: true
    },
    sourceType: "module",
    useJSXTextNode: false,
    warnOnUnsupportedTypeScriptVersion: true,
    project: './tsconfig.json'
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  env: {
    "jest/globals": true,
    "node": true
  },
  rules: {
    "prettier/prettier": [
      "error"
    ],
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/func-call-spacing": "error",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "none",
          requireLast: false
        },
        singleline: {
          delimiter: "semi",
          requireLast: false
        }
      }
    ],
    "@typescript-eslint/member-naming": "error",
    "@typescript-eslint/member-ordering": [
      "error",
      { default: ["field", "constructor", "method"] }
    ],
    "@typescript-eslint/no-angle-bracket-type-assertion": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-object-literal-type-assertion": [
      "error",
      { allowAsParameter: false }
    ],
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": [
      "error",
      { allowDestructuring: true }
    ],
    "@typescript-eslint/no-triple-slash-reference": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "_", argsIgnorePattern: "_" }
    ],
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "react/display-name": "off",
    "react/prop-types": "off",
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "react/jsx-no-bind": "error",
    "import/no-default-export": "error",
    "import/default": "off",
    "import/no-unresolved": "off"
  }
}

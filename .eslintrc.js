module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:no-unsanitized/DOM",
    "plugin:jest-dom/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier", "jest-dom", "testing-library"],
  root: true,
  rules: {
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": ["error"],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "@typescript-eslint/no-use-before-define": ["error", { classes: false, functions: false }],
    "@typescript-eslint/no-non-null-assertion": "off",
    "import/order": [
      "error",
      {
        "alphabetize": { order: "asc", caseInsensitive: false },
        "groups": ["builtin", "external", "internal", "index", "object", "parent", "sibling", "unknown"],
        "newlines-between": "never",
      },
    ],
    "import/namespace": [2, { allowComputed: true }],
    "import/newline-after-import": ["error", { count: 1 }],
    "import/no-duplicates": ["error", { considerQueryString: true }],
    "import/no-cycle": "error",
    "no-debugger": "warn",
    "no-nested-ternary": ["error"],
    "prettier/prettier": ["error"],
    "quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: false }],
    "react/prop-types": "warn",
    "react/react-in-jsx-scope": "off", // Not required since React v17
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
  },
  settings: {
    "import/extensions": [".ts", ".tsx"],
    "react": { version: "detect" },
  },
};

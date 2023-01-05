module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    env: {
        browser: false,
        node: true,
        es6: true
    },
    ignorePatterns: [
        "!.github"
    ],
    plugins: [
        "@typescript-eslint",
        "monorepo",
        "react",
        "json-format",
        "yaml",
        "html"
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:monorepo/recommended",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint"
    ],
    settings: {
        react: {
            version: "detect"
        },
        "html/report-bad-indent": "warn"
    },
    rules: {
        "linebreak-style": [
            "error",
            "unix"
        ],
        quotes: [
            "warn",
            "single",
            {
                "avoidEscape": true
            }
        ],
        semi: [
            "error",
            "always"
        ],
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "argsIgnorePattern": "_"
            }
        ],
        "@typescript-eslint/array-type": "error"
    },
    "overrides": [
        {
          "files": [
            "*.ts",
            "*.tsx"
          ],
          "extends": [],
          "rules": {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-empty-function": "warn",
            "@typescript-eslint/ban-types": "warn",
            "@typescript-eslint/type-annotation-spacing": [
              "off",
              {
                "before": true,
                "after": true
              }
            ]
          }
        }
      ]
};

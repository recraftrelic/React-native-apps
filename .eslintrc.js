module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "import/no-extraneous-dependencies": ["error", { "devDependencies": false, "optionalDependencies": false }],
        "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
        "no-console": ["error", { "allow": ["log", "error", "warn"] }],
        "no-multiple-empty-lines": "off",
        "object-curly-newline": "off",
        "import/no-cycle": "off",
        "react/destructuring-assignment": "off",
        "react/no-access-state-in-setstate": "off",
        "react/jsx-props-no-spreading": "off"
    }
};

ESLint-plugin-lodash
====================

lodash specific linting rules for ESLint

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

    npm install eslint

If you installed `ESLint` globally, you have to install lodash plugin globally too. Otherwise, install it locally.

    $ npm install eslint-plugin-lodash-destructuring

The rules are specifically written to target ES6 JavaScript, so you'll want to
use the [babel-eslint](https://github.com/babel/babel-eslint) parser.

# Configuration

Add `plugins` section and specify ESLint-plugin-lodash as a plugin.

```json
{
  "parser": "babel-eslint",
  "plugins": [
    "lodash-destructuring"
  ]
}
```

Finally, enable all of the rules that you would like to use.

```json
{
  "rules": {
    "lodash-destructuring": 1,
  }
}
```

# List of supported rules

* [import](docs/rules/lodash-destructuring.md): Prevent importing the entire lodash library.

# License

ESLint-plugin-lodash is licensed under the [MIT License](LICENSE).

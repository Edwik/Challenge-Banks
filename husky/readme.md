# Pre commit

1. Check Typescrip files.

```
Option 'project' cannot be mixed with source files on a command line.
```

```
{
  "husky": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "**/*.ts": "tsc-files --noEmit"
  }
}
```

2. Check Console Logs.

eslintrc.js:

```
module.exports = {
      extends: ['./.eslintrc.js'], // it contains other rules
      rules: {
        'no-console': 'error',
      },
    };
```

huskyrc.js:

```
module.exports = {
      hooks: {
        'pre-commit': 'lint-staged'
      }
    }
```

and package json:

```
"scripts": {
      "lint:eslint": "eslint --ext .js,.vue --ignore-path .gitignore --ignore-path .eslintignore .",
    },
    "lint-staged": {
    "*.{js,vue}": [
      "npm run lint:eslint"
    ],
  }

```

Edit: also you need install "lint-staged" package.

3. Preventing Untested Code from Being committed Using Husky.
   Forcing Myself to Write Unit Tests
   https://www.telerik.com/blogs/forcing-myself-to-write-unit-tests

```
{
// ...
"husky": {
"hooks": {
"pre-commit": "npm test",
"pre-push": "npm test"
}
}
}
```

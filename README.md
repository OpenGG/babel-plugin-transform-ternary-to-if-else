# babel-plugin-transform-ternary-to-if-else
Transform ternary operators (conditional expressions) into if-else statements

## Demo

[Live demo](https://opengg.github.io/babel-plugin-transform-ternary-to-if-else/)

## Example

**In**

```javascript
const val = a1 ? a2 : a3;
```

**Out**

```javascript
const val = function() {
  if (a1) {
    return a2;
  }
  return a3;
}();
```

## Installation

```sh
npm install babel-plugin-transform-ternary-to-if-else
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-ternary-to-if-else"]
}
```

### Via CLI

```sh
babel --plugins transform-ternary-to-if-else script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-ternary-to-if-else"]
});
```

<p align="center">
  <img src="docs/logo.png" width="400"><br><br>
  <img src="https://img.shields.io/travis/pedrohenriquepires/vanilla-enum.svg">
  <img src="https://img.shields.io/npm/dt/vanilla-enum.svg">
  <img src="https://img.shields.io/bundlephobia/min/vanilla-enum.svg">
  <img src="https://img.shields.io/npm/l/vanilla-enum.svg">
  <img src="https://img.shields.io/npm/v/vanilla-enum.svg">
</p>

# Instalation
```bash
npm install vanilla-enum
# or with yarn
yarn add vanilla-enum
```

# Basic usage
`Enum(object[, options])`
```js
import Enum from 'vanilla-enum'

const GENDER = new Enum({
  Male: {
    value: 1,
    description: "Male 🙋‍♂️"
  },
  Female: {
    value: 2,
    description: "Female 🙋‍♀️"
  }
}, {
  ignoreCase: false // default
})

GENDER.Male // 1
GENDER.getDescription(2) // "Female 🙋‍♀️"
GENDER.Male.toString() // "Male 🙋‍♂️"
GENDER.Female.is('Female 🙋‍♀️') // true
GENDER.Female.is('FEMALE 🙋‍♀️') // false
GENDER.Female.is('FEMALE 🙋‍♀️', { ignoreCase: true }) // true
```

#### Options

| name       | type    | default | description |
| ---------- | ------- | ------- | ----------- |
| ignoreCase | boolean | false | Ignore case when using the `is` function |

# Custom properties

All properties added at the enum item object have getters

```js
import Enum from 'vanilla-enum'

const GENDER = new Enum({
  Male: {
    value: 1,
    description: "🙋‍♂️",
    isSelected: true
  },
  Female: {
    value: 2,
    description: "🙋‍♀️"
  }
})

GENDER.getIsSelected(GENDER.Male) // true
GENDER.getIsSelected(GENDER.Female) // undefined
```

## License
Vanilla Enum uses the [MIT](https://opensource.org/licenses/MIT) license.

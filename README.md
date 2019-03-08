<p align="center">
  <img src="docs/logo.png" width="400"><br><br>
  <img src="https://img.shields.io/npm/dt/vanilla-enum.svg">
  <img src="https://img.shields.io/npm/l/vanilla-enum.svg">
  <img src="https://img.shields.io/bundlephobia/min/vanilla-enum.svg">
  <img src="https://img.shields.io/travis/pedrohenriquepires/vanilla-enum.svg">
</p>

# Basic usage
`Enum(object[, options])`
```js
import Enum from 'vanilla-enum'

const GENDER = new Enum({
  Male: {
    value: 1,
    description: "Male"
  },
  Female: {
    value: 2,
    description: "Female"
  }
})

GENDER.Male                // 1
GENDER.getDescription(2)   // Female
GENDER.Male.toString()     // Male
GENDER.Female.is('Female') // true
```

#### Options

| name       | type    | required | default | description |
| ---------- | ------- | -------- | ------- | ----------- |
| ignoreCase | boolean | no | false | Ignore case when using the `is` function |

# Custom properties

All properties added at the enum item object have getters

```js
import Enum from 'vanilla-enum'

const GENDER = new Enum({
  Male: {
    value: 1,
    description: "Male",
    isSelected: true
  },
  Female: {
    value: 2,
    description: "Female"
  }
})

GENDER.getIsSelected(GENDER.Male)   // true
GENDER.getIsSelected(GENDER.Female) // undefined
```

## License
Vanilla Enum uses the [MIT](https://opensource.org/licenses/MIT) license.

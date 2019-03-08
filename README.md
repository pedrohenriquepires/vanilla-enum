# Vanilla Enum

Better documentation soon ;)

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

console.log(GENDER.Male)                // 1
console.log(GENDER.getDescription(2))   // Female
console.log(GENDER.Male.toString())     // Male
console.log(GENDER.Female.is('Female')) // true
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

console.log(GENDER.getIsSelected(GENDER.Male))   // true
console.log(GENDER.getIsSelected(GENDER.Female)) // undefined
```

## License
Vanilla Enum uses the [MIT](https://opensource.org/licenses/MIT) license.

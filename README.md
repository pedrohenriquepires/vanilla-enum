# Vanilla Enum

Better documentation soon ;)

# Basic usage
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
    selected: true
  },
  Female: {
    value: 2,
    description: "Female"
  }
})

console.log(GENDER.getSelected(GENDER.Male))   // true
console.log(GENDER.getSelected(GENDER.Female)) // undefined
```
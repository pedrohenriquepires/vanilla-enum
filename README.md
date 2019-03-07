# Vanilla Enum

Better documentation soon ;)

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

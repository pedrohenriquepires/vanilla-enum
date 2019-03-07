# Enum Helper

Better documentation soon ;)

```js
const Enum = require('vanilla-enum')

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

console.log(SEXO.Male)                // 1
console.log(SEXO.getDescription(2))   // Female
console.log(SEXO.Male.toString())     // Male
console.log(SEXO.Female.is('Female')) // true
```
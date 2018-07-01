# Enum Helper

```js
const SEXO = new EnumHelper({
  Masculino: {
    value: 1,
    description: "Masculino"
  },
  Feminino: {
    value: 2,
    description: "Feminino"
  }
})

console.log(SEXO.Masculino) // 1
console.log(SEXO.getDescription(2)) // Feminino
```
class EnumHelper {
  constructor(obj) {
    this.valuesObject = Object.keys(obj).reduce((acumulador, atual) => {
      acumulador[obj[atual].value] = atual

      return acumulador
    }, {})

    this.descriptionsObject = Object.keys(obj).reduce((acumulador, atual) => {
      acumulador[obj[atual].value] = obj[atual].description

      return acumulador
    }, {})

    const returnEnum = Object.keys(obj).reduce((acumulador, atual) => {
      acumulador[atual] = obj[atual].value

      return acumulador
    }, this.getValueObject.bind(this))

    returnEnum.getDescription = this.getDescription.bind(this)
    returnEnum.getKeys = () => Object.keys(obj)

    return Object.freeze(returnEnum);
  }

  getValueObject(value) {
    return this.valuesObject[value]
  }

  getDescription(value) {
    return this.descriptionsObject[value]
  }
}

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

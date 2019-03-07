module.exports = class {
  constructor(obj, options = {}) {
    this.valuesObject = Object.keys(obj).reduce((acumulator, item) => {
      acumulator[obj[item].value] = item

      return acumulator
    }, {})

    this.descriptionsObject = Object.keys(obj).reduce((acumulator, item) => {
      acumulator[obj[item].value] = obj[item].description

      return acumulator
    }, {})

    const returnEnum = Object.keys(obj).reduce((acumulator, item) => {
      const self = this

      acumulator[item] = obj[item].value

      acumulator[item].__proto__.toString = function() {
        return self.getDescription(this)
      }

      acumulator[item].__proto__.is = function(comparator) {
        comparator = options.ignoreCase ? comparator.toLowerCase() : comparator
        const value = options.ignoreCase ? self.getDescription(this).toLowerCase() : self.getDescription(this)
        
        return comparator === value
      }

      return acumulator
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

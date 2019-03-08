const capitalize = require('../utils/capitalize')

/** Class representing an Enum. */
class Enum {
  /**
   * @param {object} object The enum object
   * @param {object} options Enum options
   * @param {object} options.ignoreCase Ignore case in comparisons
   */
  constructor(object, options = {}) {
    // initialize objects
    this.valuesObject = this._mountValueObject(object)
    this.descriptionsObject = this._mountDescriptionObject(object)

    // create a new object with only public functions
    const returnEnum = this._mountEnumObject(object, options)
    returnEnum.getDescription = this.getDescription.bind(this)
    returnEnum.getKeys = () => Object.keys(object)

    // freeze this object to ensure immutability
    return Object.freeze(returnEnum)
  }

  /**
   * Used to mount an object with the enum items description
   */
  _mountDescriptionObject(obj) {
    return Object.keys(obj).reduce((acumulator, item) => {
      acumulator[obj[item].value] = obj[item].description

      return acumulator
    }, {})
  }

  /**
   * Used to mount an object with the enum items values as key
   */
  _mountValueObject(obj) {
    Object.keys(obj).reduce((acumulator, item) => {
      acumulator[obj[item].value] = item

      return acumulator
    }, {})
  }

  /**
   * Used to mount the enum object
   */
  _mountEnumObject(obj, options) {
    const enumObject = Object.keys(obj).reduce((acumulator, item) => {
      const self = this

      acumulator[item] = obj[item].value

      /**
       * @returns {*} The enum item description
       */
      acumulator[item].__proto__.toString = function() {
        return self.getDescription(this)
      }

      /**
       * Compare if the enum item is equals to a description
       * @param {*} description The description to compare
       * @returns {boolean} The result of the comparison
       */
      acumulator[item].__proto__.is = function(description) {
        description = options.ignoreCase ? description.toLowerCase() : description
        const value = options.ignoreCase ? self.getDescription(this).toLowerCase() : self.getDescription(this)
        
        return description === value
      }

      return acumulator
    }, value => this.valuesObject[value])

    this._mountDynamicGetters(obj, enumObject)

    return enumObject
  }

  /**
   * Used to mount dynamic getters for custom properties
   */
  _mountDynamicGetters(obj, enumObject) {
    Object.keys(obj).forEach(item => {
      const props = obj[item]
      this[obj[item].value] = {}

      Object.keys(props).forEach(prop => {
        if(/value|description/.test(prop)) {
          return
        }
        
        this[obj[item].value][prop] = obj[item][prop]

        if(!enumObject[`get${capitalize(prop)}`]) {
          enumObject[`get${capitalize(prop)}`] = value => this[value][prop]
        }
      })
    })
  }

  
  /**
   * Returns the enum item description
   * @param {*} value The enum item value
   * @returns {*} The description
   */
  getDescription(value) {
    return this.descriptionsObject[value]
  }
}

module.exports = Enum
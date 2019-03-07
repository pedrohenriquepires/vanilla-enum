const Enum = require('../lib/vanilla-enum')

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

describe('Enum', () => {
  it('getKeys must return ["Male", "Female"]', () => {
    const keys = GENDER.getKeys()

    expect(keys).toEqual(["Male", "Female"])
  })

  it('female gender raw value must be 2', () => {
    const female = GENDER.Female

    expect(female).toBe(2)
  })

  it('male gender toString must be "Male"', () => {
    const male = GENDER.Male.toString()

    expect(male).toBe("Male")
  })

  it('male gender is not equals to "MALE"', () => {
    const male = GENDER.Male

    expect(male.is("MALE")).toBe(false)
  })

  it('male gender is equals to "MALE" when ignoringCase', () => {
    const GENDER = new Enum({
      Male: {
        value: 1,
        description: "Male"
      }
    }, { ignoreCase: true })
    const male = GENDER.Male

    expect(male.is("MALE")).toBe(true)
  })
})
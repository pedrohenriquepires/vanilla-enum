const Enum = require('../lib/vanilla-enum')

const GENDER = new Enum({
  Male: {
    value: 1,
    description: "Male 🙋‍♂️",
    isSelected: true,
  },
  Female: {
    value: 2,
    description: "Female 🙋‍♀️",
  }
})

describe('Enum', () => {
  it('getKeys must return ["Male", "Female"]', () => {
    expect(GENDER.getKeys()).toEqual(["Male", "Female"])
  })

  it('female gender raw value must be 2', () => {
    expect(GENDER.Female).toBe(2)
  })

  it('male gender toString must be "Male"', () => {
    expect(GENDER.Male.toString()).toBe("Male 🙋‍♂️")
  })

  it('getIsSelected from Male must be true', () => {
    expect(GENDER.getIsSelected(1)).toBe(true)
  })

  it('getIsSelected from Female must be undefined', () => {
    expect(GENDER.getIsSelected(2)).toBe(undefined)
  })

  it('male gender is not equals to "MALE 🙋‍♂️"', () => {
    expect(GENDER.Male.is("MALE 🙋‍♂️")).toBe(false)
  })

  it('male gender is equals to "MALE 🙋‍♂️" using ignoreCase option', () => {
    expect(GENDER.Male.is("MALE 🙋‍♂️", { ignoreCase: true })).toBe(true)
  })

  it('male gender is equals to "MALE 🙋‍♂️" when ignorCase is true', () => {
    const GENDER = new Enum({
      Male: {
        value: 1,
        description: "Male 🙋‍♂️"
      }
    }, { ignoreCase: true })

    expect(GENDER.Male.is("MALE 🙋‍♂️")).toBe(true)
  })
})
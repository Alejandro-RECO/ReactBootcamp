const functions = require("./functions.js");

describe('multiply function', () => {
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE
    const a = 2
    const b = 4

    //ACT
    const result = functions.multiply(a, b)

    //ASSERT
    expect(result).toEqual(8)
  })

  it('It must return the type of multiply', () =>{
    //ARRANGE
    const a = 2
    const b = 4

    //ACT
    const result = functions.multiply(a, b)

    //ASSERT
    expect(typeof result).toEqual('number')
  })
});


describe('isNull function', () => {
  it('should be return null', () => {
    //ARRANGE
    const test = "a"
    const a = 1
    const b = 2
    //ACT

    const result = functions.isNull(test)

    //ASSERT
    expect(result).toEqual(null)

  });
  it('should return null with an array as argument', () => {
    //ARRANGE

    //ACT

    //ASSERT
    expect(functions.isNull([1, 2, 3])).toEqual(null)
  });
});

describe('checkTruthy function', () => {
  it('should be return false when I sent false', () => {
    //ARRANGE
    const a = false
  
    //ACT
      const result = functions.checkTruthy(a)
    //ASSERT
    expect(result).toEqual(false)
  });
  it('should be return true when I sent true', () => {
    //ARRANGE
    const b = true
  
    //ACT
      const result2 = functions.checkTruthy(b)
    //ASSERT
    expect(result2).toEqual(true)
  });
})

describe('addLastName function', () => {
  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGE
    const lastname = 'Perez'
    //ACT
    const result = functions.addLastName(lastname)
    //ASSERT
    expect(result).toEqual({
      firstname: "Pepito",
      lastname:"Perez"
    })
  });
  it('I should return Pepito as a fisrtname', () => {
    //ARRANGE
    const lastname = 'Perez'
    //ACT
    const result = functions.addLastName().firstname
    //ASSERT
    expect(result).toEqual("Pepito")
  });
})

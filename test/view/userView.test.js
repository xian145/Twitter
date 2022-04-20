const userView = require('./../../app/view/userView')

describe("Test for userView", () => {
    test('1. Return an error object when try to create a new user with an null payload', () => {
        const payload = null //se crea una variable con nada adentro
        const result = userView.createUser(payload) //se manda el payload a la clase userView

        expect(result.error).toMatch(/payload not found/) //compara que lo que le llegue sea lo mismo que lo que esta entre slash
    })

    test('2. Return an error object when try to create a new user with a payload with invalid properties', () => {
        const payload = {userName: null, name: 12, id: "id"}
        const result = userView.createUser(payload)
        expect(result.error).toMatch(/need to have a valid value/)
    })

    test('3. Return an error object when try to create a new user with a payload with missing properties', () => {
        const payload = {userName: "UserName"}
        const result = userView.createUser(payload)
        expect(result.error).toMatch(/you need to fill all the fields/)
    })
})
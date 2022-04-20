const userView = require('./../../app/view/userView')

describe("Test for userView", () => {
    test('1. Return an error object when try to create a new user with an null payload', () => {
        const payload = null //se crea una variable con nada adentro
        const result = userView.createUser(payload) //se manda el payload a la clase userView

        expect(result.error).toMatch(/payload no existe/) //compara que lo que le llegue sea lo mismo que lo que esta entre slash
    })
})
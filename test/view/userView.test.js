const userView = require('./../../app/view/userView')

describe("Test for userView", () => {
    test('1. Return an error object when try to create a new user with an null payload', () => {
        const payload = null
        const result = userView.createUser(payload)

        expect(result.error).toMatch(/payload no existe/)
    })
})
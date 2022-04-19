const userService = require('./../../app/services/userService')

describe('Test for userService', () => {
    test("1. Create a user for userService", () => {
        const user = userService.create(1, "Xian145", "Abraham Ariel") //se crea un objeto a partir de la clase userService utilizando el metodo estatico definido "create"
        //la clase userService en realidad solo es un metodo estatico
        expect(user.id).toBe(1)
        expect(user.userName).toBe("Xian145")
        expect(user.name).toBe("Abraham Ariel")
        expect(user.bio).not.toBeUndefined()
    })
})
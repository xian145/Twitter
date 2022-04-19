const user = require('../../app/modules/user')
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

    test("2. Get all user data in a list", () => {
        const user = userService.create(1, "Xian145", "Abraham Ariel")
        const userInfoInList = userService.getInfo(user)

        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("Xian145")
        expect(userInfoInList[2]).toBe("Abraham Ariel")
        expect(userInfoInList[3]).toBe("sin bio")
    })

    test('3. Update userName', () => {
        const user = userService.create(1, "Xian145", "Abraham Ariel")
        userService.updateUserName(user, "Xian")

        expect(user.userName).toBe("Xian")
    })

    test('4. Given a list of users give me the list of usernames', () => {
        const user1 = userService.create(1, "Xian145", "Abraham Ariel 1")
        const user2 = userService.create(2, "Xian146", "Abraham Ariel 2")
        const user3 = userService.create(3, "Xian147", "Abraham Ariel 3")
        const usernames = userService.getAllUserNames([user1, user2, user3])

        expect(usernames[0]).toBe("Xian145")
        expect(usernames[1]).toBe("Xian146")
        expect(usernames[2]).toBe("Xian147")
    })
})
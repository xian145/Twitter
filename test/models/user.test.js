const user = require('./../../app/modules/user') //llamamos aplicacion, que en este caso es una clase

describe('Unit test for User Class', () => {
    test('1. Create an user object', () => {
        const user1 = new user(1, "xian145", "Abraham Ariel", "Bio") //creamos el objeto con las cosas necesarias
        expect(user1.id).toBe(1)
        expect(user1.userName).toBe("xian145")
        expect(user1.name).toBe("Abraham Ariel")
        expect(user1.bio).toBe("Bio")
        expect(user1.dateCreated).not.toBeUndefined() //para segurarno que no este indefinido
        expect(user1.lastUpdate).not.toBeUndefined() //para segurarno que no este indefinido
    })
    test('2. add getters', () => {
        const user2 = new user(1, "xian145", "Abraham Ariel", "Bio")
        expect(user2.getUserName).toBe("xian145")
        expect(user2.getBio).toBe("Bio")
        expect(user2.getDateCreated).not.toBeUndefined()
        expect(user2.getLastUpdate).not.toBeUndefined()
    })
})
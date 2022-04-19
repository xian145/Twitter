const user = require('./../../app/modules/user') //llamamos aplicacion, que en este caso es una clase

describe('Unit test for User Class', () => {
    test('Create an user object', () => {
        const user1 = new user(1, "xian145", "Abraham Ariel", "Bio", "10/5/2018", "8/5/2022") //creamos el objeto con las cosas necesarias
        expect(user1.id).toBe(1)
        expect(user1.userName).toBe("xian145")
        expect(user1.name).toBe("Abraham Ariel")
        expect(user1.bio).toBe("Bio")
        expect(user1.dateCreated).toBe("10/5/2018")
        expect(user1.lastUpdate).toBe("8/5/2022")
    })
})
const userService = require("./../services/userService") //llamamos a la clase User

class userView{ //creacion de una nueva clase
    
    static createUser(payload) { //creamo un nuevo metodo estatico 
        return userService.create(payload)
    }

}

module.exports = userView
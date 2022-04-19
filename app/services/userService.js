const user = require("./../modules/user") //llamamos a la clase User

class userService{ //creacion de una nueva clase
    static create(id, userName, name) { //creamo un nuevo metodo estatico 
        return new user(id, userName, name, "sin bio") //nos regresa un nuevo usuario que tiene id, userName y name
    }
}

module.exports = userService
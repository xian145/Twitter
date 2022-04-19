const user = require("./../services/userService") //llamamos a la clase User

class userView{ //creacion de una nueva clase
    
    static createUser(payload) { //creamo un nuevo metodo estatico 
        const newUser = new user(payload)
        console.log(newUser);
    }

}

module.exports = userView
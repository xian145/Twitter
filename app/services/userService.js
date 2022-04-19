const user = require("./../modules/user") //llamamos a la clase User

class userService{ //creacion de una nueva clase
    
    static create(id, userName, name) { //creamo un nuevo metodo estatico 
        return new user(id, userName, name, "sin bio") //nos regresa un nuevo usuario que tiene id, userName y name
    }

    static getInfo(user) { //creando un nuevo metodo statico
        const list = [] //cremos una constante que sera la lista requerida
        list.push(user.id, user.userName, user.name, "sin bio") //introducimos a la lista las cosas que nos interesan
        return list //regresamos la lista a donde nos la pidieron
    }

}

module.exports = userService
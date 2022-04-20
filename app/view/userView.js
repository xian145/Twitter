const userService = require("./../services/userService") //llamamos a la clase User

class userView{
    static createUser (payload){
        if (payload === null){
           return {error: "payload not found"}
        }

        else if (!(typeof payload.userName === 'string') || !(typeof payload.name === 'string') || !(typeof payload.id === 'number')) {
            return {error: "need to have a valid value"}
        }
    } 
}

module.exports = userView
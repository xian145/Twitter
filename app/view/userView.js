const userService = require("./../services/userService") //llamamos a la clase User

class userView{
    static createUser (payload){
        if (payload === null){
           return {error:"payload not found"}
        }
    } 
}

module.exports = userView
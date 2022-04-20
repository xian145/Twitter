const userService = require("./../services/userService") //llamamos a la clase User

class userView{
    static createUser (payload){
        if (payload === null){
           return {error: "payload not found"}
        }

        else if (!(typeof payload.userName === 'string') || !(typeof payload.name === 'string') || !(typeof payload.id === 'number')) {
            if (payload.userName === undefined || payload.name === undefined || payload.id === undefined){
                return {error:"you need to fill all the fields"}
            }
            else
            return {error: "need to have a valid value"}
        }

        const user = userService.create(payload.id, payload.userName, payload.name)
        return user
    } 
}

module.exports = userView
class user {
    constructor(id, userName, name, bio) {
        this.id = id,
        this.userName = userName,
        this.name = name,
        this.bio = bio,
        this.dateCreated = new Date(),
        this.lastUpdate = new Date()
        //this.error = (this.id === null | this.userName === undefined | this.name === undefined)  ? "payload no existe" : ""
        //esta fue una manera de resolver uno de los ejercicios pero hay otra manera que servira para poder resolver los siguientes ejercicios
    }

    get getUserName() {
        return this.userName
    }

    get getBio() {
        return this.bio
    }

    get getDateCreated() {
        return this.dateCreated
    }

    get getLastUpdate() {
        return this.lastUpdate
    }

    set setUserName(newUserName) {
        this.userName = newUserName
    }

    set setBio(newBio) {
        this.bio = newBio
    }
}

module.exports = user
class user {
    constructor(id, userName, name, bio) {
        this.id = id,
        this.userName = userName,
        this.name = name,
        this.bio = bio,
        this.dateCreated = new Date(),
        this.lastUpdate = new Date(),
        this.error = (this.id === null | this.userName === undefined | this.name === undefined)  ? "payload no existe" : "" //si se cumple con cualquiera de estas cosas se despliega el mensaje de que el payload no existe de lo contrario es un string vacio
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
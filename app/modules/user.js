class user {
    constructor(id, userName, name, bio, dateCreated, lastUpdate) {
        this.id = id,
        this.userName = userName,
        this.name = name,
        this.bio = bio,
        this.dateCreated = new Date(),
        this.lastUpdate = new Date()
    }
}

module.exports = user
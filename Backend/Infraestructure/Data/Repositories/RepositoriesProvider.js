const InMemoryAttendeeRepo = require("./InMemory/InMemoryAttendeeRepo");

class RepositoryProvider {
    constructor() {
        this.attendeeRepo = new InMemoryAttendeeRepo();       
    }

    static getInstance() {
        if (!RepositoryProvider.instance) {
            RepositoryProvider.instance = new RepositoryProvider();
        }
        return RepositoryProvider.instance;
    }

    getAttendeeRepo() {
        return this.attendeeRepo;
    }

}

module.exports = RepositoryProvider;
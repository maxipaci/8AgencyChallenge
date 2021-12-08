const InMemoryAttendeeRepo = require("./InMemory/InMemoryAttendeeRepo");
const InMemoryCountryRepo = require("./InMemory/InMemoryCountryRepo");

class RepositoryProvider {
    constructor() {
        this.attendeeRepo = new InMemoryAttendeeRepo();    
        this.countryRepo = new InMemoryCountryRepo();    
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

    getAttendeeRepo() {
        return this.countryRepo;
    }

}

module.exports = RepositoryProvider;
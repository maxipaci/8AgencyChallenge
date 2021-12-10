const InMemoryAttendeeRepo = require("./InMemory/InMemoryAttendeeRepo");
const InMemoryCountryRepo = require("./InMemory/InMemoryCountryRepo");
const SequelizeAttendeeRepo = require("./Sequelize/SequelizeAttendeeRepo");

class RepositoryProvider {
    constructor() {
        this.attendeeRepo = new SequelizeAttendeeRepo();//new InMemoryAttendeeRepo();    
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

    getCountryRepo() {
        return this.countryRepo;
    }

}

module.exports = RepositoryProvider;
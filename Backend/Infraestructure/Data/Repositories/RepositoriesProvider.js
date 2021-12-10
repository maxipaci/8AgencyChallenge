const InMemoryAttendeeRepo = require("./InMemory/InMemoryAttendeeRepo");
const InMemoryCountryRepo = require("./InMemory/InMemoryCountryRepo");
const SequelizeAttendeeRepo = require("./Sequelize/SequelizeAttendeeRepo");
const SequelizeCountryRepo = require("./Sequelize/SequelizeCountryRepo");

class RepositoryProvider {
    constructor() {
        this.attendeeRepo = new SequelizeAttendeeRepo();//new InMemoryAttendeeRepo();    
        this.countryRepo = new SequelizeCountryRepo();//new InMemoryCountryRepo();    
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
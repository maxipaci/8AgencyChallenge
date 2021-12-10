require('dotenv').config()
const InMemoryAttendeeRepo = require("./inMemory/InMemoryAttendeeRepo");
const InMemoryCountryRepo = require("./inMemory/InMemoryCountryRepo");
const SequelizeAttendeeRepo = require("./Sequelize/SequelizeAttendeeRepo");
const SequelizeCountryRepo = require("./Sequelize/SequelizeCountryRepo");

class RepositoryProvider {
    constructor() {
        if (process.env.DB_TYPE === 'sequelize') {
            this.attendeeRepo = new SequelizeAttendeeRepo();   
            this.countryRepo = new SequelizeCountryRepo();
        } else {
            this.attendeeRepo = new InMemoryAttendeeRepo();
            this.countryRepo = new InMemoryCountryRepo();
        }          
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
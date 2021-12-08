const AttendeeService = require('./AttendeeService.js');
const CountryService = require('./CountryService.js');
const ReposProvider = require('../../Infraestructure/Data/Repositories/RepositoriesProvider.js').getInstance();

class Provider {
    static getInstance() {
        if (!Provider.instance) {
            Provider.instance = new Provider();
        }
        return Provider.instance;
    }

    attendeeService() {
        return new AttendeeService(ReposProvider.getAttendeeRepo());
    }

    countryService() {
        return new CountryService(ReposProvider.getCountryRepo());
    }

}

module.exports = Provider;
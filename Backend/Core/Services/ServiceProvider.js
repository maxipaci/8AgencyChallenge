const AttendeeService = require('./AttendeeService.js');
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

}

module.exports = Provider;
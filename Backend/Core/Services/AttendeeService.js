const AttendeeDto = require('../Dtos/Attendee.js');

class AttendeeService{

    constructor(attendeesRepo, countryRepo){
        this.attendeesRepo = attendeesRepo;
        this.countryRepo = countryRepo;
    }

    async getAttendees(){
        let attendees = await this.attendeesRepo.getAll();

        let attendeesDtos = await Promise.all(attendees.map(async (att) => {
            var country = await this.countryRepo.getById(att.idCountry);
            return new AttendeeDto(
                att.id, 
                att.firstName, 
                att.lastName, 
                att.email, 
                att.phone, 
                att.job, 
                country.name);
        }))

        return attendeesDtos.reverse()
    }

    async createAttendee(attendee){
        attendee.id = await this.attendeesRepo.nextId();
        await this.attendeesRepo.add(attendee);
        const country = await this.countryRepo.getById(attendee.idCountry);
        return new AttendeeDto(
            attendee.id, 
            attendee.firstName, 
            attendee.lastName, 
            attendee.email, 
            attendee.phone, 
            attendee.job, 
            country.name);
    }
}

module.exports = AttendeeService;
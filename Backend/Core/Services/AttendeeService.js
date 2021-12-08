
class AttendeeService{

    constructor(attendeesRepo){
        this.attendeesRepo = attendeesRepo;
    }

    async getAttendees(){
        let attendees = await this.attendeesRepo.getAll();
        return attendees;
    }

    async createAttendee(attendee){
        attendee.Id = await this.attendeesRepo.nextId();
        await this.attendeesRepo.add(attendee);
        return attendee;
    }
}

module.exports = AttendeeService;
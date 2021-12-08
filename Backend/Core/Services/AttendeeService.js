
class AttendeeService{

    constructor(attendeesRepo){
        this.attendeesRepo = attendeesRepo;
    }

    async getAttendees(){
        let attendees = await this.attendeesRepo.getAll();
        return attendees;
    }

    async addOperation(operation){
        operation.id = await this.operationsRepo.nextId();
        await this.operationsRepo.add(operation);
        return operation;
    }
}

module.exports = AttendeeService;
const Attendee = require('../../../../Core/Models/Attendee');

class InMemoryAttendeeRepo {
    constructor() {
        this.attendees = [
            new Attendee(1, "Pablo", "Sanchez", "pablo@test.com", "1123456789", "Programador"),
            new Attendee(2, "Juan", "Perez", "test@test.com", "1123456789", "Programador"),
            new Attendee(3, "Pedro", "Perez", "test@test.com", "1123456789", "Programador")
        ];
    }

    getById(id){
        return this.attendees.find(op => op.id == id);
    }

    nextId() {
        return this.attendees.length > 0 ? this.attendees[this.attendees.length - 1].id + 1 : 1;
    }

    getAll(){
        return this.attendees;
    }

    add(attendee){
        this.attendees.push(attendee);
    }

    delete(id){
        this.attendees = this.attendees.filter(at => at.id != id);
    }

    update(attendee){
        this.attendees = this.attendees.map(at => {
            if (at.id == attendee.id) {
                return new Attendee(
                    attendee.Id,
                    attendee.FirstName, 
                    attendee.LastName, 
                    attendee.Email, 
                    attendee.Phone, 
                    attendee.Job
                );
            }

            return at
        });
        return attendee;
    }

}

module.exports = InMemoryAttendeeRepo;
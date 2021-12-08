class Attendee{
    id;
    firstName;
    lastName;
    email;
    phone;
    job;


    constructor(id, firstName, lastName, email, phone, job){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.job = job;
    }
}

module.exports = Attendee;
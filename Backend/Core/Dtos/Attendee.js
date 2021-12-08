class Attendee{
    id;
    firstName;
    lastName;
    email;
    phone;
    job;
    country;


    constructor(id, firstName, lastName, email, phone, job, country){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.job = job;
        this.country = country;
    }
}

module.exports = Attendee;
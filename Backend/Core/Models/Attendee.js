class Attendee{
    id;
    firstName;
    lastName;
    email;
    phone;
    job;
    idCountry;


    constructor(id, firstName, lastName, email, phone, job, idCountry){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.job = job;
        this.idCountry = idCountry;
    }
}

module.exports = Attendee;
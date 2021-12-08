class Attendee{
    Id;
    FirstName;
    LastName;
    Email;
    Phone;
    Job;


    constructor(id, firstName, lastName, email, phone, job){
        this.Id = id;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Email = email;
        this.Phone = phone;
        this.Job = job;
    }
}

module.exports = Attendee;
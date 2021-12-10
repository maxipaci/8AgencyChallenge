const { Attendee } = require('../../../../models')

class SequelizeAttendeeRepo {
    constructor() {
    }

    async getById(id){
        try {
            const Attendee = await Attendee.findByPk(id)
            if (!Attendee) return null
            return Attendee
        } catch (error) {
            throw new Error(error)
        }
    }

    async nextId() {
        try{
            const last = await Attendee.findAll({ limit: 1, order: [['id', 'DESC']] })
            return last[0].dataValues.id + 1;
        } catch (error) {
            throw new Error(error)
        }
    }

    async getAll(){
        try {
            const attendees = await Attendee.findAll()
            return attendees
        } catch (error) {
            throw new Error(error)
        }
    }

    async add(attendee){
        try {     
            const createdAttendee = await Attendee.create({
              firstName : attendee.firstName,
              lastName : attendee.lastName,
              email : attendee.email,
              phone : attendee.phone,
              job : attendee.job,
              idCountry : attendee.idCountry
            })
        
            return createdAttendee
        } catch (error) {
            throw new Error(error)
        }
    }

    delete(id){
    }

    update(attendee){
    }

}

module.exports = SequelizeAttendeeRepo;
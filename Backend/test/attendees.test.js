const { expect } = require('chai')
const AttendeeService = require('../Core/Services/AttendeeService.js')
const InMemoryAttendeeRepo = require('../Infraestructure/Data/Repositories/inMemory/InMemoryAttendeeRepo.js')
const InMemoryCountryRepo = require('../Infraestructure/Data/Repositories/inMemory/InMemoryCountryRepo.js')
const attendeeService = new AttendeeService(new InMemoryAttendeeRepo(), new InMemoryCountryRepo());


describe('create attendee', () => {
    const data = {
        firstName: 'Lionel',
        lastName: 'Messi',
        email: 'test@test.com',
        phone: '123456789',
        job: 'Footballer',
        idCountry: 1
    }
    it('should create a attendee', async () => {    
        const attendee = await attendeeService.createAttendee(data)
        expect(attendee.country).to.equal('Argentina')
        expect(attendee.firstName).to.equal('Lionel')
        expect(attendee.lastName).to.equal('Messi')
        expect(attendee.email).to.equal('test@test.com')
        expect(attendee.phone).to.equal('123456789')
        expect(attendee.job).to.equal('Footballer')
    })
})

describe('get all attendees', () => {
    it('should get all the 4 attendees with the last one named Lionel', async () => {
        const attendees = await attendeeService.getAttendees();
        expect(attendees.length).to.equal(4)
        expect(attendees[attendees.length - 1].firstName).to.equal('Lionel')
    })
})
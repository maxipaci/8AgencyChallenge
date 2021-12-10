const { expect } = require('chai')
const CountryService = require('../Core/Services/CountryService.js')
const InMemoryCountryRepo = require('../Infraestructure/Data/Repositories/inMemory/InMemoryCountryRepo.js')
const countryService = new CountryService(new InMemoryCountryRepo());


describe('create country', () => {
    const data = {
        name: 'Andorra'
    }
    it('should create a country', async () => {    
        const country = await countryService.createCountry(data)
        expect(country.name).to.equal(data.name)
    })
})

describe('get all countries', () => {
    it('should get all the 4 countries with the last one named Andorra', async () => {
        const countries = await countryService.getCountries();
        expect(countries.length).to.equal(4)
        expect(countries[countries.length - 1].name).to.equal('Andorra')
    })
})
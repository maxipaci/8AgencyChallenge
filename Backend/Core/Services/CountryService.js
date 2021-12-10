const Country = require("../Models/Country");

class CountryService{

    constructor(countryRepo){
        this.countryRepo = countryRepo;
    }

    async getCountries(){
        let countries = await this.countryRepo.getAll();
        let mappedCountries = await Promise.all(countries.map(async (cont) => {
            return new Country(
                cont.id, 
                cont.name);
        }))
        return mappedCountries;
    }

    async createCountry(country){
        country.id = await this.countryRepo.nextId();
        await this.countryRepo.add(country);
        return country;
    }
}

module.exports = CountryService;
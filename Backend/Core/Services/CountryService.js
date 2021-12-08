
class CountryService{

    constructor(countryRepo){
        this.countryRepo = countryRepo;
    }

    async getCountries(){
        let countries = await this.countryRepo.getAll();
        return countries;
    }

    async createCountry(country){
        country.id = await this.countryRepo.nextId();
        await this.countryRepo.add(country);
        return country;
    }
}

module.exports = CountryService;
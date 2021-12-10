const { Country } = require('../../../../models')

class SequelizeCountryRepo {
    constructor() {
    }

    async getById(id){
        try {
            const country = await Country.findByPk(id)
            if (!country) return null
            return country
        } catch (error) {
            throw new Error(error)
        }
    }

    async nextId() {
        try{
            const last = await Country.findAll({ limit: 1, order: [['id', 'DESC']] })
            return last[0].dataValues.id + 1;
        } catch (error) {
            throw new Error(error)
        }
    }

    async getAll(){
        try {
            const countries = await Country.findAll()
            return countries
        } catch (error) {
            throw new Error(error)
        }
    }

    async add(country){
        try {     
            const createdcountry = await Country.create({
              name : country.name
            })
        
            return createdcountry
        } catch (error) {
            throw new Error(error)
        }
    }

    delete(id){
    }

    update(country){
    }

}

module.exports = SequelizeCountryRepo;
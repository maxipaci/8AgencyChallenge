const Country = require('../../../../Core/Models/Country');

class InMemoryCountryRepo {
    constructor() {
        this.contries = [
            new Country(1, "Argentina"),
            new Country(2, "Brasil"),
            new Country(3, "Mexico")
        ];
    }

    getById(id){
        return this.contries.find(op => op.id == id);
    }

    nextId() {
        return this.contries.length > 0 ? this.contries[this.contries.length - 1].id + 1 : 1;
    }

    getAll(){
        return this.contries;
    }

    add(country){
        this.contries.push(country);
    }

}

module.exports = InMemoryCountryRepo;
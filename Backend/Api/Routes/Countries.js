const express = require('express');
const router = express.Router();
const Response = require('../../Core/Dtos/Response');
const ServiceProvider = require('../../Core/Services/ServiceProvider').getInstance();
const CountryService = ServiceProvider.countryService();

router.post('/Countries', async function (req, res, next) {
    try {
        const Country = await CountryService.createCountry(req.body);
        res.status(201).send(new Response(true, 'Country succesfully created', { Country }));
    } catch (e) {
        res.status(500).send(new Response(false, 'Something went wrong ! '));
    }
});

router.get('/Countries', async function (req, res, next) {
    try {
        const Countries = await CountryService.getCountries();
        res.status(200).send(new Response(true, '', { Countries }));
    } catch (e) {
        res.status(500).send(new Response(false, 'Something went wrong ! '));
    }
});

module.exports = router;
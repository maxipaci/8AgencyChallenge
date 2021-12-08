const express = require('express');
const router = express.Router();
const Response = require('../../Core/Dtos/Response');
const ServiceProvider = require('../../Core/Services/ServiceProvider').getInstance();

router.post('/Attendees', function (req, res, next) {
    try {
        res.status(201).send(new Response(true, 'Attendee succesfully created'));
    } catch (e) {
        res.status(500).send(new Response(false, 'Something went wrong ! '));
    }
});

router.get('/Attendees', async function (req, res, next) {
    try {
        const Attendees = await ServiceProvider.attendeeService().getAttendees();
        res.status(200).send(new Response(true, '', { Attendees }));
    } catch (e) {
        res.status(500).send(new Response(false, 'Something went wrong ! ', { msg: e.message }));
    }
});

module.exports = router;
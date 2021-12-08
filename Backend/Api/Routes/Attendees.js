const express = require('express');
const router = express.Router();
const Response = require('../../Core/Dtos/Response');
const ServiceProvider = require('../../Core/Services/ServiceProvider').getInstance();
const AttendeeService = ServiceProvider.attendeeService();
const AttendeeValidationSchema = require('../ValidationSchemas/AttendeeSchema');
const Validator = require('../Middlewares/Validator');

router.post('/Attendees', Validator(AttendeeValidationSchema), async function (req, res, next) {
    try {
        const Attendee = await AttendeeService.createAttendee(req.body);
        res.status(201).send(new Response(true, 'Attendee succesfully created', { Attendee }));
    } catch (e) {
        res.status(500).send(new Response(false, 'Something went wrong ! '));
    }
});

router.get('/Attendees', async function (req, res, next) {
    try {
        const Attendees = await AttendeeService.getAttendees();
        res.status(200).send(new Response(true, '', { Attendees }));
    } catch (e) {
        res.status(500).send(new Response(false, 'Something went wrong ! '));
    }
});

module.exports = router;
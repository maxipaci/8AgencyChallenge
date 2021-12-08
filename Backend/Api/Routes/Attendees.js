const express = require('express');
const router = express.Router();
const Response = require('../../Core/Dtos/Response');

router.post('/Attendees', function (req, res, next) {
    try {
        res.status(201).send(new Response(true, 'Attendee succesfully created'));
    } catch (e) {
        res.status(500).send(new Response(false, 'Something went wrong ! '));
    }
});

module.exports = router;
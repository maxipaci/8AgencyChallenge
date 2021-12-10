const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const attendeesRoute = require('./routes/Attendees.js');
const countriesRoute = require('./routes/Countries.js');
require('dotenv').config()

const apiPort = process.env.PORT || 5000;
const dbType = process.env.DB_TYPE || 'inMemory';
const corsOptions = {
    origin: '*',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const requestLogger = function (req, res, next) {
    console.log(req.url);
    console.log(req.method);
    console.log(req.body);
    next();
};

app.use(requestLogger);

app.use('/', attendeesRoute);
app.use('/', countriesRoute);

app.get('/', function (req, res, next) {
    res.send({ version: 1.0 });
});

app.listen(apiPort, () => {   
    console.log(`app listening on port ${apiPort} with ${dbType} database`);
});


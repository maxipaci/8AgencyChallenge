const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
require('dotenv').config()
const PORT = process.env.PORT || 5000;

app.use(cors());
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


app.get('/', function (req, res, next) {
    res.send({ version: 1.0 });
});

app.listen(PORT, () => {   
    console.log(`app listening on port ${PORT}`);
});


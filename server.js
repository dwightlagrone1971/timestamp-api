'use strict';

var express = require('express');
var moment = require('moment');

var app = express();

var port = process.env.PORT;

var results;

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
});

app.get('/:userDate?', function (req, res) {
    
    var date = req.params.userDate;
    
    var fullDate = new Date(+date);
    var converted_date = moment(fullDate).format("MMMM DD, YYYY");
    var unixValid = moment(fullDate).isValid();
    var natDate = moment(date).isValid();
    
    if(unixValid === true) {
        results = {
            'unix': +date,
            'natural': converted_date
        };
        res.send(results);
    } else if (natDate === true) {
        var natConvDate = moment(date).format("MMMM DD, YYYY");
        var unixParsed = Date.parse(date);
        results = {
            'unix': unixParsed,
            'natural': natConvDate
        };
        res.send(results);   
    } else {
        results = {
            'unix': null,
            'natural': null
        };
        res.send(results);  
    }
   
});

app.listen(port || 3000, function () {
    console.log('Listening on port ' + port + '...');
});
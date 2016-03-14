'use strict';

//var Timestamp = require(process.cwd() + '/app/controllers/timestamp.js');

module.exports = function (app) {
    app.route('/')
        .get(function (req, res) {
            res.send('Hello world!');
            //Timestamp.timestamp(req, res);
        });
};
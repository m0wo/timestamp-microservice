'use strict';

var Timestamp = require(process.cwd() + '/app/controllers/timestamp.js');

module.exports = function (app) {
    app.route('/')
        .get(function (req, res) {
            res.send("TODO: Some form of documentation");
        });
    
    app.route('/:timestamp')
        .get(function (req, res){
           console.log(req.params.timestamp);
           res.send(Timestamp(req.params.timestamp));
        });
};
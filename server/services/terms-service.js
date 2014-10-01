/* jshint node:true */

//var Promise = require("bluebird");
var mongoose = require('mongoose');
//Promise.promisifyAll(mongoose);
var config = require('../config/env');

var Term = mongoose.model('Term');

module.exports = function (app) {
    var koaContext = this;
    app.get('/terms', function*() {
        this.body = yield Term.find({}).exec();
    });

    app.get('/terms/:id', function*() {
        this.body = yield Term.findOne({termId: this.params.id}).exec();
    });
};
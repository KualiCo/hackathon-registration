/* jshint node:true */
'use strict';

var mongoose = require('mongoose');
var config = require('./../server/config/env');

exports.testRetrieveAll = function(test){
    mongoose.connect(config.db);
    console.log('mongo connected to ' + config.db)

    require('./../server/model/Term');
    var Term = mongoose.model('Term');

    test.expect(1);
    Term.find({}).exec().then(function(terms) {
        test.ok(terms, "should have terms");

        test.done();
    });
};
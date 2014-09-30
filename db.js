'use strict';

var mongoose = require('mongoose');
var config = require('./server/config/env');
var utils = require('./server/utils');

module.exports = function () {
    mongoose.connect(config.db);

    utils.getGlobbedFiles('./**/model/**/*.js').forEach(function(modelPath) {
        require(path.resolve(modelPath));
    });

    var Term = mongoose.model('TermSchema');
    var ScheduleTermResult = mongoose.model('ScheduleTermResult');

    var fall2012 = new Term({
        "termName":"Fall 2012",
        "termId":"kuali.atp.2012Fall",
        "termCode":"201208"
    });

    fall2012.save(logError);
};

var logError = function(err) {
    if (err) {
        console.error('error on save');
        console.error(err);
    }
}
/* jshint node:true */
'use strict';

var mongoose = require('mongoose');

var ScheduleTermResult = mongoose.model('ScheduleTermResult');

module.exports = function (app) {
    app.get('/studentSchedule', function* () {
        this.body = yield ScheduleTermResult.findOne({termId: this.request.query.termId}).exec();
    });
};
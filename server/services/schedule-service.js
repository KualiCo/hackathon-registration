/* jshint node:true */
'use strict';

var ScheduleTermResult = mongoose.model('ScheduleTermResult');

module.exports = function (app) {
    app.get('/studentSchedule', function* () {
        ScheduleTermResult.findOne({ 'termId': this.request.query.termId }, function (err, termResult) {
            if (err) return handleError(err);
            this.body = termResult;
        })
    });
};
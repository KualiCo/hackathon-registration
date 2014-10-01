'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ScheduleTermResultSchema = new Schema({
    userId: String,
    termId: String,
    courses: [{
        courseId: String,
        courseCode: String,
        description: String,
        credits: Number,
        gradingOptionId: String,
        longName: String,
        regGroupCode: String,
        regGroupId: String,
        masterLprId: String,
        creditOptions: [String],
        gradingOptions: [String],
        isWaitlisted: Boolean
    }]
});

ScheduleTermResultSchema.methods.getRegisteredCredits = function () {
    var credits = 0;
    if (this.courses) {
        this.courses.forEach(function (course) {
            credits += course.credits;
        });
    }

    return credits;
};

mongoose.model('ScheduleTermResult', ScheduleTermResultSchema);
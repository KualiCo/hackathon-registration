'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StudentTermResultSchema = new Schema({
    userId: String,
    termId: String,
    courses: [{
        courseId: String,
        courseCode: String,
        description: String,
        credits: String,
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

mongoose.model('StudentTermResult', StudentTermResultSchema);
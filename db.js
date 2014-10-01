'use strict';

var mongoose = require('mongoose');
var config = require('./server/config/env');
var _ = require('lodash');
var path = require('path');

require('./server/model/Term');
require('./server/model/ScheduleTermResult');

var Term = mongoose.model('Term');
var ScheduleTermResult = mongoose.model('ScheduleTermResult');

module.exports = function () {
    mongoose.connect(config.db);
    console.log('mongo connected to ' + config.db)

    insertTerms([
        {
            "termName": "Fall 2012",
            "termId": "kuali.atp.2012Fall",
            "termCode": "201208"
        },
        {
            "termName": "Spring 2012",
            "termId": "kuali.atp.2012Spring",
            "termCode": "201201"
        },
        {
            "termName": "Summer I 2012",
            "termId": "kuali.atp.2012Summer1",
            "termCode": "201205"
        },
        {
            "termName": "Spring 2014",
            "termId": "kuali.atp.2014Spring",
            "termCode": "201401"
        },
        {
            "termName": "Winter 2014",
            "termId": "kuali.atp.2014Winter",
            "termCode": "201400"
        },
        {
            "termName": "Winter 2015",
            "termId": "kuali.atp.2015Winter",
            "termCode": "201500"
        },
        {
            "termName": "Winter 2016",
            "termId": "kuali.atp.2016Winter",
            "termCode": "201600"
        },
        {
            "termName": "Summer I 2018",
            "termId": "kuali.atp.2018Summer1",
            "termCode": "201805"
        },
        {
            "termName": "Winter 2022",
            "termId": "kuali.atp.2022Winter",
            "termCode": "202200"
        }
    ]);

    Term.find({}, function (err, terms) {
        console.log(terms);
    });

    insertSchedules([
        {
            userId: "joe",
            termId: "kuali.atp.2014Spring",
            courses: [
                {
                    courseId: "1",
                    courseCode: "MATH100",
                    description: "Awesome math course",
                    credits: 3,
                    gradingOptionId: "P/F",
                    longName: "Math 100",
                    regGroupCode: "A",
                    regGroupId: "A",
                    isWaitlisted: false
                },
                {
                    courseId: "1",
                    courseCode: "ENGL200",
                    description: "Modern Literature",
                    credits: 3,
                    gradingOptionId: "Letter",
                    longName: "English 200",
                    regGroupCode: "A",
                    regGroupId: "A",
                    isWaitlisted: false
                },
                {
                    courseId: "1",
                    courseCode: "CHEM300",
                    description: "Organic Chemistry",
                    credits: 3,
                    gradingOptionId: "P/F",
                    longName: "Chem 300",
                    regGroupCode: "A",
                    regGroupId: "A",
                    isWaitlisted: false
                }
            ]
        },
        {
            userId: "joe",
            termId: "kuali.atp.2015Winter",
            courses: [
                {
                    courseId: "1",
                    courseCode: "MATH100",
                    description: "Awesome math course",
                    credits: 3,
                    gradingOptionId: "P/F",
                    longName: "Math 100",
                    regGroupCode: "A",
                    regGroupId: "A",
                    isWaitlisted: false
                },
                {
                    courseId: "1",
                    courseCode: "ENGL200",
                    description: "Modern Literature",
                    credits: 3,
                    gradingOptionId: "Letter",
                    longName: "English 200",
                    regGroupCode: "A",
                    regGroupId: "A",
                    isWaitlisted: false
                },
                {
                    courseId: "1",
                    courseCode: "CHEM300",
                    description: "Organic Chemistry",
                    credits: 3,
                    gradingOptionId: "P/F",
                    longName: "Chem 300",
                    regGroupCode: "A",
                    regGroupId: "A",
                    isWaitlisted: false
                }
            ]
        }
    ])

    var fall2012 = new Term({
        "termName": "Fall 2012",
        "termId": "kuali.atp.2012Fall",
        "termCode": "201208"
    });

    fall2012.save(logError);
};

function insertTerms(terms) {
    _.forEach(terms, function (term) {
        (new Term(term)).save(logError);
    })
}

function insertSchedules(schedules) {
    _.forEach(schedules, function (schedule) {
        (new ScheduleTermResult(schedule)).save(logError);
    })
}

var logError = function (err) {
    if (err) {
        console.error('error on save');
        console.error(err);
    }
}
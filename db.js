'use strict';

var r = require('rethinkdb');
var config = require('./server/config/env');
var _ = require('lodash');
var connection;

var initialTerms = [
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
];

var initialSchedules = [
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
];

module.exports = function () {
    var p = r.connect(config, function(err, conn) {
        if (err) throw err;
        connection = conn;
        createDatabase();
        createTables();
        createTerms();
        createSchedules();
    });
};

function createDatabase() {
    r.dbList().run(connection, function(err, result) {
        if (!_.contains(result, config.db)) {
            console.log("creating " + config.db + " database");
            r.dbCreate(config.db).run(connection);
        } else {
            console.log(config.db + " database already exists");
        }

    });
}

function createTables() {

    r.tableList().run(connection).then(function(tables) {
        if (!_.contains(tables, 'terms')) {
            console.log("creating terms table");
            r.tableCreate('terms').run(connection);
        }
        if (!_.contains(tables, 'schedules')) {
            console.log("creating schedules table");
            r.tableCreate('schedules').run(connection);
        }
    });
}

function createTerms() {
    r.table('terms').insert(initialTerms);
}

function createSchedules() {
    r.table('schedules').insert(initialSchedules).run(connection);
}

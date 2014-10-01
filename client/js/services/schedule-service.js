var $ = require('jquery');
var Promise = require('bluebird');

function ScheduleService() {
    this.url = "/studentSchedule";
    this.selectedSchedule; // Currently selected schedule

    this.registeredCredits = 0;
    this.registeredCourseCount = 0;
    this.registeredCourses = [];
    this.droppedRegistered = [];

    this.waitlistedCredits = 0;
    this.waitlistedCourseCount = 0;
    this.waitlistedCourses = [];
    this.droppedWaitlisted = [];

    // Cache of schedules per term
    this.scheduleMap = {};
}

ScheduleService.prototype.getTermSchedule = function(termId) {
    return $.get(this.url + "?termId=" + termId)
        .then(function(data) {
            this.selectedSchedule = data;
            this.registeredCredits = data.registeredCredits;

            return this.selectedSchedule;
        }.bind(this))
};

// make a singleton
module.exports = new ScheduleService();
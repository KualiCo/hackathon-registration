var $ = require('jquery')
var Promise = require('bluebird')

function ScheduleService() {
    this.url = "/schedule"
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

ScheduleService.prototype.getTerms = function() {
    return $.get(this.url)
        .then(function(data) {
            this.list = data
            return this.list
        }.bind(this))
}

TermService.prototype.getTerm = function(id) {
    // We can either load this from the server, or from a local cache
    return $.ajax({
        url: this.url+'/'+id,
        dataType: 'json',
        error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }
    });
}

// make a singleton
module.exports = new TermService()
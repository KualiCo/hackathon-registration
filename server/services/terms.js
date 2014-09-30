/* jshint node:true */
'use strict';

module.exports = function (app) {
    app.get('/terms', function*() {
        this.body = [
        {
            "termName":"Fall 2012",
            "termId":"kuali.atp.2012Fall",
            "termCode":"201208"
        },
        {
            "termName":"Spring 2012",
            "termId":"kuali.atp.2012Spring",
            "termCode":"201201"
        }];
    });

    app.get('/terms/:id', function*() {
        this.body = {
            "termName":"Fall 2012",
            "termId":"kuali.atp.2012Fall",
            "termCode":"201208"
        };
    });
};
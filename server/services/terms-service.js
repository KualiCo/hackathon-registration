/* jshint node:true */
'use strict';

var mongoose = require('mongoose');

var Term = mongoose.model('Term');

module.exports = function (app) {
    app.get('/terms', function*() {
        Term.find(function (err, terms) {
            if (err) return handleError(err);
            this.body = terms;
        });
    });

    app.get('/terms/:id', function*() {
        Term.findOne({termId: this.params.id}, function (err, term) {
            if (err) return handleError(err);
            this.body = term;
        });
    });
};
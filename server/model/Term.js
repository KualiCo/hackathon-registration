'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TermSchema = new Schema({
    termId: String,
    termName: String,
    termCode: String
});

mongoose.model('Term', TermSchema);
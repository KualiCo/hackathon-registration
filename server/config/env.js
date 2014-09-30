'use strict';

var _ = require('lodash');

module.exports = _.extend(
	require('./' + (process.env.NODE_ENV || 'dev')) || {}
);
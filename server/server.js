// --- Require Dependencies ----------------------------------------------------

var fs = require('fs');
var koa = require('koa');
var router = require('koa-router');
var serve = require('koa-static');
var body = require('koa-body');
var mongo = require('koa-mongo');
var utils = require('./utils');
var config = require('./config/env');
var path = require('path');

// --- Koa Setup ---------------------------------------------------------------

var app = koa();

app.use(serve('./client'));
app.use(body());
app.use(router(app));

app.use(mongo({uri: config.db}));

// source in models
utils.getGlobbedFiles('./**/model/**/*.js').forEach(function(modelPath) {
    require(path.resolve(modelPath));
});

// source in services
fs.readdirSync(__dirname + '/services').forEach(function (filename) {
    require('./services/' + filename)(app);
});

// --- Create Servers ----------------------------------------------------------

var server = require('http').Server(app.callback());

server.listen(3000);
console.log('server listening on port 3000');


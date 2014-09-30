// --- Require Dependencies ----------------------------------------------------

var fs = require('fs');
var koa = require('koa');
var router = require('koa-router');
var serve = require('koa-static');
var body = require('koa-body');

// --- Koa Setup ---------------------------------------------------------------

var app = koa();

app.use(serve('./client'));
app.use(body());
app.use(router(app));

// --- Create Servers ----------------------------------------------------------

var server = require('http').Server(app.callback());

app.get('/', function*() {
    this.body = {message: "Hello World"}
})


// EXAMPLE: call a database
function getMessage() {

}


server.listen(3000);
console.log('server listening on port 3000');


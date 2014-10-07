var React = require('react');
var $ = require('jquery');

var routes = require('./routes.jsx');
console.log("Loaded routes", routes);

var bower = require('./bower.js');
console.log("Loaded bower script");

var foundation = require('./../css/foundation.css');
console.log("Loaded Foundation");

React.renderComponent(routes, document.getElementById('main'));

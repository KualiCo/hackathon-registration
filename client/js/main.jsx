var React = require('react');

var routes = require('./routes.jsx');
console.log("Loaded routes", routes);

var foundation = require('./../css/foundation.css');
console.log("Loaded Foundation");

React.renderComponent(routes, document.getElementById('main'));

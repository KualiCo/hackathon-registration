var React = require('react');
var routes = require('./routes.jsx');
console.log("Loaded Index fixed", routes);

React.renderComponent(routes, document.getElementById('main'));

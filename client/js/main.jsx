var React = require('react');

var routes = require('./routes.jsx');
console.log("Loaded routes", routes);

var styles = require('../css/app.styl');
console.log("Loaded Styles", styles);

React.renderComponent(routes, document.getElementById('main'));

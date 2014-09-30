/**
 * @jsx React.DOM
 */
var React = window.React = require('react');
var Router = require('react-router');

var App = require('./app.jsx');
var cart = require('./cart.jsx');
var notFound = require('./notFound.jsx');

var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Link = Router.Link;
var Redirect = Router.Redirect;

module.exports = (
  <Routes>
    <Route name="index" path="/" handler={App}>
      <Route name="cart" path="mycart" handler={cart} >
      </Route>
      <Redirect path="/" to="/mycart" />
    </Route>
    <NotFoundRoute handler={notFound} />
  </Routes>
);

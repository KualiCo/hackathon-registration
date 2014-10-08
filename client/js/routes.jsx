/**
 * @jsx React.DOM
 */
var React = window.React = require('react');
var Router = require('react-router');

var app = require('./app.jsx');
var scheduleHome = require('./scheduleHome.jsx');
var notFound = require('./notFound.jsx');

var document = require('./document/link/docApp.jsx');

var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

module.exports = (
  <Routes>
    <Route name="index" path="/" handler={app}>
      <Route name="home" path="home" handler={scheduleHome} >
      </Route>
      <Redirect path="/" to="/home" />
    </Route>
    <Route name="doc" path="/doc" handler={document}/>
    <NotFoundRoute handler={notFound} />
  </Routes>
);

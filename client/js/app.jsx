/**
 * @jsx React.DOM
 */

var React = require('react');

var Nav = require('./navigation/nav.jsx');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <Nav/>
        <div className="container">
          <this.props.activeRouteHandler/>
        </div>
      </div>
    );
  }

});

module.exports = App;

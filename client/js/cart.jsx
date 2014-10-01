/**
 * @jsx React.DOM
 */
var React = require('react');

var MyView = React.createClass({
    render: function(){
        return (
          <div>
            <h1>MySchedule</h1>
            {this.props.activeRouteHandler({})}
          </div>
        );
    }
});

module.exports = MyView;
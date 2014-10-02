/**
 * @jsx React.DOM
 */
var React = require('react');

var MyView = React.createClass({
    render: function(){
        return (
          <div>
            <h2>MySchedule</h2>
            {this.props.activeRouteHandler({})}
          </div>
        );
    }
});

module.exports = MyView;
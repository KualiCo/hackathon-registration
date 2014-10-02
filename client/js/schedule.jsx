/**
 * @jsx React.DOM
 */
var React = require('react');

var MyView = React.createClass({
    render: function(){
        return (
          <div className="schedule">
            <h2>My Schedule</h2>
          </div>
        );
    }
});

module.exports = MyView;
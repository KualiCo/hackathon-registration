/**
 * @jsx React.DOM
 */
var React = require('react');
var Schedule = require('./schedule.jsx');
var Cart = require('./cart.jsx');

var MyView = React.createClass({
    render: function(){
        return (
            <div className="row">
                <div className="medium-9 columns">
                    <Schedule/>
                </div>
                <div className="medium-3 columns">
                    <Cart/>
                </div>
            </div>
        );
    }
});

module.exports = MyView;
/**
 * @jsx React.DOM
 */
var React = require('react');

var MyView = React.createClass({
    render: function () {
        return (
            <div className="cart">
                <div className="cart-header">
                    <div className="left pad">
                        <h4>My Cart</h4>
                    </div>
                    <div className="right pad">
                        <a href="#" className="tiny button secondary">Clear</a>
                    </div>
                    <div className="right pad">
                        <a href="#" className="tiny button">Register</a>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = MyView;
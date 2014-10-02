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
                <div className="cart-body row">
                    <div className="medium-4 columns">
                        <label className="label-top" htmlFor="addCourseCode">Course Code</label>
                        <input name="addCourseCode" size="9"/>
                    </div>

                    <div className="medium-4 columns">
                        <label className="label-top" htmlFor="addCourseCode">Section</label>
                        <input name="addSection" size="4"/>
                    </div>

                    <div className="medium-4 columns">
                        <a href="#" className="tiny button">Add to Cart</a>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = MyView;
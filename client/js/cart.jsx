/**
 * @jsx React.DOM
 */
var React = require('react');
var $ = require('jquery');
require('jquery-ui');


var MyView = React.createClass({
    getInitialState: function () {
        return {
            courses: []
        };
    },
    componentDidMount: function () {
        this.renderAccordion()
    },
    componentDidUpdate: function () {
        this.renderAccordion()
    },
    renderAccordion: function() {
        $('#cartListing').accordion({
            collapsible: true
        });
    },
    addCourseToCart: function () {
        var newCourse = {
            courseCode: this.refs.addCourseCode.getDOMNode().value,
            section: this.refs.addSection.getDOMNode().value,
            credits: 3
        };
        this.state.courses.push(newCourse);
        this.forceUpdate()

        this.refs.addCourseCode.getDOMNode().value = '';
        this.refs.addSection.getDOMNode().value = '';
    },
    render: function () {
        var cartListing = this.state.courses.map(function (course) {
            return (
                <div>
                    <h3>
                        <div className="row">
                            <div className="medium-offset-3 medium-5 columns">{course.courseCode} ({course.section})</div>
                            <div className="medium-4 columns">{course.credits} cr</div>
                        </div>
                    </h3>
                details
                </div>
            )
        }.bind(this));

        return (
            <div className="cart">
                <div className="cart-header">
                    <div className="util-grid-cell">
                        <div className="cart-header-title">My Cart</div>
                    </div>
                    <div>
                        <button className="tiny">Register</button>
                    &nbsp;
                        <button className="tiny secondary">Clear</button>
                    </div>
                </div>

                <div className="cart-add">
                    <div className="cart-add-contents">
                        <div className="cart-add-course">
                            <label className="label-top" htmlFor="addCourseCode">Course Code</label>
                            <input name="addCourseCode" size="9" ref="addCourseCode"/>
                        </div>

                        <div className="cart-add-section">
                            <label className="label-top" htmlFor="addCourseCode">Section</label>
                            <input name="addSection" size="4" ref="addSection"/>
                        </div>

                        <div className="cart-add-button">
                            <a href="#" className="tiny button" onClick={this.addCourseToCart}>Add to Cart</a>
                        </div>
                    </div>
                </div>

                <div id="cartListing" className="cart-listing">
                    {cartListing}
                </div>
            </div>
        );
    }
});

module.exports = MyView;
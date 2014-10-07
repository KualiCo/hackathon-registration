/**
 * @jsx React.DOM
 */
var React = require('react');

var MyView = React.createClass({
    getInitialState: function () {
        return {
            courses: []
        };
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
                <dd className="accordion-navigation">
                    <a href={'#' + course.courseCode}>
                        <div className="legendIndicator"></div>
                        <div className="row">
                            <div className="medium-10 columns">
                                <i className="fi-play"></i>
                                <strong>{course.courseCode.toUpperCase()} ({course.section})</strong>
                            </div>
                            <div className="medium-2 columns">{course.credits} cr</div>
                        </div>
                    </a>
                    <div id={course.courseCode} className="content">
                        details
                    </div>
                </dd>
            )
        }.bind(this));

        return (
            <div className="cart">
                <div className="cart-header">
                    <div className="util-grid-cell">
                        <div className="cart-header-title">My Cart</div>
                    </div>
                    <div>
                        <button className="tiny">Register</button>&nbsp;
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

                <div className="cart-listing">
                    <dl className="accordion" data-accordion="cartListingAccordion">
                        {cartListing}
                    </dl>
                </div>
            </div>
        );
    }
});

module.exports = MyView;
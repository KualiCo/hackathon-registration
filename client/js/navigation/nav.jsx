/**
 * @jsx React.DOM
 */

var React = require('react');
var Link = require('react-router').Link;
var termService = require('../services/term-service');
var scheduleService = require('../services/schedule-service');
var pluralize = require('pluralize');

var MyLink = require('./my-link.jsx');

var Nav = React.createClass({
    getInitialState: function () {
        return {
            selectedTerm: '',
            terms: [],
            studentSchedule: null
        };
    },
    refreshSchedule: function() {
        console.log('refreshing schedule')
        scheduleService.getTermSchedule(this.state.selectedTerm).then(function (schedule) {
            this.setState({studentSchedule: schedule})
        }.bind(this));

        this.forceUpdate()
    },
    getRegisteredCredits: function() {
        var credits = 0;
        if (this.state.studentSchedule && this.state.studentSchedule.courses) {
            this.state.studentSchedule.courses.forEach(function (course) {
                credits += course.credits;
            });
        }

        return credits;
    },
    componentDidMount: function () {
        termService.getTerms().then(function (terms) {
            this.setState({terms: terms})
        }.bind(this));

        this.refreshSchedule()
    },
    handleChange: function (event) {
        this.setState({selectedTerm: event.target.value});
        this.refreshSchedule()
    },
    render: function () {
        var termOptions = this.state.terms.map(function (term) {
            return (
                <option value={term.termId}>{term.termName}</option>
            )
        }.bind(this));

        var registeredCredits = '';
        if (this.state.studentSchedule && (this.getRegisteredCredits() > 0)) {
           registeredCredits = <li>{this.getRegisteredCredits()} {pluralize('credits', this.getRegisteredCredits())}</li>
        }

        return (
            <nav className="top-bar">
                <ul className="title-area">
                    <li className="name">
                        <h1><Link to="/">Kuali Co</Link></h1>
                    </li>
                    <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
                </ul>

                <section className="top-bar-section">
                    <ul className="right">
                        <li>Logoff</li>
                    </ul>

                    <ul className="left">
                        <li className="name"><h1>Course Registration</h1></li>
                    </ul>

                    <ul className="left">
                        <li className="has-dropdown not-click">
                            <select name="selectedTerm" onChange={this.handleChange}>
                              {termOptions}
                            </select>
                        </li>
                    </ul>

                    <ul className="left">
                        {registeredCredits}
                    </ul>
                </section>
            </nav>
        );
    }

});

module.exports = Nav;

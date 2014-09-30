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
    componentDidMount: function () {
        termService.getTerms().then(function (terms) {
            this.setState({terms: terms})
        }.bind(this));

        scheduleService.getTermSchedule(this.state.selectedTerm).then(function (schedule) {
            this.setState({studentSchedule: schedule})
        }.bind(this));
    },
    handleChange: function (event) {
        this.setState({selectedTerm: event.target.value});
    },
    render: function () {
        var termOptions = this.state.terms.map(function (term) {
            return (
                <option value="{term.termName}">{term.termName}</option>
            )
        }.bind(this));

        var registeredCredits = '';
        if (this.state.studentSchedule && this.state.studentSchedule.registeredCredits > 0) {
           registeredCredits = <span>{this.registeredCredits} {pluralize('credits', this.registeredCredits)}</span>
        }

        return (
            <div id="side-nav">
                <h3>
                    <Link to="/">Kuali Co</Link>
                </h3>

                <div className="lbl">
                    <i className="fa fa-file-text"></i>
                    <span> Course Registration</span>
                </div>
                <ul>
                    <MyLink to="/">Course / Learning Unit</MyLink>
                </ul>

                <div className="lbl">
                    <select name="selectedTerm" onChange={this.handleChange}>
                        {termOptions}
                    </select>
                </div>

                {registeredCredits}

                <div className="ftr">
                    <Link to="/">
                        <i className="fa fa-user"></i>
                        <span> Profile </span>
                    </Link>
                    <Link to="/">
                        <i className="fa fa-power-off"></i>
                        <span> Logoff</span>
                    </Link>
                </div>
            </div>
        );
    }

});

module.exports = Nav;

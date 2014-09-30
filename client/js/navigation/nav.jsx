/**
 * @jsx React.DOM
 */

var React = require('react');
var Link = require('react-router').Link;
var termService = require('../services/term-service');

var MyLink = require('./my-link.jsx');

var Nav = React.createClass({
  getInitialState: function() {
     return {terms: []};
  },
  componentDidMount: function() {
      termService.getTerms().then(function(terms) {
          this.setState({terms: terms})
      }.bind(this))
  },
  render: function() {
      var termOptions = this.state.terms.map(function(term) {
          return (
              <option value="{term.termName}">{term.termName}</option>
          )
      }.bind(this))

    return (
      <div id="side-nav">
        <h3><Link to="/">Kuali Co</Link></h3>

        <div className="lbl">
          <i className="fa fa-file-text"></i>
          <span> Course Registration</span>
        </div>
        <ul>
          <MyLink to="/">Course / Learning Unit</MyLink>
        </ul>

        <div className="lbl">
          <select name="selectedTerm">
            {termOptions}
          </select>
        </div>

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

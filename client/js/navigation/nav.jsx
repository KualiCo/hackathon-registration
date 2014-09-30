/**
 * @jsx React.DOM
 */

var React = require('react');
var Link = require('react-router').Link;

var MyLink = require('./my-link.jsx');

var Nav = React.createClass({

  render: function() {
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
          <i className="fa fa-users"></i>
          <span> User Accounts</span>
        </div>
        <ul>
          <MyLink to="/">Account</MyLink>
        </ul>

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

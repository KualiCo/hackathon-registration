/**
 * @jsx React.DOM
 */

var React = require('react');

var DocHeader = React.createClass({
    render: function () {
        return (
            <div className="panel">
                <h2>Doc Info</h2>

                <div>Doc Id: <span className="label">{this.props.document.docId}</span></div>
                <div>User Id: {this.props.document.userId}</div>
                <div>Dest: {this.props.document.dest}</div>
                <div>Method: {this.props.document.method}</div>
                <div>Account: {this.props.document.account}</div>
                <div>Description: {this.props.document.description}</div>
                <div>Amount: {this.props.document.amount}</div>
            </div>
        );
    }
});

module.exports = DocHeader;
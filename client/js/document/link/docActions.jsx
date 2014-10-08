/**
 * @jsx React.DOM
 */

var React = require('react');

var DocActions = React.createClass({
    render: function () {
        return (
            <div className="docActions">
                <button className="button" onClick={this.props.saveHandler}>Save</button>
            </div>
        );
    }
});

module.exports = DocActions;
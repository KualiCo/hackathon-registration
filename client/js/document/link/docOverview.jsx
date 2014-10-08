/**
 * @jsx React.DOM
 */

var React = require('react/addons');

var DocOverview = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    render: function () {
        return (
            <div className="docOverview">
                <h2>Doc Overview</h2>

                <label className="label-top" htmlFor="description">Description</label>
                <input name="description" size="20" valueLink={this.props.documentLink.linkState('description')}/>

                <label className="label-top" htmlFor="amount">Amount</label>
                <input name="amount" size="6" valueLink={this.props.documentLink.linkState('amount')}/>
            </div>
        );
    }
});

module.exports = DocOverview;
/**
 * @jsx React.DOM
 */

var React = require('react');

var DocOverview = React.createClass({
    handleChangeDescription: function(event) {
        this.props.document.description = event.target.value
        this.forceUpdate()
    },
    handleChangeAmount: function(event) {
        this.props.document.amount = event.target.value
        this.forceUpdate()
    },
    render: function () {
        return (
            <div className="docOverview">
                <h2>Doc Overview</h2>

                <label className="label-top" htmlFor="description">Description</label>
                <input name="description" size="20" defaultValue={this.props.document.description} onChange={this.handleChangeDescription}/>
                Props: {this.props.document.description}

                <label className="label-top" htmlFor="amount">Amount</label>
                <input name="amount" size="6" defaultValue={this.props.document.amount} onChange={this.handleChangeAmount}/>
                Props: {this.props.document.amount}
            </div>
        );
    }
});

module.exports = DocOverview;
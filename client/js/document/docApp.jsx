/**
 * @jsx React.DOM
 */

var React = require('react');

var DocHeader = require('./docHeader.jsx');
var DocOverview = require('./docOverview.jsx');
var DocActions = require('./docActions.jsx');

var App = React.createClass({
    getInitialState: function () {
        return {
            travelDoc: {
                docId: '10334',
                userId: 'jkneal',
                dest: 'hawaii',
                method: 'air',
                account: '1033921',
                description: null,
                amount: 0
            },
            messages: []
        };
    },
    saveDocument: function () {
        this.state.messages.push({type: 'success', text: 'Document was saved: ' + JSON.stringify(this.state.travelDoc)})
        this.forceUpdate()
    },
    render: function () {
        var messages = this.state.messages.map(function (message) {
            return (
                <div data-alert className={'alert-box ' + message.type}>
                        {message.text}
                    <a href="" className="close">×</a>
                </div>
            )
        }.bind(this));

        return (
            <div>
                {messages}
                <DocHeader document={this.state.travelDoc}/>
                <DocOverview document={this.state.travelDoc}/>
                <DocActions document={this.state.travelDoc} saveHandler={this.saveDocument}/>
            </div>
        );
    }
});

module.exports = App;
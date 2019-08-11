const React = require('react');
const sampleText = require('./sampleText');

module.exports = React.createClass({
  getInitialState () {
    return {};
  },

  render () {
    return (
      <div className="experience">
        <pre>
          { sampleText['summary'] }
        </pre>
      </div>
    );
  }
});

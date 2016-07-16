const React = require('react');
const sampleText = require('./sampleText');

module.exports = React.createClass({
  render () {
    return (
      <div className="contact-container">
        <div className="profile-pic"></div>
        <div className="profile-description">
          {sampleText.profileDescription}
        </div>
      </div>
    );
  }
});

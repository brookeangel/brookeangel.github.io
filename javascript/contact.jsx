const React = require('react');
const sampleText = require('./sampleText');

module.exports = React.createClass({
  render () {
    return (
      <div className="contact-container">
        <div className="profile-pic">
          <div className="profile-description">
            <h2>brooke.nicole.angel@gmail.com</h2>
          </div>
          <div className="up-arrow" onClick={this.props.upArrowClick}>
            <a><i className="fa fa-arrow-circle-up fa-4x"></i></a>
          </div>
        </div>
      </div>
    );
  }
});

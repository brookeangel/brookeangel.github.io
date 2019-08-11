const React = require('react');
const sampleText = require('./sampleText');

module.exports = React.createClass({
  render () {

    return (
      <div className="contact-container">
        <div className="contact-box">
          <div className="profile-description">
            <h2>CONTACT ME</h2>
            <p>
              Feel free to reach out to brooke.nicole.angel@gmail.com, or via
              <a href="https://www.linkedin.com/in/brookeangel" target="blank"> LinkedIn</a>.
            </p>
          </div>
          <div className="up-arrow" onClick={this.props.upArrowClick}>
            <a><i className="fa fa-arrow-circle-up fa-4x"></i></a>
          </div>
        </div>
      </div>
    );
  }
});

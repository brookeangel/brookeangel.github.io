const React = require('react');

module.exports = React.createClass({
  render () {
    return (
      <nav className="main-nav">
        <a onClick={this.props.mainLogoClick}>
          <div className="logo">BROOKE ANGEL</div>
        </a>
        <div className="nav-buttons">
          <a href="https://www.linkedin.com/in/brookeangel?trk=hp-identity-name"
            target="_blank">
            <i className="fa fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/brookeangel"
            target="_blank">
            <i className="fa fa-github fa-2x"></i>
          </a>
          <a href="http://brookecodes.tumblr.com/"
            target="_blank">
            <i className="fa fa-tumblr fa-2x"></i>
          </a>
        </div>
      </nav>
    );
  }
});

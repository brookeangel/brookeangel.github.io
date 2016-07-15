const React = require('react');

module.exports = React.createClass({

  render () {
    return(
      <div className="point-nav">
        <div className="point-nav-buttons-background"></div>
        <nav className="point-nav-buttons">
          <a onClick={this.props.setScrollState}>
            <i className="fa fa-home fa-2x"></i>
            <p>Home</p>
          </a>
          <a onClick={this.props.setScrollState}>
            <i className="fa fa-folder fa-2x"></i>
            <p>Experience</p>
          </a>

          <a onClick={this.props.setScrollState}>
            <i className="fa fa-code fa-2x"></i>
            <p>Projects</p>
          </a>

          <a onClick={this.props.setScrollState}>
            <i className="fa fa-heart fa-2x"></i>
            <p>Causes</p>
          </a>
        </nav>
      </div>
    );
  }
});

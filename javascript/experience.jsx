const React = require('react');

module.exports = React.createClass({
  getInitialState () {
    return {active: 'summary'};
  },

  setActive (category) {
    this.setState({active: category});
  },

  isActive (category) {
    return this.state.active === category ? 'active' : '';
  },

  activeContent () {
    return this.state.active;
  },

  render () {
    return (
      <div className="experience">
        <div className="experience-circles">
          <div className="circle" onClick={this.setActive.bind(null, 'summary')}>
            <div className={"circle-overlay " + this.isActive('summary')}>
              SUMMARY
            </div>
          </div>
          <div className="circle" onClick={this.setActive.bind(null, 'resume')}>
            <div className={"circle-overlay " + this.isActive('resume')}>
              RESUME
            </div>
          </div>
          <div className="circle" onClick={this.setActive.bind(null, 'teaching')}>
            <div className={"circle-overlay " + this.isActive('teaching')}>
              TEACHING
            </div>
          </div>
          <div className="circle" onClick={this.setActive.bind(null, 'technologies')}>
            <div className={"circle-overlay " + this.isActive('technologies')}>
              TECHNOLOGIES
            </div>
          </div>
        </div>
        <div className="experience-content">
          {this.activeContent()}
        </div>
      </div>
    );
  }
});

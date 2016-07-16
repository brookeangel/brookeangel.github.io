const React = require('react');
const sampleText = require("./sampleText");

module.exports = React.createClass({
  getInitialState () {
    return {focused: 0};
  },

  componentDidMount () {
    this.resumeInterval();
  },

  arrestInterval () {
    clearInterval(this.interval);
  },

  resumeInterval () {
    this.interval = setInterval(() => this.onRightArrow(), 3000);
  },

  componentWillUnmount () {
    this.arrestInterval
  },

  onRightArrow () {
    this.setState({focused: (this.state.focused + 1) % 4});
  },

  onLeftArrow () {
    this.setState({focused: (this.state.focused - 1 + 4) % 4});
  },

  getSliderStyle () {
    return {marginLeft: -(this.state.focused * 700)};
  },

  render () {
    return (
      <div>
        <div className="project-container-container">
          <i className="fa fa-chevron-left fa-4x" onClick={this.onLeftArrow}></i>
          <div className="project-container">
            <div className="project-slider"
                  onMouseEnter={this.arrestInterval}
                  onMouseLeave={this.resumeInterval}
                  style={this.getSliderStyle()}>
              <div className="project">
                <div className="project-overlay">
                  {sampleText.project1}
                </div>
              </div>
              <div className="project">
                <div className="project-overlay">
                  {sampleText.project2}
                </div>
              </div>
              <div className="project">
                <div className="project-overlay">
                  {sampleText.project3}
                </div>
              </div>
              <div className="project">
                <div className="project-overlay">
                  {sampleText.project4}
                </div>
              </div>
            </div>
          </div>
          <i className="fa fa-chevron-right fa-4x" onClick={this.onRightArrow}></i>
        </div>
        <div className="project-nav">
          <div className={this.state.focused == 0 ? 'project-nav-button active' : 'project-nav-button'}
                onClick={() => this.setState({focused: 0})}/>
          <div className={this.state.focused == 1 ? 'project-nav-button active' : 'project-nav-button'}
            onClick={() => this.setState({focused: 1})}/>
          <div className={this.state.focused == 2 ? 'project-nav-button active' : 'project-nav-button'}
            onClick={() => this.setState({focused: 2})}/>
          <div className={this.state.focused == 3 ? 'project-nav-button active' : 'project-nav-button'}
            onClick={() => this.setState({focused: 3})}/>
        </div>
      </div>
    );
  }
});

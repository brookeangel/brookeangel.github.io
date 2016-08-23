const React = require('react');
const sampleText = require("./sampleText");

module.exports = React.createClass({
  getInitialState () {
    return {focused: 0};
  },

  componentDidMount () {
    this.resumeInterval();
    addEventListener('resize', () => {
      if (window.innerWidth > 800) {
        this.resumeInterval();
      } else {
        this.arrestInterval();
        this.setState({focused: 0});
      }
    });
  },

  arrestInterval () {
    clearInterval(this.interval);
    this.interval = undefined;
  },

  resumeInterval () {
    if (!this.interval && window.innerWidth > 800) {
      this.interval = setInterval(() => this.onRightArrow(), 3000);
    }
  },

  componentWillUnmount () {
    this.arrestInterval();
  },

  onRightArrow () {
    this.setState({focused: (this.state.focused + 1) % 4});
  },

  onLeftArrow () {
    this.setState({focused: (this.state.focused - 1 + 4) % 4});
  },

  getSliderStyle () {
    return {marginLeft: -(this.state.focused * window.innerWidth * 0.62)};
  },

  render () {
    return (
      <div>
        <div className="project-container-container">
          <i className="fa fa-chevron-left fa-4x mobile-disappear" onClick={this.onLeftArrow}></i>
          <div className="project-container">
            <div className="project-slider"
                  onMouseEnter={this.arrestInterval}
                  onMouseLeave={this.resumeInterval}
                  style={this.getSliderStyle()}>
              <div className="project project-1">
                <div className="project-overlay">
                  <h1>Miniframe</h1>
                  <p>{sampleText.project1}</p>
                  <div>
                    <a href="https://github.com/brookeangel/railslite" alt="Github" target="_blank">
                      <i className="fa fa-github fa-4x" aria-hidden="true"></i>
                    </a>
                    <a href="https://miniframe.herokuapp.com/" alt="See it live!" target="_blank">
                      <i className="fa fa-external-link fa-4x" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project project-2">
                <div className="project-overlay">
                  <h1>Harvst</h1>
                  <p>{sampleText.project2}</p>
                  <div>
                    <a href="https://github.com/brookeangel/Harvest" alt="Github" target="_blank">
                      <i className="fa fa-github fa-4x" aria-hidden="true"></i>
                    </a>
                    <a href="http://www.harvst.xyz/" alt="See it live!" target="_blank">
                      <i className="fa fa-external-link fa-4x" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project project-3">
                <div className="project-overlay">
                  <h1>Chitty Chat</h1>
                  <p>{sampleText.project3}</p>
                  <div>
                    <a href="https://github.com/brookeangel/chitty_chat" alt="Github" target="_blank">
                      <i className="fa fa-github fa-4x" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project project-4">
                <div className="project-overlay">
                  <h1>Jquery Snake</h1>
                  <p>{sampleText.project4}</p>
                  <div>
                    <a href="https://github.com/brookeangel/jquery_snake" alt="Github" target="_blank">
                      <i className="fa fa-github fa-4x" aria-hidden="true"></i>
                    </a>
                    <a href="http://brookeangel.github.io/jquery_snake/" alt="See it live!" target="_blank">
                      <i className="fa fa-external-link fa-4x" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <i className="fa fa-chevron-right fa-4x mobile-disappear"
            onClick={this.onRightArrow}></i>
        </div>
        <div className="project-nav mobile-disappear">
          <div className={this.state.focused === 0 ?
              'project-nav-button active' : 'project-nav-button'}
              onClick={() => this.setState({focused: 0})}/>
          <div className={this.state.focused === 1 ?
              'project-nav-button active' : 'project-nav-button'}
            onClick={() => this.setState({focused: 1})}/>
          <div className={this.state.focused === 2 ?
              'project-nav-button active' : 'project-nav-button'}
            onClick={() => this.setState({focused: 2})}/>
          <div className={this.state.focused === 3 ?
              'project-nav-button active' : 'project-nav-button'}
            onClick={() => this.setState({focused: 3})}/>
        </div>
      </div>
    );
  }
});

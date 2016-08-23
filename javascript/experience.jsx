const React = require('react');
const Modal = require('react-modal');
const sampleText = require('./sampleText');

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
    if (this.state.active == 'resume') {
      return this.getModal();
    } else if (this.state.active == 'technologies') {
      return (
        <pre className="experience-content">
          <center className="icons">
            <img src="assets/icons/git.png" />
            <img src="assets/icons/github.png" />
            <img src="assets/icons/rails.png" />
            <img src="assets/icons/javascript.png" />
            <img src="assets/icons/html5.png" />
            <img src="assets/icons/css3.png" />
            <img src="assets/icons/react.png" /><br />
            <strong>Version Control Systems | </strong> Git / Github<br /><br />
            <strong>JavaScript | </strong> JavaScript, React.js, Flux, Redux, Node.js<br /><br />
            <strong>Ruby | </strong> Ruby, Rails <br /><br />
            <strong>Testing Frameworks |</strong> RSpec, Capybara, Jest, Jasmine, Mocha<br /><br />
            <strong>Web Design |</strong> CSS3, HTML5<br /><br />
            <strong>Misc |</strong> Java, Matlab, Scheme<br /><br />
          </center>


        </pre>
      );
    } else {
      return (
        <pre className="experience-content">
          { sampleText[this.state.active] }
        </pre>
      );
    }
  },

  getModal () {
    let modalStyle = ({
        overlay : {
          position          : 'fixed',
          backgroundColor   : 'rgba(255, 255, 255, 0.75)',
          zIndex            : 55,
          display           : 'flex',
          alignItems       : 'center',
          justifyContent   : 'center'
        },
        content : {
          left: 'auto',
          right: 'auto',
          padding: 0,
          overflowY: 'hidden',
          overflowX: 'hidden'
      }
    });

    const loader = (
      <div className="center-spinner">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    );

    return (
      <Modal
        isOpen={true}
        style={modalStyle}
        onRequestClose={ () => this.setState({active: 'summary'}) }
      >
        <div className="x-button"
          onClick={() => this.setState({active: 'summary'})}>
          <i className="fa fa-times-circle fa-2x" aria-hidden="true"></i>
        </div>
        <div className="modal-content">
          <img className="resume" src="assets/images/BrookeAngel.png"/>
        </div>
      </Modal>);
  },

  render () {
    return (
      <div className="experience">
        <div className="experience-circles">
          <div className={"circle " + this.isActive('summary')}
                onClick={() => this.setActive('summary')}>
            <div>
              ABOUT ME
            </div>
          </div>
          <div className={"circle " + this.isActive('resume')}
                onClick={() => this.setActive('resume')}>
            <div>
              RESUME
            </div>
          </div>
          <div className={"circle " + this.isActive('teaching')}
                onClick={() => this.setActive('teaching')}>
            <div>
              TEACHING
            </div>
          </div>
          <div className={"circle " + this.isActive('technologies')}
                onClick={() => this.setActive('technologies')}>
            <div>
              SKILLS
            </div>
          </div>
        </div>
        {this.activeContent()}
      </div>
    );
  }
});

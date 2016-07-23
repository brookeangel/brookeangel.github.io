const React = require('react');
const Modal = require('react-modal');
const PDF = require('react-pdf');
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
            <img src="../assets/icons/git.png" />
            <img src="../assets/icons/github.png" />
            <img src="../assets/icons/rails.png" />
            <img src="../assets/icons/javascript.png" />
            <img src="../assets/icons/html5.png" />
            <img src="../assets/icons/css3.png" />
            <img src="../assets/icons/react.png" /><br />
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
          overflowY : 'scroll',
          textAlign: 'center'
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
        <PDF file="assets/BrookeAngel.pdf"
              loading={loader}/>
      </Modal>);
  },

  render () {
    return (
      <div className="experience">
        <div className="experience-circles">
          <div className="circle" onClick={this.setActive.bind(null, 'summary')}>
            <div className={"circle-overlay " + this.isActive('summary')}>
              ABOUT ME
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
        {this.activeContent()}
      </div>
    );
  }
});

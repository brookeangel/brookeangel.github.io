const ReactDOM = require('react-dom');
const React = require('react');
const Modal = require('react-modal');
const MainNav = require('./main_nav');
const PointNav = require('./point_nav');
const Experience = require('./experience');
const Projects = require('./projects');
const Contact = require('./contact');

const App = React.createClass({
  getInitialState () {
    return {scrollState: 0};
  },

  componentDidMount () {
    document.addEventListener('scroll', () => {
      let newScrollState = Math.round(window.scrollY / window.innerHeight);
      this.setState({scrollState: newScrollState});
    });
  },

  setScrollInterval (e) {
    let siblings = e.currentTarget.parentElement.children;
    let current = Array.from(siblings).indexOf(e.currentTarget);
    this.scrollTo(current);
  },

  scrollTo (current) {
    let scrollHeight = current * window.innerHeight;
    if (current === 3) {
      scrollHeight -= 20;
    }

    clearInterval(this.scrollInterval);

    this.scrollInterval = setInterval(() => {
        if ((window.scrollY > scrollHeight + 5) ||
            (window.scrollY < scrollHeight - 5)) {
            const factor = Math.abs(window.scrollY - scrollHeight);
            let diff = window.scrollY < scrollHeight ? 2 : -2;
            if (factor > 50) diff *= 5;

            const newY = window.scrollY + diff;
            window.scrollTo(0, newY);
        } else {
          clearInterval(this.scrollInterval);
        }
    }, 1);
  },

  render () {
    return(
      <main>
        <MainNav mainLogoClick={() => this.scrollTo(0)} />
        <PointNav setScrollState={this.setScrollInterval}
                  scrollState={this.state.scrollState}/>
        <div>
        <section id="main-banner">
          <div className="main-banner-overlay"></div>
          <div className="main-description">
            <h1>BROOKE ANGEL</h1>
            <h3>Web developer and Rails/Javascript instructor.</h3>
          </div>
          <div className="down-arrow"
                onClick={() => this.scrollTo(1)}>
            <a><i className="fa fa-arrow-circle-down fa-4x"></i></a>
          </div>
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact upArrowClick={() => this.scrollTo(0)}/>
        </section>
        </div>
      </main>
    );
  }
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
  Modal.setAppElement(document.getElementById('root'));
});

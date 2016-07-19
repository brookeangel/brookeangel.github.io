const ReactDOM = require('react-dom');
const React = require('react');
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

  setScrollState (e) {
    let siblings = e.currentTarget.parentElement.children;
    let current = Array.from(siblings).indexOf(e.currentTarget);
    this.scrollTo(current);
  },

  downArrowClick () {
    this.scrollTo(1);
  },

  upArrowClick () {
    this.scrollTo(0);
  },

  mainLogoClick (e) {
    e.preventDefault();
    this.scrollTo(0);
  },

  scrollTo (current) {
    let scrollHeight = current * window.innerHeight;
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

  clearScrollInterval () {
    clearInterval(this.scrollInterval);
  },

  render () {
    return(
      <main>
        <MainNav mainLogoClick={this.mainLogoClick} />
        <PointNav setScrollState={this.setScrollState}
                  scrollState={this.state.scrollState}/>
        <div>
        <section id="main-banner">
          <div className="main-description">
            <h1>BROOKE ANGEL</h1>
            <div>Giant tree. Developer. Goddess of debugging.</div>
          </div>
          <div className="down-arrow" onClick={this.downArrowClick}>
            <a><i className="fa fa-arrow-circle-down fa-4x"></i></a>
          </div>
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="causes">
          <Contact upArrowClick={this.upArrowClick}/>
        </section>
        </div>
      </main>
    )
  }
});

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(<App />, document.getElementById('root'))
);

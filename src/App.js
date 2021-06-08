import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import history from './components/history.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import './App.scss';

import Desktop from './components/Desktop.js'; 
import Mobile from './components/Mobile.js';

import About from './components/Pages/About.js'; 
import Resume from './components/Pages/Resume.js'; 

import Alike from './components/Pages/Alike.js'; 
import Boba from './components/Pages/Boba.js'; 
import Edushare from './components/Pages/Edushare.js'; 
import Hon from './components/Pages/Hon.js'; 
import CSA from './components/Pages/CSA.js';
import Yahoo from './components/Pages/Yahoo.js';
// import Parking from './components/Pages/Parking.js';
import ScrollToTop from './components/ScrollToTop.js';

const breakpoint = 768;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
    }

    this.handleResize = () => {
      this.setState({screenWidth: window.innerWidth});
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    AOS.init();
    return (
      <ParallaxProvider>
        <Router basename='/' history={history}>
          <ScrollToTop />
          <Route exact path='/'>
            {this.state.screenWidth > breakpoint ? 
            <Desktop screenWidth={this.state.screenWidth}/> : 
            <Mobile screenWidth={this.state.screenWidth}/>
            }
          </Route>
          <Route path='/about'>
            <About screenWidth={this.state.screenWidth}/>
          </Route>
          <Route path='/resume'>
            <Resume screenWidth={this.state.screenWidth}/>
          </Route>

          <Route path='/alike'>
            <Alike screenWidth={this.state.screenWidth}/>
          </Route>
          <Route path='/boba'>
            <Boba screenWidth={this.state.screenWidth}/>
          </Route>
          <Route path='/edushare'>
            <Edushare screenWidth={this.state.screenWidth}/>
          </Route>
          <Route path='/hon'>
            <Hon screenWidth={this.state.screenWidth}/>
          </Route>
          <Route path='/csa'>
            <CSA screenWidth={this.state.screenWidth}/>
          </Route>
          <Route path='/yahoo'>
            <Yahoo screenWidth={this.state.screenWidth}/>
          </Route>
          {/* <Route path='/parking'>
            <Parking screenWidth={this.state.screenWidth}/>
          </Route> */}
        </Router>
      </ParallaxProvider>
    );
  }
}

export default App;
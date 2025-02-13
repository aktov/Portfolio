import React from 'react';
import { Route, withRouter } from 'react-router-dom'
import ReactGA from 'react-ga';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.scss';

import Desktop from './components/Desktop.js'; 
import Mobile from './components/Mobile.js';

// Case Studies
import VEU from './components/Pages/VEU.js'; 
import ACE from './components/Pages/ACE.js'; 
import Alike from './components/Pages/Alike.js'; 
import Okizeme from './components/Pages/Okizeme.js'; 
import Hon from './components/Pages/Hon.js'; 
import CSA from './components/Pages/CSA.js';

// Designs
import Stacker from './components/Pages/Stacker.js'; 
import Boba from './components/Pages/Boba.js'; 
import Flowers from './components/Pages/Flowers.js'; 
import Edushare from './components/Pages/Edushare.js'; 


const breakpoint = 768;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
      scrollBehavior: 'smooth'
    }

    this.handleResize = () => {
      this.setState({screenWidth: window.innerWidth});
    }

    this.handleHashScroll = () => {
      if (window.location.hash) {
        setTimeout(() => {
          const anchor = document.getElementById(window.location.hash.substring(1));
          if (anchor) {
            anchor.scrollIntoView({ behavior: this.state.scrollBehavior, block: "start" });
          }
        }, 100); // Small delay ensures the DOM has updated
      }
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener("hashchange", this.handleHashScroll, false);

    // For Google Analytics. Send a pageview event to Google Analytics
    ReactGA.initialize('G-4GVEGQE25F');
    ReactGA.pageview(window.location.pathname + window.location.search);

    this.setScrollBehavior(window.location.pathname);
    this.handleHashScroll();
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if the path has changed and adjust scrollBehavior accordingly
    if (window.location.pathname !== prevProps.location.pathname) {
      this.setScrollBehavior(window.location.pathname);

      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" }); // Instantly scroll to top
      }, 0);
    }

    if (window.location.hash !== prevProps?.location?.hash) {
      this.handleHashScroll();
    }
  }

  // Method to set scroll behavior based on current pathname
  setScrollBehavior(pathname) {
    if (pathname === '/') {
      this.setState({ scrollBehavior: 'smooth' });
    } else {
      this.setState({ scrollBehavior: 'auto' });
    }
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener("hashchange", this.handleHashScroll, false);
  }


  

  render() {
    AOS.init();
    document.documentElement.style.scrollBehavior = this.state.scrollBehavior;

    return (
      <ParallaxProvider>
        <div id='anchor_page' className='anchor' style={{top: '-50rem'}}></div>

        <Route exact path='/'>
          {this.state.screenWidth > breakpoint ? 
          <Desktop screenWidth={this.state.screenWidth}/> : 
          <Mobile screenWidth={this.state.screenWidth}/>
          }
        </Route>

        {/* Case Studies */}
        <Route path='/veu'>
          <VEU screenWidth={this.state.screenWidth}/>
        </Route>
        <Route path='/ace'>
          <ACE screenWidth={this.state.screenWidth}/>
        </Route>
        <Route path='/alike'>
          <Alike screenWidth={this.state.screenWidth}/>
        </Route>
        <Route path='/okizeme'>
          <Okizeme screenWidth={this.state.screenWidth}/>
        </Route>
        <Route path='/hon'>
          <Hon screenWidth={this.state.screenWidth}/>
        </Route>
        <Route path='/csa'>
          <CSA screenWidth={this.state.screenWidth}/>
        </Route>

        {/* Mockups */}
        <Route path='/stacker'>
          <Stacker screenWidth={this.state.screenWidth}/>
        </Route>
        <Route path='/boba'>
          <Boba screenWidth={this.state.screenWidth}/>
        </Route>
        <Route path='/flowers'>
          <Flowers screenWidth={this.state.screenWidth}/>
        </Route>
        <Route path='/edushare'>
          <Edushare screenWidth={this.state.screenWidth}/>
        </Route>
      </ParallaxProvider>
    );
  }
}

export default withRouter(App);
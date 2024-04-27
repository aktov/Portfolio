import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.scss';

import Desktop from './components/Desktop.js'; 
import Mobile from './components/Mobile.js';

// Case Studies
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
    }

    this.handleResize = () => {
      this.setState({screenWidth: window.innerWidth});
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    
    // if (window.sessionStorage.getItem('siteLoaded')) {
    //   this.setState({doAnimate: false});
    // }
    // else {
    //   this.setState({doAnimate: true});
    //   window.sessionStorage.setItem('siteLoaded', 1);
    //   window.location.reload();
    // }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    AOS.init();
    return (
      <ParallaxProvider>
        <Router basename='/'>
          <div id='anchor_page' className='anchor' style={{top: '-50rem'}}></div>
          <Route exact path='/'>
            {this.state.screenWidth > breakpoint ? 
            <Desktop screenWidth={this.state.screenWidth}/> : 
            <Mobile screenWidth={this.state.screenWidth}/>
            }
          </Route>
          {/* <Route path='/about'>
            <About screenWidth={this.state.screenWidth}/>
          </Route>
          <Route path='/resume'>
            <Resume screenWidth={this.state.screenWidth}/>
          </Route> */}

          {/* Case Studies */}
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
        </Router>
      </ParallaxProvider>
    );
  }
}

export default App;
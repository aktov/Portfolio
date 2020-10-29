import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';

import Desktop from './components/Desktop.js'; 
import Mobile from './components/Mobile.js';
import Hon from './components/Pages/Hon.js'; 
import CSA from './components/Pages/CSA.js';
import Yahoo from './components/Pages/Yahoo.js';
import Parking from './components/Pages/Parking.js';
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
        <Router basename='/'>
          <ScrollToTop />
          <Route exact path='/'>
            {this.state.screenWidth > breakpoint ? 
            <Desktop screenWidth={this.state.screenWidth}/> : 
            <Mobile screenWidth={this.state.screenWidth}/>
            }
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
          <Route path='/parking'>
            <Parking screenWidth={this.state.screenWidth}/>
          </Route>
        </Router>
    );
  }
}

export default App;
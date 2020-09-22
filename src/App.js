import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';

import Desktop from './components/Desktop.js'; 
import Mobile from './components/Mobile.js'; 
import Resume from './components/Pages/Resume.js';
import CSA from './components/Pages/CSA.js';
import Yahoo from './components/Pages/Yahoo.js';
import Parking from './components/Pages/Parking.js';

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
    console.log(this.state.screenWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    AOS.init();
    return (
        <Router basename='/'>
          <Route exact path='/'>
            {this.state.screenWidth > breakpoint ? 
            <Desktop screenWidth={this.state.screenWidth}/> : 
            <Mobile screenWidth={this.state.screenWidth}/>
            }
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route path='/csa'>
            <CSA />
          </Route>
          <Route path='/yahoo'>
            <Yahoo />
          </Route>
          <Route path='/parking'>
            <Parking />
          </Route>
        </Router>
    );
  }
}

export default App;
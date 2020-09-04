import React from 'react';
import './App.scss';

import Desktop from './components/Desktop.js'; 
import Mobile from './components/Mobile.js'; 

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
    return (
        this.state.screenWidth > breakpoint ? 
        <Desktop screenWidth={this.state.screenWidth}/> : 
        <Mobile screenWidth={this.state.screenWidth}/>
    );
  }
}

export default App;
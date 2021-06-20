import React from 'react';

import Projects from './Projects.js';
import Resume from './Pages/Resume.js';
import About from './Pages/About.js';

class Content extends React.Component {
  render() {
    return (
      <div className='content' style={{overflow: 'visible'}}>
        <Projects screenWidth={this.props.screenWidth} />
        <About screenWidth={this.props.screenWidth} />
        <Resume screenWidth={this.props.screenWidth} />
      </div>
    );
  }
}

export default Content
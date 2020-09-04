import React from 'react';
import '../App.scss';


import SectionTitle from './SectionTitle';
import Projects from './Projects.js';


const Intro = (props) => {
  // Does nothing atm
  function resizeFont(screenWidth) {
    const defaultFontSize = 16;
  }

  return (
    <div className='intro'> 
      <div className='text'>
        <h1 style={{ fontSize: resizeFont(props.screenWidth) }}> I'm Alex, a designer & developer </h1>
        <h4> {`
        My dream is to apply my skills and knowledge to help contribute for a better tomorrow.
        I’m currently looking for opportunities to ...
        `}
        </h4>
      </div>
    </div>   
  );
}


const About = (props) => {
  return (
    <div className='wrapper'>
      <SectionTitle title='about me'/> 

  </div> 
  );
}


const Experience = (props) => {
  return (
    <div className='wrapper'>
      <SectionTitle title='experience'/> 

  </div> 
  );
}


class Content extends React.Component {

  render() {
    return (
      <div className='content'>
        <Intro/>
        <About/>
        <Experience/>
        <Projects screenWidth={this.props.screenWidth} />
      </div>
    );
  }
}

export default Content
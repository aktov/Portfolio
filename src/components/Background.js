import React from 'react';

import bckgrdDesktop from '../images/background.svg';
import bckgrdMobile from '../images/backgroundMobile.png';

const Intro = (props) => {
  // Does nothing atm
  function resizeFont(screenWidth) {
    const defaultFontSize = 16;
  }

  return (
    <div className='intro'> 
      <div className='text'>
        <h1 style={{ fontSize: resizeFont(props.screenWidth) }}> I'm Alex, a designer & developer </h1>
        <h4> My dream is to apply my skills and knowledge to help contribute for a better tomorrow. </h4>
        <h4> I’m currently looking for opportunities to ... </h4>
      </div>
    </div>   
  );
}

class Background extends React.Component {
  render() {
    return (
      <div className='background'> 
        <img
          className={this.props.screenWidth < 480 ? 'mobile' : 'desktop'} 
          src={this.props.screenWidth < 480 ? bckgrdMobile : bckgrdDesktop} 
          alt='Background'
        />

        <Intro/>
      </div>
    );
  }
}

export default Background;
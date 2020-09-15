import React from 'react';

import bckgrdDesktopNew from '../images/backgroundNew.png';
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
        <h4> As a recent graduate, I'm currently looking for internship or full-time opportunities to work with awesome people! </h4>
        <h4> If you're interested with what I have to offer, feel free to send me a message! </h4>
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
          src={this.props.screenWidth < 480 ? bckgrdMobile : bckgrdDesktopNew} 
          alt='Background'
        />

        <Intro/>
      </div>
    );
  }
}

export default Background;
import React from 'react';

import bckgrdDesktopNew from '../images/backgroundNew.png';
import bckgrdMobileNew from '../images/backgroundNewMobile.png';
import bckgrdDesktop from '../images/background.png';
import bckgrdMobile from '../images/backgroundMobile.png';

const Intro = (props) => {
  // Does nothing atm
  function resizeFont(screenWidth) {
    const defaultFontSize = 16;
    const newSize = props.screenWidth < 480 ? '2.5rem' : '3.125rem'

    return newSize;
  }

  function handleClick(e) {
    let anchor = document.getElementById('anchor_projects');
    if (anchor) {
      anchor.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  return (
    <div className='intro'> 
      <div className='text' style={props.screenWidth <= 768 ? {width: '75%'} : null}>
        <h1 style={{ fontSize: resizeFont(props.screenWidth) }}> I'm Alex, a designer & developer </h1>
        <h5> As a recent graduate, I'm currently looking for internship or full-time opportunities to work with awesome people! </h5>
        <h5> If you're interested with what I have to offer, feel free to send me a message! </h5>
        {props.screenWidth <= 768 && <button onClick={handleClick}> view projects </button>}
      </div>
    </div>   
  );
}

class Background extends React.Component {
  render() {
    return (
      <div className='background' style={this.props.screenWidth < 480 ? {maxHeight: '750px'} : null}> 
        <img
          className={this.props.screenWidth < 480 ? 'mobile' : 'desktop'} 
          src={this.props.screenWidth < 480 ? bckgrdMobile : bckgrdDesktop} 
          alt='Background'
        />

        <Intro screenWidth={this.props.screenWidth}/>
      </div>
    );
  }
}

export default Background;
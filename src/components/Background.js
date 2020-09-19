import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import Carousel from './Carousel.js';

import bckgrdDesktopNew from '../images/backgroundNew.png';
import bckgrdMobileNew from '../images/backgroundNewMobile.png';
import bckgrdDesktop from '../images/background.png';
import bckgrdMobile from '../images/backgroundMobile.png';
import arrow from '../images/arrow_down.svg';
import stasis from '../images/background_stasis.svg';

smoothscroll.polyfill();

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
        <h1 style={{ fontSize: resizeFont(props.screenWidth) }}> I'm Alex, an interaction & UX designer </h1>
        <h5> As a recent graduate, I'm currently looking for internship or full-time opportunities to work with awesome people! </h5>
        <h5> If you're interested with what I have to offer, feel free to send me a message! </h5>
        {props.screenWidth <= 768 && 

        <button onClick={handleClick}> 
          view projects
          <img src={arrow} alt='arrow' style={{marginLeft: '10px'}}/>
        </button>}
      </div>
    </div>   
  );
}




class Background extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carouselPlay: true
    }

    this.toggleCarousel = this.toggleCarousel.bind(this);
  }

  toggleCarousel(e) {
    console.log(this.state.carouselPlay);
    this.setState(state => ({
        carouselPlay: !state.carouselPlay
      })
    );
  }

  render() {
    return (
      <div 
        className='background' 
        style={this.props.screenWidth < 480 ? {maxHeight: '800px'} : null}
        onClick={this.toggleCarousel} 
      > 
        <Carousel screenWidth={this.props.screenWidth} playAnim={this.state.carouselPlay} />
        <Intro screenWidth={this.props.screenWidth} />
      </div>
    );
  }
}

export default Background;
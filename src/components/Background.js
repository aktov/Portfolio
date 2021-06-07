import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import Carousel from './Carousel.js';

import arrow from '../images/arrow_down.svg';

import background from '../images/backgroundII.svg';

smoothscroll.polyfill();

const Intro = (props) => {
  function handleClick(e) {
    let anchor = document.getElementById('anchor_projects');
    if (anchor) {
      anchor.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  return (
    <div className='intro'> 
      <div className='text' style={props.screenWidth <= 768 ? {width: '75%'} : null}>
        <h1 style={{ fontSize: props.screenWidth < 480 ? '2.5rem' : '3.125rem' }}> I'm Alex, </h1>
        <h1 style={{ fontSize: props.screenWidth < 480 ? '2rem' : '2.8rem', marginTop: '-2rem' }}> a UI/UX designer </h1>
        <h5 style={{ fontSize: props.screenWidth < 480 ? '1rem' : '1.5rem' }}> I’m currently looking for full-time or internship opportunities to bring what I love doing onto the team to create outstanding experiences for your users! </h5>
        {props.screenWidth <= 768 && 

        <button onClick={handleClick}> 
          view projects
          <img src={arrow} alt='arrow' style={{marginLeft: '10px'}}/>
        </button>}
      </div>
    </div>   
  );
}


const backgroundStyle = {
  width:'200%',
  height: 'auto',
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
    // console.log(this.state.carouselPlay);
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
        data-aos='fade' 
        data-aos-offset='100' 
        data-aos-easing='ease-out-sine'
        data-aos-duration='400'
        data-aos-once={true}
      > 
        <img 
          src={background}
          alt={'background'}
          style={backgroundStyle}
        /> 
        {/* <Carousel screenWidth={this.props.screenWidth} playAnim={this.state.carouselPlay} /> */}
        <Intro screenWidth={this.props.screenWidth} />
      </div>
    );
  }
}

export default Background;
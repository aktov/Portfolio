import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import Carousel from './Carousel.js';

import arrow from '../images/arrow_down.svg';

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
        <h1 style={{ fontSize: props.screenWidth < 480 ? '2.5rem' : '3.125rem' }}> I'm Alex, an interaction & product designer </h1>
        <h5> I'm currently looking for internship or full-time opportunities to bring what I do best onto the team to create designs that your users will love! </h5>
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
        <Carousel screenWidth={this.props.screenWidth} playAnim={this.state.carouselPlay} />
        <Intro screenWidth={this.props.screenWidth} />
      </div>
    );
  }
}

export default Background;
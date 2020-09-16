import React from 'react';

import stasis from '../images/background_stasis.svg';
import over from '../images/background_overlay.svg';
import under from '../images/background_underlay.svg';


const moveLeft = ' moveLeft';
const moveRight = ' moveRight';
const center = '';


class Image extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      direction: center,
      movingLeft: false
    };
    this.move = this.move.bind(this);
  }

  move() {
    this.setState({direction: this.state.movingLeft ? moveLeft : moveRight});
    setTimeout(() => {
      this.setState(state => ({movingLeft: !state.movingLeft}))
    }, this.props.completionTime);
  }

  stopMoveAnim() {
    clearInterval(this.moveCloudAnim);
  }

  componentDidMount() {
    setTimeout(this.move, 1);
    this.moveCloudAnim = setInterval(this.move, this.props.completionTime*2);
  }

  componentWillUnmount() {
    this.stopMoveAnim();
  }

  render() {
    return (
      <img 
        id={this.props.id}
        className={
          this.props.className + ' desktop' + (this.props.static ? '' : this.state.direction)
        }
        src={this.props.src}
        alt={this.props.alt}
      />  
    );
  }
}


class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='carousel'>
        <Image 
          id='background_stasis'
          className='stasis'
          src={stasis}
          alt='background_stasis'
          static={true}
        /> 
        <Image 
          id='background_overlay'
          className='over'
          src={over}
          alt='background_overlay'
          completionTime={10000}
        />
        <Image
          id='background_underlay'
          className='under'
          src={under}
          alt='background_underlay'
          completionTime={10000}
        />
      </div>
    );
  }
}

export default Carousel;
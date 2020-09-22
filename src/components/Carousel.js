import React from 'react';

import stasis from '../images/background_stasis.svg';
import stasisMobile from '../images/background_stasisMobile.svg';
import over from '../images/background_overlay.svg';
import under from '../images/background_underlay.svg';



class Image extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      direction: '',
      movingLeft: false,
    };
    this.move = this.move.bind(this);
  }

  move() {
    if (this.props.playAnim) {
      this.setState({direction: this.state.movingLeft ? ' moveLeft': ' moveRight'});
      setTimeout(() => {
        this.setState(state => ({movingLeft: !state.movingLeft}))
      }, this.props.completionTime);
    }
    else {
      this.setState({direction: ''});
    }
  }

  stopMoveAnim() {
    clearInterval(this.moveCloudAnim);
  }

  componentDidMount() {
    if (this.props.playAnim) {
      setTimeout(this.move, 1);
      this.moveCloudAnim = setInterval(this.move, this.props.completionTime*2);
    }
  }

  componentWillUnmount() {
    this.stopMoveAnim();
  }

  render() {
    return (
      <img 
        id={this.props.id}
        className={
          this.props.className + ((this.props.static || !this.props.playAnim) ? '' : this.state.direction)
        }
        src={this.props.src}
        alt={this.props.alt}
      />  
    );
  }
}


class Carousel extends React.Component {
  render() {
    return (
      <div className='carousel'>
        <Image 
          id='background_stasis'
          className='stasis'
          src={this.props.screenWidth < 480 ? stasisMobile : stasis}
          alt='background_stasis'
          playAnim={this.props.playAnim}
          static={true}
        /> 
        <Image 
          id='background_overlay'
          className={this.props.screenWidth < 480 ? 'over' : 'overSlower'}
          src={over}
          alt='background_overlay'
          playAnim={this.props.playAnim}
          static={false}
          completionTime={this.props.screenWidth < 480 ? 10000 : 20000}
        />
        <Image
          id='background_underlay'
          className={this.props.screenWidth < 480 ? 'under' : 'underSlower'}
          src={under}
          alt='background_underlay'
          playAnim={this.props.playAnim}
          static={false}
          completionTime={this.props.screenWidth < 480 ? 10000 : 20000}
        />
      </div>
    );
  }
}

export default Carousel;
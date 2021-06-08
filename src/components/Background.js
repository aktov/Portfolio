import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { Parallax } from 'react-scroll-parallax';

import arrow from '../images/arrow_down.svg';

import overlay from '../images/banner/overlay.svg';
import underlay from '../images/banner/underlay.svg';
import layer1 from '../images/banner/Layer01.svg';
import layer2 from '../images/banner/Layer02.svg';
import layer25 from '../images/banner/Layer02-5.svg';
import layer3 from '../images/banner/Layer03.svg';
import layer35 from '../images/banner/Layer03-5.svg';
import layer4 from '../images/banner/Layer04.svg';
import layer45 from '../images/banner/Layer04-5.svg';
import layer5 from '../images/banner/Layer05.svg';
import layer6 from '../images/banner/Layer06.svg';


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
        {/* {props.screenWidth <= 768 && 

        <button onClick={handleClick}> 
          view projects
          <img src={arrow} alt='arrow' style={{marginLeft: '10px'}}/>
        </button>} */}
      </div>
    </div>   
  );
}


const backgroundStyle = {
  width:'100%',
  height: 'auto',
}

class Background extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div 
        className='background' 
        style={this.props.screenWidth < 480 ? {maxHeight: '800px'} : null}
        data-aos='fade' 
        data-aos-offset='100' 
        data-aos-easing='ease-out-sine'
        data-aos-duration='400'
        data-aos-once={true}
      > 

        <Parallax
          y={[0,80]}
        >
          <img 
              src={underlay}
              alt={'background'}
              style={{width:'100%'}}
          />
        </Parallax>
        <Parallax
          y={[0,80]}
        >
          <img 
              src={layer6}
              alt={'background'}
              style={{width:'100%'}}
          />
        </Parallax>
        <Parallax
          y={[0,80]}
        >
          <img 
              src={layer5}
              alt={'background'}
              style={{width: '100%'}}
          />
        </Parallax>
        <Parallax
          x={[0,3]}
          y={[0,80]}
          styleOuter={{left: '50vw', bottom: '29rem'}}
        >
          <img 
              src={layer45}
              alt={'background'}
              style={{width:'20%'}}
          />
        </Parallax>
        <Parallax
          y={[0,60]}
        >
          <img 
              src={layer4}
              alt={'background'}
              style={{width:'100%'}}
          />
        </Parallax>
        <Parallax
          x={[0,-3]}
          y={[0,150]}
          styleOuter={{left: '75vw', bottom: '23rem'}}
        >
          <img 
              src={layer35}
              alt={'background'}
              style={{width:'15%'}}
          />
        </Parallax>
        <Parallax
          y={[0,40]}
        >
          <img 
              src={layer3}
              alt={'background'}
              style={{width:'100%'}}
          />
        </Parallax>
        <Parallax
          x={[0,3]}
          y={[0,15]}
          styleOuter={{left: '-5rem', bottom: '12rem'}}
        >
          <img 
              src={layer25}
              alt={'background'}
              style={{width:'50%'}}
          />
        </Parallax>
        <Parallax
          y={[0,40]}
        >
          <img 
              src={layer2}
              alt={'background'}
              style={{width: '100%'}}
          />
        </Parallax>
        <Parallax
          y={[0,80]}
          styleOuter={{bottom: '80vh'}}
        >
          <Intro screenWidth={this.props.screenWidth} />
        </Parallax>
        <Parallax
          y={[0,20]}
        >
          <img 
              src={layer1}
              alt={'background'}
              style={{width: '100%'}}
          />
        </Parallax>
        <Parallax
          x={[0,-7]}
          styleOuter={{bottom: '-10px'}}
        >
          <img 
              src={overlay}
              alt={'background'}
              style={{width: '200%'}}
          />
        </Parallax>
      </div>
    );
  }
}

export default Background;
import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

//for both
import overlay from '../images/skyline1_desktop/Overlay.svg';

// For desktop
import underlay_des from '../images/skyline1_desktop/Underlay.svg';
import layer1_des from '../images/skyline1_desktop/Layer01.svg';
import layer2_des from '../images/skyline1_desktop/Layer02.svg';
import layer25_des from '../images/skyline1_desktop/Layer02-5.svg';
import layer3_des from '../images/skyline1_desktop/Layer03.svg';
import layer35_des from '../images/skyline1_desktop/Layer03-5.svg';
import layer4_des from '../images/skyline1_desktop/Layer04.svg';
import layer45_des from '../images/skyline1_desktop/Layer04-5.svg';
import layer5_des from '../images/skyline1_desktop/Layer05.svg';
import layer6_des from '../images/skyline1_desktop/Layer06.svg';

// For mobile
import underlay_mob from '../images/skyline1_mobile/Underlay.svg';
import layer1_mob from '../images/skyline1_mobile/Layer01.svg';
import layer2_mob from '../images/skyline1_mobile/Layer02.svg';
import layer25_mob from '../images/skyline1_mobile/Layer02-5.svg';
import layer3_mob from '../images/skyline1_mobile/Layer03.svg';
import layer35_mob from '../images/skyline1_mobile/Layer03-5.svg';
import layer4_mob from '../images/skyline1_mobile/Layer04.svg';
import layer45_mob from '../images/skyline1_mobile/Layer04-5.svg';
import layer5_mob from '../images/skyline1_mobile/Layer05.svg';
import layer6_mob from '../images/skyline1_mobile/Layer06.svg';

smoothscroll.polyfill();

const Intro = (props) => {
  return (
    <div className='intro'> 
      <div className='text' style={props.screenWidth <= 768 ? {width: '75%'} : null}>
        <h1 style={{ fontSize: props.screenWidth < 480 ? '3rem' : '4rem' }}> 
          I'm Alex, 
        </h1>
        <h1 style={{ fontSize: props.screenWidth < 480 ? '2rem' : '2.8rem', marginTop: '-2rem' }}> 
          a UX designer. 
        </h1>
        {/* <h5 style={{ fontSize: this.props.screenWidth < 480 ? '1rem' : '1.25rem' }}> 
          I’m currently looking for full-time opportunities to bring what I love doing onto the team to create outstanding experiences for your users! 
        </h5> */}
      </div>
    </div>   
  );
}

const Background = (props) => {

  
  return (
    <div 
      className='background' 
      style={props.screenWidth < 480 ? {maxHeight: '800px'} : null}
      data-aos='fade' 
      data-aos-offset='100' 
      data-aos-easing='ease-out-sine'
      data-aos-duration='400'
      data-aos-once={true}
    > 

      {props.screenWidth > 640 ?
      <>
        <ParallaxBanner
          layers={[
            {image: layer1_des, speed: '-20%'},
            {image: layer2_des, speed: '-20%'},
            {image: layer3_des, speed: '-20%'},
          ]}
        >
        </ParallaxBanner>
      </>

      :
      <>
      <Parallax
        y={[-60,300]}
      >
        <img 
            src={underlay_mob}
            alt={'background'}
            style={{width:'100%'}}
            draggable='false' 
        />
      </Parallax>
      <Parallax
        y={[-80,400]}
      >
        <img 
            src={layer6_mob}
            alt={'background'}
            style={{width:'100%'}}
            draggable='false' 
        />
      </Parallax>
      <Parallax
        y={[-55,300]}
      >
        <img 
            src={layer5_mob}
            alt={'background'}
            style={{width: '100%'}}
            draggable='false' 
        />
      </Parallax>
      <Parallax
        x={[0,-3]}
        y={[-150,1200]}
        styleOuter={{left: '50vw', bottom: '15rem'}}
      >
        <img 
            src={layer45_mob}
            alt={'background'}
            style={{width:'20%'}}
            draggable='false' 
        />
      </Parallax>
      <Parallax
        y={[-45,250]}
      >
        <img 
            src={layer4_mob}
            alt={'background'}
            style={{width:'100%'}}
            draggable='false' 
        />
      </Parallax>
      <Parallax
        x={[0,-5]}
        y={[-25,400]}
        styleOuter={{left: '75vw', bottom: '8rem'}}
      >
        <img 
            src={layer35_mob}
            alt={'background'}
            style={{width:'15%'}}
            draggable='false' 
        />
      </Parallax>
      <Parallax
        y={[-25,150]}
      >
        <img 
            src={layer3_mob}
            alt={'background'}
            style={{width:'100%'}}
            draggable='false' 
        />
      </Parallax>
      <Parallax
        x={[0,-7]}
        y={[-25,65]}
        styleOuter={{left: '-5rem', bottom: '5rem'}}
      >
        <img 
            src={layer25_mob}
            alt={'background'}
            style={{width:'50%'}}
            draggable='false' 
        />
      </Parallax>
      <Parallax
        y={[-20,100]}
      >
        <img 
            src={layer2_mob}
            alt={'background'}
            style={{width: '100%'}}
            draggable='false' 
        />
      </Parallax>
      <Parallax
        y={[0,80]}
        styleOuter={{bottom: '80vh'}}
      >
        <Intro screenWidth={props.screenWidth} loaded={props.loaded}/>
      </Parallax>
      <Parallax
        y={[0,0]}
      >
        <img 
            src={layer1_mob}
            alt={'background'}
            style={{width: '100%'}}
            draggable='false' 
        />
      </Parallax>
      <Parallax
        x={[0,-10]}
        styleOuter={{bottom: '-12px'}}
      >
        <img 
            src={overlay}
            alt={'background'}
            style={{width: '200%'}}
            draggable='false' 
        />
      </Parallax>
      </>
      }
    </div>
  );
}

export default Background;
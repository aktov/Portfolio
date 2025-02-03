import React, { useState, useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { Parallax, ParallaxProvider, useParallaxController } from 'react-scroll-parallax';
import { useHistory } from 'react-router-dom'; // For route change detection

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
// import underlay_mob from '../images/skyline1_mobile/Underlay.svg';
import layer1_mob from '../images/skyline1_mobile/Layer01.svg';
import layer2_mob from '../images/skyline1_mobile/Layer02.svg';
// import layer25_mob from '../images/skyline1_mobile/Layer02-5.svg';
import layer3_mob from '../images/skyline1_mobile/Layer03.svg';
// import layer35_mob from '../images/skyline1_mobile/Layer03-5.svg';
import layer4_mob from '../images/skyline1_mobile/Layer04.svg';
// import layer45_mob from '../images/skyline1_mobile/Layer04-5.svg';
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
  const parallaxController = new useParallaxController();
  const history = useHistory(); // To listen for route changes

  // This effect will trigger whenever the route changes
  useEffect(() => {
    const handleRouteChange = () => {
      // Update the parallax controller to prevent it from breaking after route change
      parallaxController.update();
    };

    // Listen for history changes (route changes)
    const unlisten = history.listen(handleRouteChange);
    
    // Cleanup on component unmount
    return () => {
      unlisten();
    };
  }, [parallaxController, history]);


  // This effect triggers when the page resizes
  useEffect(() => {
    const handleResizeOrLazyLoad = () => {
      // Force the parallax library to recalculate the scroll position and element positions
      parallaxController.update();
    };
  
    window.addEventListener('resize', handleResizeOrLazyLoad);
    // If you're using lazy loading, make sure to trigger this update once images are loaded
    // For example, if you're using `IntersectionObserver`, call `controller.update()` when images come into view
  
    return () => {
      window.removeEventListener('resize', handleResizeOrLazyLoad);
    };
  }, []);

  return (
    <div 
      className='background' 
      // style={props.screenWidth < 480 ? {maxHeight: '800px'} : null}
      data-aos='fade' 
      data-aos-offset='100' 
      data-aos-easing='ease-out-sine'
      data-aos-duration='400'
      data-aos-once={true}
    > 

      {props.screenWidth > 640 ?
      <>      
        <Parallax translateY={[-2200, 3000]} translateX={[-5, 5]}>
          <img src={underlay_des} alt={'background'} className={'underlay'} draggable='false'/>
        </Parallax>

        <Parallax
          translateY={[-2200, 4000]}
          // style={{position: 'absolute', width: '100%', bottom: '0rem'}}
        >
          <img src={layer6_des} alt={'background'} draggable='false'/>
        </Parallax>

        <Parallax
          translateY={[-1250, 2000]}
          // style={{position: 'absolute', width: '100%', bottom: '0rem'}}
        >
          <img src={layer5_des} alt={'background'} draggable='false'/>
        </Parallax>

                <Parallax translateY={[-650, 1500]} translateX={[-3, 3]}>
                  <img src={layer45_des} alt={'background'} draggable='false'/>
                </Parallax> 

        <Parallax
          translateY={[-400, 700]}
          // style={{position: 'absolute', width: '100%', bottom: '0rem'}}
        >
          <img src={layer4_des} alt={'background'} draggable='false'/>
        </Parallax>     

                <Parallax translateY={[-350, 700]} translateX={[-2, 2]}>
                  <img src={layer35_des} alt={'background'} draggable='false'/>
                </Parallax>

        <Parallax
          translateY={[-220, 300]}
          // style={{position: 'absolute', width: '100%', bottom: '0rem'}}
        >
          <img src={layer3_des} alt={'background'} draggable='false'/>
        </Parallax>

                <Parallax translateY={[-60, 120]} translateX={[-5, 5]}>
                  <img src={layer25_des} alt={'background'} draggable='false'/>
                </Parallax>

                <Parallax
                  // translateY={[-300, 100]}
                  translateY={[-250, 100]}
                  style={{position: 'absolute', width: '100%', bottom: '50vh'}}
                >
                  <Intro screenWidth={props.screenWidth}/>
                </Parallax>

        <Parallax
          translateY={[-40, 80]}
          // style={{position: 'absolute', width: '100%', bottom: '0rem'}}
        >
          <img src={layer2_des} alt={'background'} draggable='false'/>
        </Parallax>

        <Parallax
          translateY={[0, 0]}
          // style={{position: 'absolute', width: '100%', bottom: '1rem'}}
        >
          <img src={layer1_des} alt={'background'} draggable='false'/>
        </Parallax>

        <Parallax translateY={[0, 0]} translateX={[-10, 0]} style={{bottom: '-16px'}}>
          <img src={overlay} alt={'background'} className={'overlay'} draggable='false'/>
        </Parallax>
      </>

      :
      
      <>      
        {/* Mobile */}
        <Parallax translateY={[-1000, 3000]} translateX={[-5, 5]}>
          <img src={underlay_des} alt={'background'} className={'underlay'} draggable='false'/>
        </Parallax>

        <Parallax
          translateY={[-950, 3000]}
          // style={{position: 'absolute', width: '100%', bottom: '0rem'}}
        >
          <img src={layer6_mob} alt={'background'} draggable='false'/>
        </Parallax>

        <Parallax
          translateY={[-650, 2000]}
          // style={{position: 'absolute', width: '100%', bottom: '0rem'}}
        >
          <img src={layer5_mob} alt={'background'} draggable='false'/>
        </Parallax>

                <Parallax translateY={[-650, 2000]} translateX={[-10, 5]}>
                  <img src={layer45_des} alt={'background'} draggable='false'/>
                </Parallax> 

        <Parallax
          translateY={[-300, 1000]}
          // style={{position: 'absolute', width: '100%', bottom: '0rem'}}
        >
          <img src={layer4_mob} alt={'background'} draggable='false'/>
        </Parallax>     

                <Parallax translateY={[-150, 600]} translateX={[-12, 15]}>
                  <img src={layer35_des} alt={'background'} draggable='false'/>
                </Parallax>

        <Parallax
          translateY={[-150, 500]}
          // style={{position: 'absolute', width: '100%', bottom: '0rem'}}
        >
          <img src={layer3_mob} alt={'background'} draggable='false'/>
        </Parallax>

                <Parallax translateY={[-60, 120]} translateX={[-15, 40]}>
                  <img src={layer25_des} alt={'background'} draggable='false'/>
                </Parallax>

                <Parallax
                  // translateY={[-300, 100]}
                  translateY={[-250, 100]}
                  style={{position: 'absolute', width: '100%', bottom: '50vh'}}
                >
                  <Intro screenWidth={props.screenWidth}/>
                </Parallax>

        <Parallax
          translateY={[-40, 200]}
          // style={{position: 'absolute', width: '100%', bottom: '0rem'}}
        >
          <img src={layer2_mob} alt={'background'} draggable='false'/>
        </Parallax>

        <Parallax
          translateY={[0, 100]}
          // style={{position: 'absolute', width: '100%', bottom: '1rem'}}
        >
          <img src={layer1_mob} alt={'background'} draggable='false'/>
        </Parallax>

        <Parallax translateY={[0, 0]} translateX={[-10, 0]} style={{bottom: '-16px'}}>
          <img src={overlay} alt={'background'} className={'overlay'} draggable='false'/>
        </Parallax>
      </>
      }
    </div>
  );
}

export default Background;
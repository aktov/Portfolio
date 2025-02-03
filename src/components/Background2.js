import React, { useRef, useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { Parallax, useParallaxController } from 'react-scroll-parallax';
import { useHistory } from 'react-router-dom'; // For route change detection

//for both
import overlay from '../images/skyline1_desktop/Overlay.svg';

// For desktop
import underlay_des from '../images/skyline1_desktop/Underlay.svg';
import layer1_des from '../images/skyline2_desktop/Layer01.svg';
import layer2_des from '../images/skyline2_desktop/Layer02.svg';
import layer25_des from '../images/skyline1_desktop/Layer02-5.svg';
import layer3_des from '../images/skyline2_desktop/Layer03.svg';
import layer35_des from '../images/skyline1_desktop/Layer03-5.svg';
import layer4_des from '../images/skyline2_desktop/Layer04.svg';
import layer45_des from '../images/skyline1_desktop/Layer04-5.svg';
import layer5_des from '../images/skyline2_desktop/Layer05.svg';

// For mobile
// import underlay_mob from '../images/skyline1_mobile/Underlay.svg';
import layer1_mob from '../images/skyline2_mobile/Layer01.svg';
import layer2_mob from '../images/skyline2_mobile/Layer02.svg';
// import layer25_mob from '../images/skyline1_mobile/Layer02-5.svg';
import layer3_mob from '../images/skyline2_mobile/Layer03.svg';
// import layer35_mob from '../images/skyline1_mobile/Layer03-5.svg';
import layer4_mob from '../images/skyline2_mobile/Layer04.svg';
// import layer45_mob from '../images/skyline1_mobile/Layer04-5.svg';
import layer5_mob from '../images/skyline2_mobile/Layer05.svg';
import layer6_mob from '../images/skyline2_mobile/Layer06.svg';

smoothscroll.polyfill();

const Background = (props) => {
  const parallaxController = new useParallaxController();
  const history = useHistory(); // To listen for route changes
  const ref = useRef(null);
  // const [startScroll, setStartScroll] = useState(null);

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


  // Used to grab the top of this div for startScroll calculations
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         const elementOffset = entry.target.getBoundingClientRect().top + window.scrollY;
  //         setStartScroll(elementOffset);
  //         console.log(elementOffset)
  //       }
  //     },
  //     { threshold: 0.1 }
  //   );

  //   if (ref.current) observer.observe(ref.current);
  //   return () => observer.disconnect();
  // }, []);



  return (
    <div 
      className='background' 
      ref={ref}
      // style={props.screenWidth < 480 ? {maxHeight: '800px'} : null}
      // data-aos='fade' 
      // data-aos-offset='100' 
      // data-aos-easing='ease-out-sine'
      // data-aos-duration='400'
      // data-aos-once={true}
    > 

      {props.screenWidth > 640 ?
      <>      
        <Parallax 
          translateY={[-90, 400]}
          // disabled={true}
          // startScroll={startScroll}
          // endScroll={7754+5000}
        >
          <img src={underlay_des} alt={'background'} className={'underlay'} draggable='false'/>
        </Parallax>

        <Parallax
          translateY={[-100, 420]}
          // disabled={true}
          // startScroll={startScroll}
        >
          <img src={layer5_des} alt={'background'} draggable='false'/>
        </Parallax>

                <Parallax translateY={[-100, 490]} translateX={[-3, 3]} >
                  <img src={layer45_des} alt={'background'} draggable='false'/>
                </Parallax> 

        <Parallax
          translateY={[-90, 390]}
          // disabled={true}
          // startScroll={startScroll}
        >
          <img src={layer4_des} alt={'background'} draggable='false'/>
        </Parallax>     

                <Parallax translateY={[-30, 120]} translateX={[-2, 2]}>
                  <img src={layer35_des} alt={'background'} draggable='false'/>
                </Parallax>

        <Parallax
          translateY={[-30, 120]}
          // disabled={true}
          // startScroll={startScroll}
        >
          <img src={layer3_des} alt={'background'} draggable='false'/>
        </Parallax>

                <Parallax translateY={[-30, 120]} translateX={[-5, 5]}>
                  <img src={layer25_des} alt={'background'} draggable='false'/>
                </Parallax>

        <Parallax
          translateY={[-30, 120]}
          // disabled={true}
          // startScroll={startScroll}
        >
          <img src={layer2_des} alt={'background'} draggable='false'/>
        </Parallax>

        <Parallax
          translateY={[0, 10]}
          // disabled={true}
          // startScroll={startScroll}
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
        <Parallax translateY={[-1000, 3000]} translateX={[-5, 5]} disabled={true}>
          <img src={underlay_des} alt={'background'} className={'underlay'} draggable='false'/>
        </Parallax>

        <Parallax
          translateY={[-950, 3000]}
          disabled={true}
          // style={{position: 'absolute', width: '100%', bottom: '0rem'}}
        >
          <img src={layer6_mob} alt={'background'} draggable='false'/>
        </Parallax>

        <Parallax
          translateY={[-650, 2000]}
          disabled={true}
          // style={{position: 'absolute', width: '100%', bottom: '0rem'}}
        >
          <img src={layer5_mob} alt={'background'} draggable='false'/>
        </Parallax>

                <Parallax translateY={[-650, 2000]} translateX={[-10, 5]} disabled={true}>
                  <img src={layer45_des} alt={'background'} draggable='false'/>
                </Parallax> 

        <Parallax
          translateY={[-300, 1000]}
          disabled={true}
          // style={{position: 'absolute', width: '100%', bottom: '0rem'}}
        >
          <img src={layer4_mob} alt={'background'} draggable='false'/>
        </Parallax>     

                <Parallax translateY={[-150, 600]} translateX={[-12, 15]} disabled={true}>
                  <img src={layer35_des} alt={'background'} draggable='false'/>
                </Parallax>

        <Parallax
          translateY={[-150, 500]}
          disabled={true}
          // style={{position: 'absolute', width: '100%', bottom: '0rem'}}
        >
          <img src={layer3_mob} alt={'background'} draggable='false'/>
        </Parallax>

                <Parallax translateY={[-60, 120]} translateX={[-15, 40]} disabled={true}>
                  <img src={layer25_des} alt={'background'} draggable='false'/>
                </Parallax>

        <Parallax
          translateY={[-40, 200]}
          disabled={true}
          // style={{position: 'absolute', width: '100%', bottom: '0rem'}}
        >
          <img src={layer2_mob} alt={'background'} draggable='false'/>
        </Parallax>

        <Parallax
          translateY={[0, 100]}
          disabled={true}
          // style={{position: 'absolute', width: '100%', bottom: '1rem'}}
        >
          <img src={layer1_mob} alt={'background'} draggable='false'/>
        </Parallax>

        <Parallax translateY={[0, 0]} translateX={[-10, 0]} style={{bottom: '-16px'}} disabled={true}>
          <img src={overlay} alt={'background'} className={'overlay'} draggable='false'/>
        </Parallax>
      </>
      }
    </div>
  );
}

export default Background;
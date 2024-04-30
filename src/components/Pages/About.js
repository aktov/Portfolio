import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import Title from '../Title';

import prof from '../../images/profilePic3.jpeg';
import toplay from '../../images/skyline1_mobile/Toplay.svg';
import overlay from '../../images/skyline1_desktop/Overlay.svg';

// for desktop
import layer1_des from '../../images/skyline2_desktop/Layer01.svg';
import layer2_des from '../../images/skyline2_desktop/Layer02.svg';
import layer3_des from '../../images/skyline2_desktop/Layer03.svg';
import layer4_des from '../../images/skyline2_desktop/Layer04.svg';
import layer5_des from '../../images/skyline2_desktop/Layer05.svg';

// for mobile
import layer1_mob from '../../images/skyline2_mobile/Layer01.svg';
import layer2_mob from '../../images/skyline2_mobile/Layer02.svg';
import layer3_mob from '../../images/skyline2_mobile/Layer03.svg';
import layer4_mob from '../../images/skyline2_mobile/Layer04.svg';
import layer5_mob from '../../images/skyline2_mobile/Layer05.svg';


const styleDesktop = {
  display: 'flex',
  flexFlow: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginTop: '25vh'
}

const styleMobile = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',

  width: '75%',
  marginTop: '10vh'
}

// const line1 = "I'm Alex, and I often find my head stuck in daydreams and clouds. Why? It's simply because I like to think of ideas that can be materialized through design."
// const line2 = "I've come to truly believe that good user-centric design has the potential to greatly benefit the world. UX Design isn't just about “making things look good”; it's much more than that. It's about providing an excellent overall user experience that will ensure the user's satisfaction. "
const line1 = "I'm a UX Designer with several years of experience working at startups ranging from social media to web3, with the goal of designing, improving, and delivering products that create an enjoyable experience."
const line2 = "I'm an advocate of people-centric design, so I love stepping into the shoes of our users to learn their needs and painpoints, and iteratively designing a solution for those issues."
const line3 = "Outside of the UI/UX realm, you can catch me designing games (sorta), exploring new hiking trails in the bay, or contemplating the price tag on yet another Lego set."
const line4 = "If you're interested in hearing more about my projects or experience, feel free to message me. I'd love to connect or collaborate! "
// const line5 = "I’m currently looking for full-time opportunities to bring what I love doing onto the team to create outstanding experiences for your users! "

class About extends React.Component { 
  render() {
    return (
      <div className='about'>
        <div id='about' className='anchor' style={this.props.screenWidth > 640 ? {top: '30rem'} : {top: '1rem'}}></div>
        <img src={toplay} alt='clouds' draggable='false' style={{position: 'absolute', width: '100%', top: '0', zIndex: '2'}}/> 

        {this.props.screenWidth > 640 ? 
          <Parallax y={[0,70]} styleOuter={{position: 'relative', marginBottom: '5rem'}}>
            <div className='content' style={styleDesktop}>
              <div 
                className='prof'
                data-aos='fade' 
                data-aos-offset='50' 
                data-aos-easing='ease-out-sine'
                data-aos-duration='400'
                data-aos-delay='100'
                data-aos-once={true}
              >
                <img 
                  src={prof} 
                  className='actual' 
                  alt='profile pic' 
                  draggable='false'
                />
                <Parallax x={[-2,2]} y={[-2,2]}>
                <div className='outline'>
                  <img src={prof} alt='profile pic' draggable='false'/>
                </div>
                </Parallax>
                <Parallax x={[2,-2]} y={[2,-2]} styleOuter={{position: 'relative'}}>
                <div className='fill'>
                  <img src={prof} alt='profile pic' draggable='false'/>
                </div>
                </Parallax>
              </div>
              <div 
                className='text' 
                style={this.props.screenWidth > 640 ? {marginLeft: '7rem', marginBottom: '70vh'} : {width: '100%'}}
              >
                <Title title='a bit about me' screenWidth={this.props.screenWidth} />
                <p
                  data-aos='fade' 
                  data-aos-offset='50' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='100'
                  data-aos-once={true}
                > {line1} </p>
                <p
                  data-aos='fade' 
                  data-aos-offset='50' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='200'
                  data-aos-once={true}
                > {line2} </p>
                <p
                  data-aos='fade' 
                  data-aos-offset='50' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='300'
                  data-aos-once={true}
                > {line3} </p>
                <p
                  data-aos='fade' 
                  data-aos-offset='50' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='300'
                  data-aos-once={true}
                > {line4} </p>
              </div>
            </div>
          </Parallax>
          :
          <Parallax y={[0,10]} styleOuter={{position: 'relative', marginBottom: '8rem'}}>
            <div className='content' style={styleMobile}>
              <Title title='a bit about me' screenWidth={this.props.screenWidth} />
              <div className='prof' style={{marginTop: '2rem', marginBottom: '1rem', alignSelf: 'center', maxWidth: '85%'}}>
                <img src={prof} className='actual' alt='profile pic' draggable='false'/>
                <Parallax x={[-2,2]} y={[-2,2]} styleOuter={{position: 'relative'}}>
                <div className='outline' style={{left: '-1rem', top: '-1rem'}}>
                  <img src={prof} alt='profile pic' draggable='false'/>
                </div>
                </Parallax>
                <Parallax x={[2,-2]} y={[2,-2]} styleOuter={{position: 'relative'}}>
                <div className='fill' style={{marginLeft: '1rem', marginTop: '1rem'}}>
                  <img src={prof} alt='profile pic' draggable='false'/>
                </div>
                </Parallax>
              </div>

              <div 
                className='text' 
                style={{maxWidth: '100%', marginLeft: '0'}}
              >
                <p
                  data-aos='fade' 
                  data-aos-offset='50' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='100'
                  data-aos-once={true}
                > {line1} </p>
                <p
                  data-aos='fade' 
                  data-aos-offset='50' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='200'
                  data-aos-once={true}
                > {line2} </p>
                <p
                  data-aos='fade' 
                  data-aos-offset='50' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='300'
                  data-aos-once={true}
                > {line3} </p>
                <p
                  data-aos='fade' 
                  data-aos-offset='50' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='300'
                  data-aos-once={true}
                > {line4} </p>
              </div>
            </div>
          </Parallax>
        }
        
        {this.props.screenWidth > 640 ? 
        <>
          <div className='background_about'>
            <Parallax 
              x={[0,0]} 
              styleOuter={{
                position: 'relative'}}
            >
              <img 
                  src={layer5_des}
                  alt={'background'}
                  style={{width:'100%'}}
                  draggable='false' 
              />
            </Parallax>
            <Parallax
              x={[0,-2]} 
            >
              <img 
                  src={layer4_des}
                  alt={'background'}
                  style={{width:'105%'}}
                  draggable='false' 
              />
            </Parallax>
            <Parallax
              x={[0,-4]} 
            >
              <img 
                  src={layer3_des}
                  alt={'background'}
                  style={{width:'105%'}}
                  draggable='false' 
              />
            </Parallax>
            <Parallax
              x={[0,-6]} 
            >
              <img 
                  src={layer2_des}
                  alt={'background'}
                  style={{width:'110%'}}
                  draggable='false' 
              />
            </Parallax>
            <Parallax
              x={[0,-8]} 
            >
              <img 
                  src={layer1_des}
                  alt={'background'}
                  style={{width:'110%'}}
                  draggable='false' 
              />
            </Parallax>
            <Parallax x={[0,10]} styleOuter={{bottom: '-10px'}}>
              <img 
                  src={overlay}
                  alt={'background'}
                  style={{width:'150%', float: 'right'}}
                  draggable='false' 
              />
            </Parallax>
          </div>
        </>
        :
        <>
          <div className='background_about'>
            <Parallax x={[0,0]} styleOuter={{position: 'relative', overflow: 'visible'}}>
              <img 
                  src={layer5_mob}
                  alt={'background'}
                  style={{width:'100%'}}
              />
            </Parallax>
            <Parallax x={[0,-2]} styleOuter={{overflow: 'visible'}}>
              <img 
                  src={layer4_mob}
                  alt={'background'}
                  style={{width:'105%'}}
              />
            </Parallax>
            <Parallax x={[0,-4]} styleOuter={{overflow: 'visible'}}>
              <img 
                  src={layer3_mob}
                  alt={'background'}
                  style={{width:'105%'}}
              />
            </Parallax>
            <Parallax x={[0,-6]} styleOuter={{overflow: 'visible'}}>
              <img 
                  src={layer2_mob}
                  alt={'background'}
                  style={{width:'110%'}}
              />
            </Parallax>
            <Parallax x={[0,-8]} styleOuter={{overflow: 'visible'}}>
              <img 
                  src={layer1_mob}
                  alt={'background'}
                  style={{width:'110%'}}
              />
            </Parallax>
            <Parallax x={[0,20]} styleOuter={{bottom: '-10px', overflow: 'hidden'}}>
              <img 
                  src={overlay}
                  alt={'background'}
                  style={{width:'200%', float:'right'}}
              />
            </Parallax>
          </div>
        </>
        }
      </div>
    );
  }
}

export default About;
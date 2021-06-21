import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import Title from '../Title';

import prof from '../../images/profilePic3.jpeg';
import toplay from '../../images/banner/toplay.svg';
import overlay from '../../images/banner/overlay.svg';
// import underlay from '../../images/banner2/underlay.svg';
import layer1 from '../../images/banner2/Layer01.svg';
import layer2 from '../../images/banner2/Layer02.svg';
import layer3 from '../../images/banner2/Layer03.svg';
import layer4 from '../../images/banner2/Layer04.svg';
import layer5 from '../../images/banner2/Layer05.svg';
import layer6 from '../../images/banner2/Layer06.svg';


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

class About extends React.Component { 
  render() {
    return (
      <div className='about'>
        <div id='about' className='anchor' style={this.props.screenWidth > 640 ? {top: '15rem'} : {top: '1rem'}}></div>
        <img src={toplay} alt='clouds' draggable='false' style={{position: 'absolute', width: '100%', top: '0'}}/> 

        {this.props.screenWidth > 640 ? 
          <Parallax y={[-10,70]} styleOuter={{position: 'relative', marginBottom: '5rem'}}>
            <div className='content' style={styleDesktop}>
              <div className='prof'>
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
                style={this.props.screenWidth > 640 ? {marginLeft: '7rem'} : {width: '100%'}}
              >
                <Title title='about me' screenWidth={this.props.screenWidth} />
                <p
                  data-aos='fade' 
                  data-aos-offset='50' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='100'
                  data-aos-once={true}
                > I’m Alex, and I often find my head stuck in daydreams and clouds. Why? It's simply because I like to think of ideas that can be materialized through design. </p>
                <p
                  data-aos='fade' 
                  data-aos-offset='50' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='200'
                  data-aos-once={true}
                > Having graduated from <b>UC San Diego</b> with a B.S. in <b>Human Computer Interaction</b>, I’ve come to truly believe that good user-centric design has the potential to greatly benefit the world. Design isn’t just about “making things look good”; it’s much more than that. It’s about <b>providing an excellent overall user experience</b> that will ensure the user’s satisfaction. </p>
                <p
                  data-aos='fade' 
                  data-aos-offset='50' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='300'
                  data-aos-once={true}
                > If you’re interested in getting to know me more or want to hear more about my projects, feel free to message me. I’d love to connect or collaborate! </p>
              </div>
            </div>
          </Parallax>
          :
          <Parallax y={[0,10]} styleOuter={{position: 'relative', marginBottom: '5rem'}}>
            <div className='content' style={styleMobile}>
              <Title title='about me' screenWidth={this.props.screenWidth} />
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
                > I’m Alex, and I often find my head stuck in daydreams and clouds. Why? It's simply because I like to think of ideas that can be materialized through design. </p>
                <p
                  data-aos='fade' 
                  data-aos-offset='50' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='200'
                  data-aos-once={true}
                > Having graduated from <b>UC San Diego</b> with a B.S. in <b>Human Computer Interaction</b>, I’ve come to truly believe that good user-centric design has the potential to greatly benefit the world. Design isn’t just about “making things look good”; it’s much more than that. It’s about <b>providing an excellent overall user experience</b> that will ensure the user’s satisfaction. </p>
                <p
                  data-aos='fade' 
                  data-aos-offset='50' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='300'
                  data-aos-once={true}
                > If you’re interested in getting to know me more or want to hear more about my projects, feel free to message me. I’d love to connect or collaborate! </p>
              </div>
            </div>
          </Parallax>
        }
        
        {this.props.screenWidth > 640 ? 
        <>
          <div className='background_about'>
            <Parallax y={[-15,70]} styleOuter={{position: 'relative', overflow: 'visible'}}>
              <img 
                  src={layer5}
                  alt={'background'}
                  style={{width:'100%'}}
                  data-aos='fade' 
                  data-aos-offset='-300' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='0'
                  data-aos-once={true}
              />
            </Parallax>
            <Parallax y={[-12,70]} styleOuter={{overflow: 'visible'}}>
              <img 
                  src={layer4}
                  alt={'background'}
                  style={{width:'100%'}}
                  data-aos='fade' 
                  data-aos-offset='-300' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='100'
                  data-aos-once={true}
              />
            </Parallax>
            <Parallax y={[-9,70]} styleOuter={{overflow: 'visible'}}>
              <img 
                  src={layer3}
                  alt={'background'}
                  style={{width:'100%'}}
                  data-aos='fade' 
                  data-aos-offset='-300' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='200'
                  data-aos-once={true}
              />
            </Parallax>
            <Parallax y={[-6,70]} styleOuter={{overflow: 'visible'}}>
              <img 
                  src={layer2}
                  alt={'background'}
                  style={{width:'100%'}}
                  data-aos='fade' 
                  data-aos-offset='-300' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='300'
                  data-aos-once={true}
              />
            </Parallax>
            <Parallax y={[-3,70]}>
              <img 
                  src={layer1}
                  alt={'background'}
                  style={{width:'100%'}}
                  data-aos='fade' 
                  data-aos-offset='-300' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='400'
                  data-aos-once={true}
              />
            </Parallax>
            <Parallax x={[0,-10]} styleOuter={{bottom: '-10px'}}>
              <img 
                  src={overlay}
                  alt={'background'}
                  style={{width:'200%'}}
              />
            </Parallax>
          </div>
        </>
        :
        <>
          <div className='background_about'>
            <Parallax y={[-5,50]} styleOuter={{position: 'relative', overflow: 'visible'}}>
              <img 
                  src={layer5}
                  alt={'background'}
                  style={{width:'100%'}}
              />
            </Parallax>
            <Parallax y={[-5,50]} styleOuter={{overflow: 'visible'}}>
              <img 
                  src={layer4}
                  alt={'background'}
                  style={{width:'100%'}}
              />
            </Parallax>
            <Parallax y={[-5,50]} styleOuter={{overflow: 'visible'}}>
              <img 
                  src={layer3}
                  alt={'background'}
                  style={{width:'100%'}}
              />
            </Parallax>
            <Parallax y={[-5,50]} styleOuter={{overflow: 'visible'}}>
              <img 
                  src={layer2}
                  alt={'background'}
                  style={{width:'100%'}}
              />
            </Parallax>
            <Parallax y={[-5,50]} styleOuter={{overflow: 'visible'}}>
              <img 
                  src={layer1}
                  alt={'background'}
                  style={{width:'100%'}}
              />
            </Parallax>
            <Parallax x={[0,-10]} styleOuter={{bottom: '-10px'}}>
              <img 
                  src={overlay}
                  alt={'background'}
                  style={{width:'200%'}}
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
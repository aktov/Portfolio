import React from 'react';
import LazyLoad from 'react-lazyload';

import SectionTitle from './SectionTitle';
import Resume from './Resume.js';
import Projects from './Projects.js';

import prof from '../images/profilePic2.jpg';

const About = (props) => {
  return (
    <div 
      className='wrapper'
      data-aos='fade' 
      data-aos-offset='100' 
      data-aos-easing='ease-out-sine'
      data-aos-duration='400'
      data-aos-once={true}
    >
      <div id='anchor_about' className='anchor'></div>
      <SectionTitle title='about me'/> 
      <div className='about'>
        <div className='text' style={props.screenWidth > 640 ? null : {width: '100%'}}>
          <p> I’m Alex, and I often find my head stuck in daydreams and clouds. Why? It's simply because I like to think of ideas that can be materialized through design. </p>
          <p> Having graduated from <b>UC San Diego</b> with a B.S. in <b>Human Computer Interaction</b>, I’ve come to truly believe that good user-centric design has the potential to greatly benefit the world. Design isn’t just about “making things look good”; it’s much more than that. It’s about <b>providing an excellent overall user experience</b> that will ensure the user’s satisfaction. </p>
          <p> If you’re interested in getting to know me more or want to hear more about my projects, feel free to message me. I’d love to connect or collaborate! </p>
        </div>
        <div 
          className={props.screenWidth > 640 ? 'pic desktop' : 'pic mobile'}
          data-aos='fade' 
          data-aos-offset='50' 
          data-aos-easing='ease-out-sine'
          data-aos-duration='400'
          data-aos-once={true}
        > 
          <LazyLoad height={200} offset={100}>
            <img src={prof} alt='ProfilePic' draggable='false' /> 
          </LazyLoad>
        </div>
      </div>
    </div> 
  );
}



class Content extends React.Component {
  render() {
    return (
      <div className='content'>
        <div id='anchor_page' className='anchor' style={{top: '-1000px'}}></div>
        <About screenWidth={this.props.screenWidth} />
        <Resume screenWidth={this.props.screenWidth} />
        <Projects screenWidth={this.props.screenWidth} />
      </div>
    );
  }
}

export default Content
import React from 'react';
import '../App.scss';

import SectionTitle from './SectionTitle';
import Projects from './Projects.js';

import prof from '../images/profilePic.png';

const Intro = (props) => {
  // Does nothing atm
  function resizeFont(screenWidth) {
    const defaultFontSize = 16;
  }

  return (
    <div className='intro'> 
      <div className='text'>
        <h1 style={{ fontSize: resizeFont(props.screenWidth) }}> I'm Alex, a designer & developer </h1>
        <h4> {`
        My dream is to apply my skills and knowledge to help contribute for a better tomorrow.
        I’m currently looking for opportunities to ...
        `}
        </h4>
      </div>
    </div>   
  );
}


const About = (props) => {
  return (
    <div className='wrapper'>
      <SectionTitle title='about me'/> 
        <div className='content'>
          <div className='text'>
            <p> I’m Alex, and I often find my head stuck in daydreams and clouds. Why? It's simply because I like to think of ideas that can be materialized through design. </p>
            <p> Having graduated from <b>UC SAN DIEGO</b> with a bachelors in Cognitive Science - <b>HUMAN COMPUTER INTERACTION</b>, I’ve come to truly believe that good user-centric design has the potential to greatly benefit the world. Design isn’t just about “making things look good”; it’s much more than that. It’s about providing an excellent overall user experience that will ensure the user’s satisfaction. </p>
            <p> I love working on projects surrounding UI/UX design, but on my free time I also enjoy creating 3D artwork, shooting photography, and traveling. Speaking of traveling, I am currently based in the Bay Area, but I’m willing to start a new chapter in LA or NY as well! </p>
            <p> If you’re interested in getting to know me more or want to hear more about my projects, feel free to message me. I’d love to connect or collaborate! </p>
          </div>
          <div className={props.screenWidth > 640 ? 'pic desktop' : 'pic mobile'}> <img src={prof} alt='ProfilePic' /> </div>
        </div>
    </div> 
  );
}


const Experience = (props) => {
  return (
    <div className='wrapper'>
      <SectionTitle title='experience'/> 

    </div> 
  );
}


class Content extends React.Component {
  render() {
    return (
      <div className='content'>
        <Intro/>
        <About screenWidth={this.props.screenWidth} />
        <Experience/>
        <Projects screenWidth={this.props.screenWidth} />
      </div>
    );
  }
}

export default Content
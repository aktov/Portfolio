import React from 'react';

import Experience from './Experience.js';
import SectionTitle from './SectionTitle.js';
import Phrase from './Phrase.js';

const Education = (props) => {
  return (
    <div 
      className='education'
      data-aos='fade' 
      data-aos-offset='50' 
      data-aos-easing='ease-out-sine'
      data-aos-duration='400'
      data-aos-once={true}
    >
      {/* <SectionTitle title='education'/> */}
      <h4> {'education'.toUpperCase()} </h4>

      <h4> {'University of California, San Diego'} </h4>
      <h5> {'B.S. Cognitive Science, Human Computer Interaction Specialization'} </h5>
      {/* <h5> {'Human Computer Interaction Specialization'} </h5> */}
      <h5> {'March 2020'.toUpperCase()}  </h5> 
    </div>
  );
}

const Skills = (props) => {
  return (
    <div className='skills'>
      {/* <SectionTitle title='skills'/> */}
      <h4> {'skills'.toUpperCase()} </h4>
      
      {Object.keys(skillsList).map(key =>
        <div 
          className='phrases'
          data-aos='fade' 
          data-aos-offset='50' 
          data-aos-easing='ease-out-sine'
          data-aos-duration='400'
          data-aos-once={true}
        >
          <h4> {key} </h4>
          {skillsList[key].map((phrase, index) => 
            <Phrase key={key + '/' + phrase} text={phrase}/>
          )}
        </div>
      )}

    </div>
  );
}


const skillsList = {
  'Programming': [
    'HTML/CSS',
    'Javascript',
    'Lua'
  ],
  'Frameworks': [
    'React',
    'Sass'
  ],
  'UI Methods': [
    'Wireframing',
    'Mockups',
    'Prototyping'
  ],
  'UX Methods': [
    'User Personas',
    'Storyboards',
    'Competitive Analyses',
    'Affinity Diagrams'
  ],
  'Design Programs & Software': [
    'Google: Slides, Drawings',
    'Adobe: Photoshop, Lightroom, Illustrator',
    'Figma',
    'AutoCAD',
    'Blender',
    'SketchUp'
  ]
}



class Resume extends React.Component {
  render() {
    return (
      <div 
        className='wrapper' 
        style={this.props.screenWidth > 768 ? {width: '60%', paddingLeft: '5rem'} : null}
      >
        <div id='anchor_resume' className='anchor'></div>
        <SectionTitle title='resume'/> 

        <div className='resume'>
          <Education/>
          <Experience/>
          <Skills/>
        </div>
      </div>
    );
  }
}

export default Resume;
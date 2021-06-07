import React from 'react';

import Experience from './Experience.js';
// import SectionTitle from './SectionTitle.js';
import Phrase from './Phrase.js';

const Education = (props) => {
  return (
    <div 
      className='education'
      data-aos='fade' 
      data-aos-offset='50' 
      data-aos-easing='ease-out-sine'
      data-aos-duration='400'
      data-aos-delay='200'
      data-aos-once={true}
    >
      {/* <SectionTitle title='education'/> */}
      <h4> {'education'.toUpperCase()} </h4>

      <h4> {'B.S. Cognitive Science, Human Computer Interaction Specialization'} </h4>
      <h5> {'University of California San Diego'} </h5>
      {/* <h5> {'Human Computer Interaction Specialization'} </h5> */}
      <h5> {'March 2020'}  </h5> 
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
          className={props.screenWidth <= 1024 ? 'phrasesM' : 'phrases'}
          key={key}
          data-aos='fade' 
          data-aos-offset='50' 
          data-aos-easing='ease-out-sine'
          data-aos-duration='400'
          data-aos-once={true}
        >
          <h4> {key} </h4>
          {skillsList[key].map(phrase => 
            <Phrase key={key + '/' + phrase} text={phrase}/>
          )}
        </div>
      )}

    </div>
  );
}


const skillsList = {
  'Languages & Info': [
    'HTML/CSS',
    'JavaScript',
    'Lua'
  ],
  'Frameworks': [
    'React.js',
    'Tailwind CSS',
    'Sass',
  ],
  'UI Methods': [
    'Wireframing',
    'Mockups',
    'Prototyping'
  ],
  'UX Methods': [
    'User Testing',
    'Personas',
    'Storyboards',
    'Competitive Analyses',
    'Affinity Diagrams',
    'Mood Boards'
  ],
  'Design Apps': [
    'Figma',
    'Google: Slides, Drawings',
    'Adobe: Photoshop, Lightroom',
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
        style={{width: '100%', marginBottom: '0rem'}}
      >
        {/* <div id='anchor_resume' className='anchor'></div> */}
        {/* <SectionTitle title='resume'/>  */}

        <div className='resume'>
          <Education/>
          <Experience screenWidth={this.props.screenWidth}/>
          <Skills screenWidth={this.props.screenWidth}/>
        </div>
      </div>
    );
  }
}

export default Resume;
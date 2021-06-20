import React from 'react';

import Phrase from './Phrase.js';

const skillsList = {
  'Languages': [
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

class Skills extends React.Component {
  render() {
    return (
      <div className='skills'>
        {Object.keys(skillsList).map(key =>
          <div 
            className='listing minimized'
            key={key}
            data-aos='fade' 
            data-aos-offset='50' 
            data-aos-easing='ease-out-sine'
            data-aos-duration='400'
            data-aos-once={true}
          >
            <h4> {key} </h4>
            <div className='phrases'>
              {skillsList[key].map(phrase => 
                <Phrase key={key + '/' + phrase} text={phrase}/>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Skills;
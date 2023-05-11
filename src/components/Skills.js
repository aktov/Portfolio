import React from 'react';

import Phrase from './Phrase.js';

const skillsList = {
  'Research': [
    'Design Thinking',
    'User Research',
    'Need Finding',
    'Storyboarding',
    'Competitive Analysis',
    'Usability Testing',
  ],

  'Design': [
    'Design Systems',
    'Information Architecture',
    'Wireframing',
    'Mockups',
    'Prototyping'
  ],
  
  'Programming & Frameworks': [
    'HTML/CSS',
    'JavaScript',
    'Lua',
    'React.js',
    'Tailwind CSS',
    'Sass',
    'MJML'
  ],

  'Applications': [
    'Figma',
    'Maze.co',
    'Typeform',
    'Squarespace',
    'Google Suite',
    'Microsoft Office',
    'GitHub',
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
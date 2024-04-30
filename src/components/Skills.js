import React from 'react';

import Phrase from './Phrase.js';

const skillsList = {
  'UX Research': [
    'Usability Testing',
    'A/B Testing',
    'Design Thinking',
    'User Research',
    'Storyboarding',
    'Competitive Analysis',
  ],

  'UI Design': [
    'Design Systems',
    'Information Architecture',
    'Wireframing',
    'Mockups',
    'Prototyping'
  ],

  'Design Tools': [
    'Figma',
    'Webflow',
    'Maze.co',
    'Typeform',
    'Squarespace',
    'Adobe Lightroom',
    'Adobe Photoshop',
    'GitHub',
  ],
  
  'Frameworks & Coding': [
    'HTML/CSS',
    'JavaScript',
    'Lua',
    'React.js',
    'Tailwind CSS',
    'Sass',
    'MJML'
  ]
}

class Skills extends React.Component {
  render() {
    return (
      <div className='skills'>
        {Object.keys(skillsList).map(key =>
          <div 
            className='listing'
            key={key}
            data-aos='fade-up' 
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
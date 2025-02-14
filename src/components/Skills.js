import React from 'react';

import Phrase from './Phrase.js';
import Tags from './Tags.js';

const skillsList = {
  'Research': {
    'description': 'I typically leverage these methods to validate design decisions, ensuring our products meet our user needs and company goals.',
    'list': [
      'Usability Testing',
      'A/B Testing',
      'Design Thinking',
      'User Research',
      'Storyboarding',
      'Competitive Analysis',
    ]
  },

  'Design': {
    'description': 'I strive to create intuitive experiences by designing quickly-testable mockups and interactive, high-fidelity prototypes.',
    'list': [
      'Design Systems',
      'Information Architecture',
      'Wireframing',
      'Mockups',
      'Prototyping'
    ]
  },

  'Product Design Tools': {
    'description': 'I primarily use Figma to rapidly prototype, iterate, and collaborate with developers to ensure seamless handoffs. I am also well-versed with the other tools and applications below.',
    'list': [
      'Figma',
      'Sketch',
      'Webflow',
      'Maze.co',
      'Typeform',
      'Squarespace',
      'Adobe Lightroom',
      'Adobe Photoshop',
    ]
  },
  
  'Front-End & Frameworks': {
    'description': 'My decent understanding of front-end development allows me to bridge the gap between design and development more efficiently.',
    'list': [
      'HTML/CSS',
      'JavaScript',
      'React.js',
      'Tailwind CSS',
      'Sass',
      'Lua',
      'GitHub'
    ]
  }
}

const tagColor = '#666666'

// class Skills extends React.Component {
//   render() {
//     return (
//       <div className='skills'>
//         {Object.keys(skillsList).map(key =>
//           <div 
//             className='listing'
//             key={key}
//             data-aos='fade-up' 
//             data-aos-offset='50' 
//             data-aos-easing='ease-out-sine'
//             data-aos-duration='400'
//             data-aos-once={true}
//           >
//             <h4> {key} </h4>
//             <div className='phrases'>
//               {skillsList[key].map(phrase => 
//                 <Phrase key={key + '/' + phrase} text={phrase}/>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

const Skills = () => {
  return(
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
          <div className='left'>
            <p> {skillsList[key].description} </p>
            <Tags names={skillsList[key].list} color={tagColor}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
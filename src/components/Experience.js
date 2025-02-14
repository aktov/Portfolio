import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Phrase from './Phrase.js';
import Tags from './Tags.js';

// import open from '../images/open.svg';

const tagColor = '#666666'

// class Experience extends React.Component {
//   render() {
//     return (
//         <div className='experience'>
//           {/* <JobListing 
//             screenWidth={this.props.screenWidth}
//             title='UX Designer'
//             location='VEU Enterlink'
//             // link='https://www.enterverse.com/'
//             period='May 2024 - Current'
//             // duration='1 yr 3 mo'
//             // highlight={true}
//             info={[
//               'Established the company\'s design process and design system, streamlining consistent design and development across our websites and web apps.',
//               'Designed Enterlink, a platform for creating, managing, and discovering online events and communities. ',
//               'Conducted a pilot study to assess product-market fit, increasing engagement by incorporating “personality type” themed questions. ',
//               'Work closely with cross-functional teams and facilitate design hand-offs in meetings to ensure user needs and technical constraints are met.',
//               'Research and design solutions for features in our backlog by conducting competitive analysis, creating high-fidelity mockups, and user testing interactive prototypes.'
//             ]}
//             // skills={['user research', 'design systems', '', 'prototyping']}
//           />
//           <JobListing 
//             screenWidth={this.props.screenWidth}
//             title='UI Designer (Contract)'
//             location='Geoffrey'
//             period='Oct 2024 - Dec 2024'
//             duration='2 mo'
//             // highlight={true}
//             info={[
//               'Built and documented our component library and style guide, based on initial mocks and ideas.',
//               'Updated our initial mocks into organized, functional prototypes with increased consistency throughout user flows by utilizing reusable components and variants.',
//             ]}
//           />
//           <JobListing 
//             screenWidth={this.props.screenWidth}
//             title='UI/UX Designer'
//             location='Artist Crowdfund Exchange'
//             // link='https://www.ace.fan/'
//             period='Aug 2021 - Oct 2022'
//             duration='1 yr 3 mo'
//             // highlight={true}
//             info={[
//               'Established our design process and design system, which boosted design and development efficiency, solidified brand identity, and increased consistency throughout the app.',
//               'Led design and prototyping sessions to enhance alignment with developers, notably reducing shipment times for projects and features.',
//               'Guided monthly UX-focused feature backlog prioritizations to strike a balance between company goals and user needs. ',
//               'Designed and launched 3 major features (Onboarding, Events, Profiles), accounting for majority of the app\'s screens at release. The Profiles feature alone increased DAU by 12% in its first week by presenting users with enhanced profile personalization options.',
//               'Collaborated with company founders to create pitch decks for prospective stakeholders and seed fundraising. '

//             ]}
//           />
//           <JobListing 
//             screenWidth={this.props.screenWidth}
//             title='UI/UX Designer'
//             location='Alike'
//             // link='https://www.alike.dating/'
//             period='Mar 2021 - Aug 2021'
//             duration='6 mo'
//             // highlight={true}
//             info={[
//               'Worked directly with the CEO to conceptualize and design features to drive product growth and user engagement. ',
//               'Converted static mockup screens into interactive prototypes to better help developers visualize app features and functionality.',
//               'Increased user conversion rate from 20% to 65% by identifying and solving a critical issue with our onboarding flow which had deterred users from signing up.'

//             ]}
//           />
//           <JobListing 
//             screenWidth={this.props.screenWidth}
//             title='UI/UX Designer'
//             location='Hon-Media'
//             // link='https://hon-media.com/'
//             period='Sept 2020 - Jul 2021'
//             duration='11 mo'
//             // highlight={true}
//             info={[
//               'Spearheaded the company\'s blog website development by implementing an iterative design process.',
//               'Organized and guided design critique sessions with project managers and software developers to showcase usability flows and features.',
//               'Ensured the web & mobile responsiveness and styling of the blog site by utilizing Tailwind CSS to edit properties of our React components in our front-end code.'
//             ]}
//           />
//           <JobListing 
//             screenWidth={this.props.screenWidth}
//             title='Computing Services Technical Assistant'
//             location='UCSD Extension'
//             // link='https://extension.ucsd.edu/courses-and-programs?gclid=CjwKCAjwq7aGBhADEiwA6uGZp8glMnCeS0HOaSlp0KuQzu7T42I22yywjRB6MzFP-S1DLl8k889VIBoCNugQAvD_BwE'
//             period='Sept 2017 - Mar 2020'
//             duration='2 yr 7 mo'
//             info={[
//               'Diagnosed and resolved technical issues that our end-users (instructors) encountered during class sessions such as projector/audio and wifi connectivity issues. Conducted over the phone and in person.',
//               'Improved our IT team\'s productivity by reorganizing computer components based on their frequency of usage and updating documentation and diagrams for those components.',
//               'Upgraded computer hardware (RAM, memory, hard drives) and updated software (Microsoft Office, Adobe Creative Cloud, installed apps) of our campus administrative staff\'s PCs and iMacs.'
//             ]}
//           />
//           <JobListing 
//             screenWidth={this.props.screenWidth}
//             title='Website Graphics Designer'
//             location='US Trading Co.'
//             // link='https://www.ustrading.com/en/'
//             period='Jun 2017 - Aug 2017'
//             duration='3 mo'
//             info={[
//               'Photographed new products in a controlled studio space and learned how to balance f-stop, aperture, and shutter speed. Also managed a three-point lighting set up.',
//               'Edited product photos in Adobe Lightroom and Photoshop for pre-uploading.',
//               'Used Adobe InDesign to update the existing website catalog with new photos.'
//             ]}
//           /> */}
//         </div>
//     );
//   }
// }


// const Experience = ({ jobs, screenWidth }) => {
//   return (
//     <div className='experience'>
      
//     </div>
//   );
// };


// const Experience = ({ jobs, screenWidth }) => {
//   return (
//     <div className="experience-container">
//       {/* Sticky Left Column */}
//       <div className="left-column">
//         {jobs.map((job, index) => (
//           <div key={index} className="company">
//             {job.company}
//           </div>
//         ))}
//       </div>

//       {/* Parallax Right Column */}
//       <Parallax pages={jobs.length} className="right-column">
//         {jobs.map((job, index) => (
//           <ParallaxLayer 
//             key={index} 
//             offset={index} 
//             speed={0.5} 
//             className="job-details"
//           >
//             <h3>{job.title}</h3>
//             <p>{job.period}</p>
//             <div className='phrases'>
//               {job.info.map((phrase, index) => 
//                 <Phrase key={jobs.title + '/' + index} text={phrase}/>
//               )}
//             </div>
//           </ParallaxLayer>
//         ))}
//       </Parallax>
//     </div>
//   );
// };

const Experience = ({ jobs, screenWidth }) => {
  return (
    <div className='experience'>
      {jobs.map((jobs, index) => (
          screenWidth > 768 ?
          <div 
            className='listing'
            key={index}
            data-aos='fade-up' 
            data-aos-offset='50' 
            data-aos-easing='ease-out-sine'
            data-aos-duration='400'
            data-aos-once={true}
          >
            <div className='left'>
              {/* <h4> {jobs.title} </h4> */}
              <h4> {jobs.company} </h4>
              <p> {jobs.period} </p> 
              <div>
                  {jobs.industry && <Tags names={jobs.industry} color={tagColor}/>}
              </div>
            </div>
            <div className='right'>
              <h4> {jobs.title} </h4>
              <div className='phrases'>
                {jobs.info.map((phrase, index) => 
                  <Phrase key={jobs.title + '/' + index} text={phrase}/>
                )}
              </div>
            </div>
          </div>
        :
          <div 
            className='listing mobile'
            key={index}
            data-aos='fade-up' 
            data-aos-offset='50' 
            data-aos-easing='ease-out-sine'
            data-aos-duration='400'
            data-aos-once={true}
          >
            <h4> {jobs.title} </h4>
            <h5> @{jobs.company} </h5>
            <p className='period'> {jobs.period} </p> 
            <div>
                {jobs.industry && <Tags names={jobs.industry} color={tagColor}/>}
            </div>
          </div>   
      ))}
    </div>
  );
};

export default Experience;
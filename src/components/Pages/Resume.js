import React from 'react';
import ReactGA from 'react-ga';

import Title from '../Title';
import Experience from '../Experience';
import Skills from '../Skills';
import resume_pdf from '../../pdfs/Resume_AlexTov.pdf';

import open from '../../images/open.svg';

// Returns style based on breakpoints, of which there are 3
const decideMarginWidth = function(value) {
  if (value > 1280) {
    return {}
  } else if (value > 768) {
    return {width: '70%'}
  }
  return {width: '75%'}
} 

const lessMargins = {marginBottom: '.5rem'}


const jobs = [
  {
    title: 'UX Designer',
    company: 'VEU Enterlink',
    period: 'May 2024 - Current',
    info: [
      'Established the company\'s design process and design system, streamlining consistent design and development across our websites and web apps.',
      'Designed Enterlink, a platform for creating, managing, and discovering online events and communities. ',
      'Conducted a pilot study to assess product-market fit, increasing engagement by incorporating “personality type” themed questions. ',
      'Work closely with cross-functional teams and facilitate design hand-offs in meetings to ensure user needs and technical constraints are met.',
      'Research and design solutions for features in our backlog by conducting competitive analysis, creating high-fidelity mockups, and user testing interactive prototypes.'
    ],
    industry: ['VR', 'events', 'online communities', 'gamification']
  },
  {
    title: 'UI Designer (Contract)',
    company: 'Geoffrey',
    period: 'Oct 2024 - Dec 2024',
    info: [
      'Built and documented our component library and style guide, based on initial mocks and ideas.',
      'Updated our initial mocks into organized, functional prototypes with increased consistency throughout user flows by utilizing reusable components and variants.',
    ],
    industry: ['service marketplace', 'booking system', 'on-demand services' ]
  },
  {
    title: 'UI/UX Designer',
    company: 'Artist Crowdfund Exchange',
    period: 'Aug 2021 - Oct 2022',
    info: [
      'Established our design process and design system, which boosted design and development efficiency, solidified brand identity, and increased consistency throughout the app.',
      'Led design and prototyping sessions to enhance alignment with developers, notably reducing shipment times for projects and features.',
      'Guided monthly UX-focused feature backlog prioritizations to strike a balance between company goals and user needs. ',
      'Designed and launched 3 major features (Onboarding, Events, Profiles), accounting for majority of the app\'s screens at release. The Profiles feature alone increased DAU by 12% in its first week by presenting users with enhanced profile personalization options.',
      'Collaborated with company founders to create pitch decks for prospective stakeholders and seed fundraising. '
    ],
    industry: ['web3', 'blockchain', 'social media', 'crowdfunding']
  },
  {
    title: 'UI/UX Designer',
    company: 'Alike',
    period: 'Mar 2021 - Aug 2021',
    info: [
      'Worked directly with the CEO to conceptualize and design features to drive product growth and user engagement. ',
      'Converted static mockup screens into interactive prototypes to better help developers visualize app features and functionality.',
      'Increased user conversion rate from 20% to 65% by identifying and solving a critical issue with our onboarding flow which had deterred users from signing up.'
    ],
    industry: ['dating app', 'social media', 'marketing']
  },
  {
    title: 'UI/UX Designer',
    company: 'Hon-Media',
    period: 'Sept 2020 - Jul 2021',
    info: [
      'Spearheaded the company\'s blog website development by implementing an iterative design process.',
      'Organized and guided design critique sessions with project managers and software developers to showcase usability flows and features.',
      'Ensured the web & mobile responsiveness and styling of the blog site by utilizing Tailwind CSS to edit properties of our React components in our front-end code.'
    ],
    industry: ['design consulting', 'business strategy', 'local community']
  },
  {
    title: 'Computing Services Technical Assistant',
    company: 'UCSD Extension',
    period: 'Sept 2017 - Mar 2020',
    info: [
      'Diagnosed and resolved technical issues that our end-users (instructors) encountered during class sessions such as projector/audio and wifi connectivity issues. Conducted over the phone and in person.',
      'Improved our IT team\'s productivity by reorganizing computer components based on their frequency of usage and updating documentation and diagrams for those components.',
      'Upgraded computer hardware (RAM, memory, hard drives) and updated software (Microsoft Office, Adobe Creative Cloud, installed apps) of our campus administrative staff\'s PCs and iMacs.'
    ],
    industry: ['IT', 'help desk', 'troubleshooting', 'customer support']
  },
  {
    title: 'Website Graphics Designer',
    company: 'US Trading Co.',
    period: 'Jun 2017 - Aug 2017',
    info: [
      'Photographed new products in a controlled studio space and learned how to balance f-stop, aperture, and shutter speed. Also managed a three-point lighting set up.',
      'Edited product photos in Adobe Lightroom and Photoshop for pre-uploading.',
      'Used Adobe InDesign to update the existing website catalog with new photos.'
    ],
    industry: ['import/export', 'grocery distributor', 'wholesale']
  },
]


const Resume = (props) => { 
  const handleClick = () => {
    // Send custom event to Google Analytics
    ReactGA.event({
      category: 'Resume PDF View',
      action: 'Viewed',
      label: 'Resume PDF viewed', 
      value: 1 // Optional numeric value
    });
  };

  return (
    <div className='resume'>
      <div id='resume' className='anchor' style={props.screenWidth > 768 ? {top: '3rem'} : {top: '-1rem'}}></div>

      <div className='container' style={decideMarginWidth(props.screenWidth)}>
        <Title title='Resume' screenWidth={props.screenWidth} />

        <div className='section'>
          <div className={props.screenWidth > 768 ? 'experienceHeader' : 'experienceHeader mobile'}>
            {props.screenWidth > 768 ? 
              <>
              <h3> Experience </h3>
              <div className={props.screenWidth > 768 ? 'pdf' : 'pdf mobile'}>
                <a href={resume_pdf} onClick={handleClick} target="_blank" rel="noopener noreferrer">
                  View as a PDF instead
                  <img src={open} alt='Follow link' draggable='false' /> 
                </a>
              </div>
              </>
              :
              <>
              <div className={props.screenWidth > 768 ? 'pdf' : 'pdf mobile'}>
                <a href={resume_pdf} onClick={handleClick} target="_blank" rel="noopener noreferrer">
                  View as a PDF instead
                  <img src={open} alt='Follow link' draggable='false' /> 
                </a>
              </div>
              <h3> Experience </h3>
              </>
            }
          </div>
          <Experience screenWidth={props.screenWidth} jobs={jobs}/>
        </div>

        <div className='section'>
          <h3> Expertise </h3>
          <Skills screenWidth={props.screenWidth}/>
        </div>

        {/* <div className='section'>
          <h3> Education </h3>
          <div className='education'>
            <h4>
              B.S. Human Computer Interaction (HCI)
            </h4>
            <h5 style={lessMargins}> University of California, San Diego (2020)</h5>
          </div>
        </div> */}

      </div>

      
    </div>
  );
}

export default Resume;
import React from 'react'

import Phrase from './Phrase.js';

// import open from '../images/open.svg';

const JobListing = (props) => {
  return (
    <>
    {props.screenWidth > 768 ?
      <>
      <div 
        className='listing'
        style={props.highlight ? {paddingLeft: '5%'} : null}
        data-aos='fade' 
        data-aos-offset='50' 
        data-aos-easing='ease-out-sine'
        data-aos-duration='400'
        data-aos-once={true}
      >
        {props.highlight ? 
          <>
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '3%',
                minWidth: '16px',
                height: '100%',
                backgroundColor: '#8CA7BF',
                zIndex: -1
              }}
            />
            {/* <div
              style={{
                position: 'absolute',
                top: '0rem',
                right: '0rem',
                width: '8rem',
                height: '8rem',
                backgroundColor: '#8CA7BF',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  width: '16rem',
                  height: '16rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8rem',
                }}
              />
            </div> */}
            <h4> {props.title} </h4>
            {/* <h5> <a href={props.link} target="_blank" rel="noopener noreferrer"> {'@' + props.location} <img src={open}/></a> </h5> */}
            <h5> <a href={props.link} target="_blank" rel="noopener noreferrer"> {'@' + props.location} </a> </h5>
            <h5> {props.period} </h5> 
            <div className='phrases'>
              {props.info.map((phrase, index) => 
                <Phrase key={props.title + '/' + index} text={phrase}/>
              )}
            </div>
          </>
          :
          <>
            <h4> {props.title} </h4>
            <h5> <a href={props.link} target="_blank" rel="noopener noreferrer"> {'@' + props.location} </a> </h5>
            <h5> {props.period} </h5> 
            <div className='phrases'>
              {props.info.map((phrase, index) => 
                <Phrase key={props.title + '/' + index} text={phrase}/>
              )}
            </div>
          </>
        }
      </div>
      </>
    :
      <div 
        className='listing'
        data-aos='fade' 
        data-aos-offset='50' 
        data-aos-easing='ease-out-sine'
        data-aos-duration='400'
        data-aos-once={true}
      >
        {props.highlight ? 
          <>
            <div
              style={{
                position: 'absolute',
                top: '0rem',
                right: '0rem',
                width: '4rem',
                height: '4rem',
                backgroundColor: '#8CA7BF',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: '-4rem',
                  left: '-4rem',
                  width: '8rem',
                  height: '8rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '4rem',
                }}
              />
            </div>
            <h4> {props.title} </h4>
            <h5> <a href={props.link} target="_blank" rel="noopener noreferrer"> {'@' + props.location} </a> </h5>
            <h5> {props.period} </h5> 
            <div className='phrases'>
              {props.info.map((phrase, index) => 
                <Phrase key={props.title + '/' + index} text={phrase}/>
              )}
            </div>
          </>
          :
          <>
            <h4> {props.title} </h4>
            <h5> <a href={props.link} target="_blank" rel="noopener noreferrer"> {'@' + props.location} </a> </h5>
            <h5> {props.period} </h5> 
            <div className='phrases'>
              {props.info.map((phrase, index) => 
                <Phrase key={props.title + '/' + index} text={phrase}/>
              )}
            </div>
          </>
        }
      </div>   
    }
    </>
  );
}

class Experience extends React.Component {
  render() {
    return (
        <div 
          className='experience'
          data-aos='fade' 
          data-aos-offset='100' 
          data-aos-easing='ease-out-sine'
          data-aos-duration='400'
          data-aos-delay='300'
          data-aos-once={true}
        >
          <JobListing 
            screenWidth={this.props.screenWidth}
            title='UI/UX Designer'
            location='Artist Crowdfund Exchange'
            link='https://www.ace.fan/'
            period='August 2021 - October 2022'
            // highlight={true}
            info={[
              'Conducted user interviews and surveys to gather data to drive my initial designs for new features and updates.',
              'Led prototyping sessions with our developers to respond to their questions and ensured they understood the functionality of new features and visual animations.',
              'Guided monthly UX-focused feature backlog prioritizations to strike a balance between company goals and user needs (which increased user satisfaction whenever a requested feature was implemented).',
              'Collaborated with company founders to create pitch decks for prospective stakeholders and seed fundraising. I contributed user data (such as DAU) as info and ensured a consistent design style throughout each slide.',
              'Built a style guide and flexible component library in our Figma Team for brand consistency and design cohesion throughout different screens and features, which greatly increased the design team\'s work efficiency.',
              'Designed 5 new & major features, 3 of which are currently live on the app, accounting for 50% of the app’s screens (Onboarding, Events, Profiles). Ultimately increased user engagement with our app.'
            ]}
          />
          <JobListing 
            screenWidth={this.props.screenWidth}
            title='UI/UX Designer'
            location='Alike'
            link='https://www.alike.dating/'
            period='March 2021 - August 2021'
            // highlight={true}
            info={[
              'Updated existing app screens with designs more aligned with modern trends and styles.',
              'Worked directly with the CEO to draft wireframes of future features to meet the needs and expectations of our users.',
              'Transformed static mockup screens into interactive prototypes to better help the developers visualize app features and functionality.',
              'Identified a key issue with our onboarding flow which deterred users from signing up and designed a fix that increased user acquisition.'
            ]}
          />
          <JobListing 
            screenWidth={this.props.screenWidth}
            title='UI/UX Designer'
            location='Hon-Media'
            link='https://hon-media.com/'
            period='September 2020 - July 2021'
            // highlight={true}
            info={[
              'Spearheaded the company\'s blog website development by designing its initial wireframes, mockups, and final prototype.',
              'Organized design critique sessions with project managers and software developers to showcase usability flows and features.',
              'Ensured the web & mobile responsiveness and stylings of the blog site by utilizing Tailwind CSS.'
            ]}
          />
          <JobListing 
            screenWidth={this.props.screenWidth}
            title='Computing Services Technical Assistant'
            location='UCSD Extension'
            link='https://extension.ucsd.edu/courses-and-programs?gclid=CjwKCAjwq7aGBhADEiwA6uGZp8glMnCeS0HOaSlp0KuQzu7T42I22yywjRB6MzFP-S1DLl8k889VIBoCNugQAvD_BwE'
            period='September 2017 - March 2020'
            info={[
              'Solved technical issues that instructors struggled with e.g. projector, audio, internet connectivity which were pivotal to their class session.',
              'Improved the team\'s workflow efficiency by actively reorganizing computer components based on their frequency of usage.',
              'Upgraded computer hardware/software e.g. RAM, memory, hard drive images.',
              'Updated the software of our campus administrative workers\'s PC desktops and iMacs e.g. Adobe Suite, Microsoft Office, web browsers, Adobe Flash, Java.'
            ]}
          />
          <JobListing 
            screenWidth={this.props.screenWidth}
            title='Website Graphics Designer'
            location='US Trading Co.'
            link='https://www.ustrading.com/en/'
            period='June 2017 - August 2017'
            info={[
              'Photographed new products in a controlled studio space and learned how to balance f-stop, aperture, and shutter speed. Also managed a three-point lighting set up.',
              'Edited product photos in Adobe Lightroom and Photoshop for pre-uploading.',
              'Used Adobe InDesign to update the existing website catalog with new photos.'
            ]}
          />
        </div>
    );
  }
}


export default Experience;
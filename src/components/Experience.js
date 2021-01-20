import React from 'react'

// import SectionTitle from './SectionTitle';

import Phrase from './Phrase.js';

const JobListing = (props) => {
  return (
      <div 
        className='listing'
        data-aos='fade' 
        data-aos-offset='50' 
        data-aos-easing='ease-out-sine'
        data-aos-duration='400'
        data-aos-once={true}
      >
        <h4> {props.title} </h4>
        <h5> {props.location} </h5>
        <h5> {props.period.toUpperCase()} </h5> 
        <div className='phrases'>
          {props.info.map((phrase, index) => 
            <Phrase key={props.title + '/' + index} text={phrase}/>
          )}
        </div>
      </div>
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
          data-aos-once={true}
        >
          <div id='anchor_experience' className='anchor'></div>
          {/* <SectionTitle title='work experience'/>  */}
          <h4> {'experience'.toUpperCase()} </h4>

          <JobListing 
            title='UI/UX Designer'
            location='Hon-Media, Remote'
            period='sept. 2020 - current'
            info={[
              'Initiated the blog website development by starting off with user research and then proceeding onto wireframes and Figma prototypes',
              'Walked through the design choices of the prototype with team members during critique and feedback sessions',
              'Utilized Tailwind CSS to ensure the web & mobile responsiveness of blog site'
            ]}
          />
          <JobListing 
            title='Computing Services Technical Assistant'
            location='UCSD Extension, San Diego, CA'
            period='sept. 2017 - mar. 2020'
            info={[
              'Solved technical issues that instructors struggled with e.g. projector connectivity, audio, internet',
              'Improved the team’s workflow efficiency by actively reorganizing computer components based on their frequency of usage',
              'Upgraded computer hardware/software e.g. RAM, memory, hard drive images'
            ]}
          />
          <JobListing 
            title='Website Graphics Designer'
            location='US Trading Company, Hayward, CA'
            period='jun. - aug. 2017'
            info={[
              'Photographed new products',
              'Edited product photos in Adobe Lightroom and Photoshop for pre-uploading',
              'Used Adobe InDesign to update the existing website catalog with new photos'
            ]}
          />
        </div>
    );
  }
}


export default Experience;
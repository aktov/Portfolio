import React from 'react'

import Phrase from './Phrase.js';

const JobListing = (props) => {
  return (
      <div 
        className={props.screenWidth <= 1024 ? 'listingM' : 'listing'}
        data-aos='fade' 
        data-aos-offset='50' 
        data-aos-easing='ease-out-sine'
        data-aos-duration='400'
        data-aos-once={true}
      >
        <h4> {props.title} </h4>
        <h5> {props.location} </h5>
        <h5> {props.period} </h5> 
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
          data-aos-delay='300'
          data-aos-once={true}
        >
          <div id='anchor_experience' className='anchor'></div>
          {/* <SectionTitle title='work experience'/>  */}
          <h4 style={{marginBottom: '1rem'}}> {'experience'.toUpperCase()} </h4>

          <JobListing 
            screenWidth={this.props.screenWidth}
            title='UI/UX Designer'
            location='Alike, Remote'
            period='Mar. 2021 - Current'
            info={[
              'Modified and updated existing app screens with UI designs more aligned with modern trends and styles (e.g. navigation bar, headers, icons, and many other specific screens)',
              'Designed prototypes of new app screens and new user flows on Figma for the dev team to create',
              'Used Figma Prototyping to turn our static prototype screens into a functional, interactable flow which better helped the developers visualize the app and its functionality',
              'Helped quadruple the conversion rate of app downloads to users'
            ]}
          />
          <JobListing 
            screenWidth={this.props.screenWidth}
            title='UI/UX Designer'
            location='Hon-Media, Remote'
            period='Sept. 2020 - Current'
            info={[
              'Initiated the blog website development by starting off with user research and then proceeding onto wireframes and Figma prototypes',
              'Walked through the design choices of the prototype with team members during critique and feedback sessions',
              'Utilized Tailwind CSS to ensure the web & mobile responsiveness of blog site'
            ]}
          />
          <JobListing 
            screenWidth={this.props.screenWidth}
            title='Computing Services Technical Assistant'
            location='UCSD Extension, San Diego, CA'
            period='Sept. 2017 - Mar. 2020'
            info={[
              'Solved technical issues that instructors struggled with e.g. projector connectivity, audio, internet',
              'Improved the team’s workflow efficiency by actively reorganizing computer components based on their frequency of usage',
              'Upgraded computer hardware/software e.g. RAM, memory, hard drive images'
            ]}
          />
          <JobListing 
            screenWidth={this.props.screenWidth}
            title='Website Graphics Designer'
            location='US Trading Company, Hayward, CA'
            period='Jun. - Aug. 2017'
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
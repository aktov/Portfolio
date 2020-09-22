import React from 'react'

import SectionTitle from './SectionTitle';

import bullet from '../images/bullet.svg';

const Phrase = (props) => {
  return (
    <div className='phrase'>
      <img src={bullet} alt='bullet' />
      <p> {props.text} </p>
    </div>
  );
}

const JobListing = (props) => {
  return (
      <div 
        className='experience'
        data-aos='fade' 
        data-aos-offset='50' 
        data-aos-easing='ease-out-sine'
        data-aos-duration='400'
        data-aos-once={true}
      >
        <h4> {props.title.toUpperCase()} </h4>
        <h5> {props.location.toUpperCase()} </h5>
        <h5> {props.period.toUpperCase()} </h5> 
        <div className='phrases'>
          {props.info.map((phrase, index) => 
            <Phrase key={index} text={phrase} />
          )}
        </div>
      </div>
  );
}

class Experience extends React.Component {
  render() {
    return (
      <div 
        className='wrapper' 
        style={this.props.screenWidth > 768 ? {width: '50%'} : null} 
        data-aos='fade' 
        data-aos-offset='200' 
        data-aos-easing='ease-out-sine'
        data-aos-duration='400'
        data-aos-once={true}
      >
        <div id='anchor_experience' className='anchor'></div>
        <SectionTitle title='experience'/> 
        <JobListing 
          title='computing services technical assistant'
          location='ucsd extension, san diego, ca'
          period='sept. 2017 - mar. 2020'
          info={[
            'Provided technical support to staff and instructors in classrooms and offices e.g. display/internet connectivity, sound, software issues',
            'Upgraded hardware/software on staff and lab computers',
            'Imaged and prepped computers and workstations for staff and instructors'
          ]}
        />
        <JobListing 
          title='website graphics designer'
          location='us trading company, hayward, ca'
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
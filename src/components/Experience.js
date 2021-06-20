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
        data-aos-offset='200' 
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
            location='Alike'
            link='https://www.alike.dating/'
            period='Mar. 2021 - Current'
            highlight={true}
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
            location='Hon-Media'
            link='https://hon-media.com/'
            period='Sept. 2020 - Current'
            highlight={true}
            info={[
              'Initiated the blog website development by starting off with user research and then proceeding onto wireframes and Figma prototypes',
              'Walked through the design choices of the prototype with team members during critique and feedback sessions',
              'Utilized Tailwind CSS to ensure the web & mobile responsiveness of blog site'
            ]}
          />
          <JobListing 
            screenWidth={this.props.screenWidth}
            title='Computing Services Technical Assistant'
            location='UCSD Extension'
            link='https://extension.ucsd.edu/courses-and-programs?gclid=CjwKCAjwq7aGBhADEiwA6uGZp8glMnCeS0HOaSlp0KuQzu7T42I22yywjRB6MzFP-S1DLl8k889VIBoCNugQAvD_BwE'
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
            location='US Trading Co.'
            link='https://www.ustrading.com/en/'
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
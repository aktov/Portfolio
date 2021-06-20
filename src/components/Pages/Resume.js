import React from 'react';
// import { Parallax } from 'react-scroll-parallax';

import Title from '../Title';
import Experience from '../Experience';
import Skills from '../Skills';

class Resume extends React.Component { 
  render() {
    return (
      <div className='resume'>
        <div id='anchor_resume' className='anchor' style={this.props.screenWidth > 640 ? {top: '0rem'} : {top: '1rem'}}></div>
        {/* <img src={toplay} alt='clouds' draggable='false' style={{position: 'absolute', width: '100%', top: '0'}}/>  */}

        
        <div className='container' style={this.props.screenWidth > 640 ? null : {width: '75%'}}>
          <Title title='resume' screenWidth={this.props.screenWidth} />
          <div className='section'>
            <h3> SUMMARY </h3>
            <h5>
              Detail-oriented UI/UX Designer with over 3 years of project and work experience and a passion for user-centered design. 
              Currently seeking opportunities to design innovative solutions that will improve user satisfaction and experiences!
            </h5>
          </div>
          <div className='section'>
            <h3> EDUCATION </h3>
            <h4>
              B.S. Cognitive Science, <br/>
              Human Computer Interaction Specialization
            </h4>
            <h5> University of California San Diego </h5>
            <h5> March 2020 </h5>
          </div>
          <div className='section'>
            <h3> EXPERIENCE </h3>
            <Experience screenWidth={this.props.screenWidth}/>
          </div>
          <div className='section'>
            <h3> SKILLS </h3>
            <Skills screenWidth={this.props.screenWidth}/>
          </div>
        </div>
        
        {/* <div className='background_about'>
          <Parallax y={[0,20]} >
            <img 
                src={layer5}
                alt={'background'}
                style={{width:'100%'}}
            />
          </Parallax>
          <Parallax y={[0,25]} >
            <img 
                src={layer4}
                alt={'background'}
                style={{width:'100%'}}
            />
          </Parallax>
          <Parallax y={[0,0]} styleOuter={{position: 'relative'}}>
            <img 
                src={overlay}
                alt={'background'}
                style={{width:'200%'}}
            />
          </Parallax>
        </div> */}

      </div>
    );
  }
}

export default Resume;
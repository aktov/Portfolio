import React from 'react';

import Title from '../Title';
import Experience from '../Experience';
import Skills from '../Skills';

const lessMargins = {marginBottom: '.5rem'}

class Resume extends React.Component { 
  render() {
    return (
      <div className='resume'>
        <div id='resume' className='anchor' style={this.props.screenWidth > 640 ? {top: '0rem'} : {top: '-1rem'}}></div>
        {/* <img src={toplay} alt='clouds' draggable='false' style={{position: 'absolute', width: '100%', top: '0'}}/>  */}

        
        <div className='container' style={this.props.screenWidth > 640 ? null : {width: '75%'}}>
          <Title title='resume' screenWidth={this.props.screenWidth} />
          {/* <div className='section'>
            <h3> SUMMARY </h3>
            <p>
              Detail-oriented UI/UX Designer with over 3 years of project and work experience and a passion for user-centered design. 
            </p>
            <p>
              Currently seeking opportunities to design innovative solutions that will improve user satisfaction and experiences!
            </p>
          </div> */}
          <div className='section'>
            <h3> EDUCATION </h3>
            <h4>
              B.S. Human Computer Interaction
            </h4>
            <p style={lessMargins}> University of California, San Diego (2020)</p>
          </div>
          <div className='section'>
            <h3> EXPERIENCE </h3>
            <Experience screenWidth={this.props.screenWidth}/>
          </div>
          <div className='section'>
            <h3> SKILLS & TOOLS </h3>
            <Skills screenWidth={this.props.screenWidth}/>
          </div>
        </div>
        
      </div>
      
    );
  }
}

export default Resume;
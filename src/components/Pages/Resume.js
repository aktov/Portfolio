import React from 'react';

import Title from '../Title';
import Experience from '../Experience';
import Skills from '../Skills';

const lessMargins = {marginBottom: '.5rem'}

class Resume extends React.Component { 
  render() {
    return (
      <div className='resume'>
        <div id='resume' className='anchor' style={this.props.screenWidth > 640 ? {top: '-3rem'} : {top: '-1rem'}}></div>
        {/* <img src={toplay} alt='clouds' draggable='false' style={{position: 'absolute', width: '100%', top: '0'}}/>  */}

        
        <div className='container' style={this.props.screenWidth > 640 ? null : {width: '75%'}}>
          <Title title='Resume' screenWidth={this.props.screenWidth} />
          <div className='section'>
            <h3> Experience </h3>
            <Experience screenWidth={this.props.screenWidth}/>
          </div>
          <div className='section'>
            <h3> Education </h3>
            <div className='education'>
              <h4>
                B.S. Human Computer Interaction (HCI)
              </h4>
              <p style={lessMargins}> University of California, San Diego (2020)</p>
            </div>
          </div>
          <div className='section'>
            <h3> Skills & Tools </h3>
            <Skills screenWidth={this.props.screenWidth}/>
          </div>
        </div>
        
      </div>
      
    );
  }
}

export default Resume;
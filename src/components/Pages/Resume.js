import React from 'react';

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

class Resume extends React.Component { 
  render() {
    return (
      <div className='resume'>
        <div id='resume' className='anchor' style={this.props.screenWidth > 768 ? {top: '-3rem'} : {top: '-1rem'}}></div>

        <div className='container' style={decideMarginWidth(this.props.screenWidth)}>
          <Title title='Resume' screenWidth={this.props.screenWidth} />

          <div className='section'>
            <div className={this.props.screenWidth > 768 ? 'experienceHeader' : 'experienceHeader mobile'}>
              <h3> Experience </h3>
              {this.props.screenWidth > 768 ? 
              <>
                <div className='pdf'>
                  <a href={resume_pdf} target="_blank" rel="noopener noreferrer">
                    View as a PDF instead
                    <img src={open} alt='Follow link' draggable='false' /> 
                  </a>
                </div>
              </>
              :
              <> </>
              }
            </div>
            <Experience screenWidth={this.props.screenWidth}/>
            {this.props.screenWidth > 768 ? 
            <></> 
            : 
            <> 
              <div className='experienceHeader mobile'>
                <div className='pdf'>
                  <a href={resume_pdf} target="_blank" rel="noopener noreferrer">
                    View as a PDF instead
                    <img src={open} alt='Follow link' draggable='false' /> 
                  </a>
                </div>
              </div>
            </>
            }
          </div>
          <div className='section'>
            <h3> Skills & Tools </h3>
            <Skills screenWidth={this.props.screenWidth}/>
          </div>
          <div className='section'>
            <h3> Education </h3>
            <div className='education'>
              <h4>
                B.S. Human Computer Interaction (HCI)
              </h4>
              <h5 style={lessMargins}> University of California, San Diego (2020)</h5>
            </div>
          </div>
        </div>
        
      </div>
      
    );
  }
}

export default Resume;
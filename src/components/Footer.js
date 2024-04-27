import React from 'react';

import open from '../images/open.svg';

class Footer extends React.Component {

  render() {
    return (
      <div className='footer'>
        <div className={this.props.screenWidth <= 768 ? 'container mobile' : 'container'}>
          <div className='columns'>
            <div className='column'>
              <h6> 
                <a href='mailto:alextovdesign@gmail.com' target="_blank" rel="noopener noreferrer">
                  alextovdesign@gmail.com
                  <img src={open} alt='Follow link' draggable='false' /> 
                </a>
              </h6>
              <h6> 
                <a href='https://www.linkedin.com/in/alex-tov/' target="_blank" rel="noopener noreferrer">
                  LinkedIn
                  <img src={open} alt='Follow link' draggable='false' /> 
                </a>
              </h6>
              <h6> 
                <a href='https://github.com/aktov' target="_blank" rel="noopener noreferrer">
                  GitHub
                  <img src={open} alt='Follow link' draggable='false' /> 
                </a>
              </h6>
            </div>
          </div>
          
          <h6> Designed and built with many, many iterations by Alex </h6>
        </div>
      </div>
    );
  }
}

export default Footer;
import React from 'react';
import ReactGA from 'react-ga';

import open from '../images/open.svg';

// Returns style based on breakpoints, of which there are 3
const decideMarginWidth = function(value) {
  if (value > 1280) {
    return 'container'
  } else if (value > 768) {
    return 'container medium'
  }
  return 'container mobile'
} 

class Footer extends React.Component {
  handleClick = () => {
    // Send custom event to Google Analytics
    ReactGA.event({
      category: 'Footer Link Interaction',
      action: 'Interacted',
      label: 'Footer link interacted', 
      value: 1 // Optional numeric value
    });
  };

  render() {
    return (
      <div className='footer'>
        <div className={decideMarginWidth(this.props.screenWidth)}>
          <div className='columns'>
            <div className='column'>
              <a href='mailto:alextovdesign@gmail.com' target="_blank" rel="noopener noreferrer">
                <h6> alextovdesign@gmail.com </h6>
                <img src={open} alt='Follow link' draggable='false' /> 
              </a>
              <a href='https://www.linkedin.com/in/alex-tov/' target="_blank" rel="noopener noreferrer">
                <h6> LinkedIn </h6>
                <img src={open} alt='Follow link' draggable='false' /> 
              </a>
              {/* <a href='https://github.com/aktov' target="_blank" rel="noopener noreferrer">
                <h6> GitHub </h6>
                <img src={open} alt='Follow link' draggable='false' /> 
              </a> */}
            </div>
          </div>

          <div className='columns'>
            <div className='column'>
              {/* <h6> If you like what you see, please feel free to chat with me thru email or on LinkedIn! </h6> */}
              <h6> © 2025 / Alex Tov </h6>
              {/* <h6> Designed and built with many, many iterations by Alex </h6> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
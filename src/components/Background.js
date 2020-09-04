import React from 'react';
import '../App.scss';

import bckgrdDesktop from '../images/background.svg';
import bckgrdMobile from '../images/backgroundMobile.png';

class Background extends React.Component {
  render() {
    return (
      <div className='background'> 
        <img
          className={this.props.screenWidth < 480 ? 'mobile' : 'desktop'} 
          src={this.props.screenWidth < 480 ? bckgrdMobile : bckgrdDesktop} 
          alt=''
        />
      </div>
    );
  }
}

export default Background;
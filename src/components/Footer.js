import React from 'react';

import Contact from './Contact.js';


class Footer extends React.Component {

  render() {
    return (
      <div className='footer'>
        {/* <Contact screenWidth={this.props.screenWidth} /> */}
        <h6> Designed and built by Alex Tov </h6>
      </div>
    );
  }
}

export default Footer;
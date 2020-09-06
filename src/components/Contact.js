import React from 'react';

import linkedin from '../images/iconIn.png';
import mail from '../images/iconEmail.png';
import mailsvg from '../images/iconEmail.svg';
import phone from '../images/iconPhone.png';

const styleMobile = {
  position: 'relative',
  top: '0',
  left: '0',
  height: '11.875rem',
  marginBottom: '20%',
  paddingLeft: '1.875rem',
  justifyContent: 'space-between',
  alignSelf: 'flex-start'
}

class Contact extends React.Component {

  render() {
    return (
      <div className='contact' style={this.props.screenWidth > 768 ? null : styleMobile}> 
        <button> <img src={linkedin} alt='Email'/> </button>
        <button> <img src={phone} alt='Email'/> </button>
        <button> <img src={mailsvg} alt='Email'/> </button>
      </div>
    );
  }
}

export default Contact;
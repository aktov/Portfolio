import React from 'react';

import linkedin from '../images/iconIn.png';
import mail from '../images/iconEmail.svg';
import phone from '../images/iconPhone.png';
import github from '../images/GitHub-Mark-120px-plus.png';

const buttons = [
  {
    href: 'https://github.com/aktov',
    src: github, 
    alt: 'GitHub',
    toolTip: 'github.com/aktov'
  },
  {
    href: 'https://www.linkedin.com/in/alex-tov-32047a184/',
    src: linkedin, 
    alt: 'LinkedIn',
    toolTip: 'LinkedIn'
  },
  {
    href: 'tel:+14159949888',
    src: phone, 
    alt: 'Phone',
    toolTip: '+1 (415) 994-9888'
  },
  {
    href: 'mailto:alextov.works@gmail.com',
    src: mail, 
    alt: 'Email',
    toolTip: 'alextov.works@gmail.com'
  },
]

// const styleMobile = {
//   position: 'relative',
//   width: '1.875rem',
//   top: '0',
//   left: '0',
//   height: 'auto',
//   marginBottom: '20%',
//   paddingLeft: '1.875rem',
//   justifyContent: 'space-between',
//   alignSelf: 'flex-start'
// }

// const btnStyleMobile = {
//   marginLeft: '-1rem'
// }

// const spanStyleMobile = {
//   paddingLeft: '3rem',
//   opacity: 1,
//   wordWrap: 'break-word',
//   whiteSpace: 'nowrap'
// }

const styleMobile = {
  position: 'relative',
  width: '100%',
  maxWidth: '20rem',
  top: '0',
  left: '0',
  height: 'auto',
  marginBottom: '20%',
  padding: '0 1.875rem',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  alignSelf: 'flex-start',
  zIndex: 0
}

const btnStyleMobile = {
  marginLeft: 0,
  marginRight: 0,
  flexShrink: 0
}

const spanStyleMobile = {
  display: 'none',
}

const Button = (props) => {
  return (
    <div 
      className='button' 
      style={props.screenWidth > 768 ? null : btnStyleMobile} 
      data-aos='fade' 
      data-aos-offset='100' 
      data-aos-delay={props.delay * 150}
      data-aos-easing='ease-out-sine'
      data-aos-duration='400'
      data-aos-once={true}
    >
      <a href={props.buttonInfo.href} target="_blank" rel="noopener noreferrer">
        <img src={props.buttonInfo.src} alt={props.buttonInfo.alt} draggable='false' /> 
      </a>
      <span className='toolTip' style={props.screenWidth > 768 ? null : spanStyleMobile}>
        {props.buttonInfo.toolTip}
      </span>
    </div>
  );
}


class Contact extends React.Component {

  render() {
    return (
      <div className='contact' style={this.props.screenWidth > 768 ? null : styleMobile}> 
        {buttons.map((button, index) =>
          <Button 
            key={button.alt} 
            buttonInfo={button} 
            screenWidth={this.props.screenWidth} 
            delay={index}
          />
        )}
        
      </div>
    );
  }
}

export default Contact;
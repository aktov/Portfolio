import React from 'react';

import Contact from './Contact.js';
import NavButtons from './NavButtons.js';

import close from '../images/close.svg';

class NavMenu extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.toggleMenu();
  }

  render() {
    return (
      <div className='menu'>
        <div className='buttonClose'>
          <button onClick={this.handleClick}> <img className='navIcon' src={close} alt='Close'/> </button>
        </div>
        <NavButtons/>
        <Contact/> 
      </div>
    );
  }
}

export default NavMenu;
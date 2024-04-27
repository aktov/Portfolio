import React from 'react';

// import Contact from './Contact.js';
import NavButtons from './NavButtons.js';

import close from '../images/close.svg';

class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.closeMenu = this.closeMenu.bind(this);
  }

  closeMenu(e) {
    this.props.toggleMenu();
  }

  render() {
    return (
      <div className={this.props.menuOpen ? 'menu menuIn' : 'menu menuOut'}>
        <div className='outside'>
          <button onClick={this.closeMenu}> </button>
        </div>
        <div className='inside'>
          <div className='buttonClose'>
            <button onClick={this.closeMenu}> <img className='navIcon' src={close} alt='Close'/> </button>
          </div>
          <NavButtons closeMenu={this.closeMenu}/>
          {/* <Contact screenWidth={this.props.screenWidth} />  */}
        </div>
      </div>
    );
  }
}

export default NavMenu;
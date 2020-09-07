import React from 'react';

import logo from '../images/logoBlack.svg';

import Navigation from './Navigation.js';

class Header extends React.Component {
  handleClick(e) {
    document.getElementById('anchor_page').scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  render() {
    return (
    <header className='header'>
      <div className='left'> 
        <button 
          onClick={this.handleClick}
          aria-label='Go back to top'>
          <img src={logo} alt='Back to top'/> 
          <span className='toolTip'> scroll back to top </span>
        </button> 
      </div>
      
      <Navigation useMobileNav={this.props.useMobileNav} toggleMenu={this.props.toggleMenu} />
    </header>
    );
  }
}

export default Header;
import React from 'react';

import NavButtons from './NavButtons.js';

import nav from '../images/nav.svg';

// Navigation component for the desktop version of the site
const NavDesktop = (props) => {
  return (
    <div className='right' style={{ justifyContent: "space-around" }}>
      <NavButtons/>
    </div> 
  );
}

// Navigation component for the mobile version of the site
const NavMobile = (props) => {
  function handleClick(e) {
    props.toggleMenu();
  }

  return (
    <div className='right' style={{ justifyContent: "flex-end" }}>
      <button 
        onClick={handleClick} 
        aria-label='Open nav menu'> 
        <img className='navIcon' src={nav} alt='Menu'/> 
      </button>
    </div> 
  );
}


class Navigation extends React.Component {
  render() {
    return (
      this.props.useMobileNav ? <NavMobile toggleMenu={this.props.toggleMenu} /> : <NavDesktop/>
    );
  }
}

export default Navigation;
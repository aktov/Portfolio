import React from 'react';
import { Link } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';

import logo from '../images/logoBlack.svg';

import Navigation from './Navigation.js';

smoothscroll.polyfill();

class Header extends React.Component {
  handleClick(e) {
    if (document.getElementById('anchor_page')) {
      document.getElementById('anchor_page').scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  render() {
    return (
    <header className='header'>
      <div className='left'> 
        <Link to='/'> 
          <button 
            className='outlineNone'
            onClick={this.handleClick}
            aria-label='Go back to top'>
            <img src={logo} alt='Back to top' draggable='false' /> 
            {/* <span className='toolTip'> scroll back to top </span> */}
          </button> 
        </Link>
      </div>
      
      <Navigation 
        useMobileNav={this.props.useMobileNav} 
        toggleMenu={this.props.toggleMenu} 
      />
    </header>
    );
  }
}

export default Header;
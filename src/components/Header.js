import React from 'react';
import { Link } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';

import logo from '../images/logo.svg';

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
            onClick={this.handleClick}
            aria-label='Go back to top'>

            {/* Change logo size depending on device */}
            <img className='logo' style={this.props.useMobileNav == true ? {width: '2.5rem'} : null} src={logo} alt='Take me back to the home page' draggable='false' /> 
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
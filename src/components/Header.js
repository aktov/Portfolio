import React from 'react';
import '../App.scss';
import logo from '../images/logoBlack.svg';

import Navigation from './Navigation.js';

class Header extends React.Component {
  render() {
    return (
    <header className='header'>
      <div className='left'> <a href='.'> <img src={logo} alt='Home'/> </a> </div>
      {/* {this.props.useMobileNav ? <NavMobile toggleMenu={this.props.toggleMenu}/> : <Navigation/>} */}
      <Navigation useMobileNav={this.props.useMobileNav} toggleMenu={this.props.toggleMenu} />
    </header>
    );
  }
}

export default Header;
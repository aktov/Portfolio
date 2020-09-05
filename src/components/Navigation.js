import React from 'react';

import NavMenu from './NavMenu.js';

import nav from '../images/nav.svg';


const headerCategories = [
  {name: 'about', link: '.'},
  {name: 'experience', link: '.'},
  {name: 'projects', link: '.'},
  {name: 'resume', link: '.'},
]

const HeaderButton = (props) => {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <a href={props.link} className='buttonNav' onClick={handleClick}> {props.text} </a>
  );
}

// Navigation component for the desktop version of the site
const NavDesktop = (props) => {
  return (
    <div className='right' style={{ justifyContent: "space-around" }}>
      {headerCategories.map((category) => 
        <HeaderButton key={category.name} 
                      text={category.name} 
                      link={category.link}/>
      )}
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
      <button onClick={handleClick}> <img className='navIcon' src={nav} alt='Menu'/> </button>
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
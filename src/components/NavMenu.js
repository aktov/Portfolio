import React from 'react';
import '../App.scss';

import Contact from './Contact.js';

import nav from '../images/nav.svg';
import close from '../images/close.svg';


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
        <div className='buttons'>
          {headerCategories.map((category) => 
          <HeaderButton key={category.name} 
                        text={category.name} 
                        link={category.link}/>
          )}
        </div>
        <Contact/> 
      </div>
    );
  }
}

export default NavMenu;
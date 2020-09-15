import React from 'react';

import nav from '../images/nav.svg';





class NavMobile extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.toggleMenu();
  }

  render() {
    return (
      <div className='right' style={{ justifyContent: "flex-end" }}>
        <button onClick={this.handleClick}> <img className='navIcon' src={nav} alt='Menu'/> </button>
        
      </div> 
    );
  }
}

export default NavMobile;
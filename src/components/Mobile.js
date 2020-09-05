import React from 'react';
import '../App.scss';

import Header from './Header.js';
import Background from './Background.js';
// import Contact from './Contact.js';
import Content from './Content.js';
import NavMenu from './NavMenu.js';

class Mobile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    console.log('hello');
    this.setState((state, props) => ({menuOpen: !state.menuOpen}));
  }

  render() {
    return (
      <div className='app'>
        <Header useMobileNav={true} toggleMenu={this.toggleMenu}/>
        {this.state.menuOpen && <NavMenu toggleMenu={this.toggleMenu}/> }

        <Background screenWidth={this.props.screenWidth} />

        <Content screenWidth={this.props.screenWidth} />
      </div>
    );
  }
}

export default Mobile;
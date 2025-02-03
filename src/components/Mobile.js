import React from 'react';

import Header from './Header.js';
import Background from './Background1.js';
import Content from './Content.js';
import NavMenu from './NavMenu.js';
import TopButton from './TopButton.js';

class Mobile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState((state, props) => ({menuOpen: !state.menuOpen}));
  }

  render() {
    return (
      <>
      <Header useMobileNav={true} toggleMenu={this.toggleMenu} stickyUntil={800}/>
      <div className='app'>
        <NavMenu toggleMenu={this.toggleMenu} screenWidth={this.props.screenWidth} menuOpen={this.state.menuOpen}/> 
        <Background screenWidth={this.props.screenWidth} />
        <Content screenWidth={this.props.screenWidth} />
      </div>

      <TopButton color='#FFC0C0' />
      </>
    );
  }
}

export default Mobile;
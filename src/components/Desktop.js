import React from 'react';

import Header from './Header.js';
import Footer from './Footer.js';
import Background from './Background.js';
import Contact from './Contact.js';
import Content from './Content.js';
import TopButton from './TopButton.js';

class Desktop extends React.Component {
  render() {
    return (
      <>
      <Header useMobileNav={false} />
      <div className='app'>
        <Background screenWidth={this.props.screenWidth} />
        <Contact screenWidth={this.props.screenWidth} /> 
        <Content screenWidth={this.props.screenWidth} />
      </div>
      
      <TopButton color='#B8C4E4' />
      <Footer screenWidth={this.props.screenWidth} />
      </>
    );
  }
}

export default Desktop;
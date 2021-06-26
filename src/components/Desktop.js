import React from 'react';

import Header from './Header.js';
import Footer from './Footer.js';
import Background from './Background.js';
import Contact from './Contact.js';
import Content from './Content.js';
import TopButton from './TopButton.js';

class Desktop extends React.Component {  
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <>
      <Header useMobileNav={false} />
      <div className='app'>
        <Background screenWidth={this.props.screenWidth}/>
        <Contact screenWidth={this.props.screenWidth} /> 
        <Content screenWidth={this.props.screenWidth} />
      </div>
      
      <TopButton color='#FFC0C0' />
      <Footer screenWidth={this.props.screenWidth} />
      </>
    );
  }
}

export default Desktop;
import React from 'react';

import Header from './Header.js';
import Background from './Background.js';
import Contact from './Contact.js';
import Content from './Content.js';

class Desktop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <Header useMobileNav={false} />
        <Background screenWidth={this.props.screenWidth} />
        
        <Contact screenWidth={this.props.screenWidth} /> 
        <Content screenWidth={this.props.screenWidth} />
      </div>
    );
  }
}

export default Desktop;
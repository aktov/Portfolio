import React from 'react';

import Cards from './Cards.js';
import Title from './Title';

class Work extends React.Component {
  render() {
    return (
      <div 
        className='work'
      > 
        <div id='work' className='anchor' style={this.props.screenWidth > 768 ? null : {marginTop: '-1rem'}}></div>
        <Title title='Work' screenWidth={this.props.screenWidth} /> 

        <h4 className='heading'> {'Case Studies'} </h4>
        <Cards group={'casestudies'} screenWidth={this.props.screenWidth} />
        <h4 className='heading'> {'Prototype Designs'} </h4>
        <Cards group={'mocks'} screenWidth={this.props.screenWidth} />
      </div> 
    );
  }
}

export default Work
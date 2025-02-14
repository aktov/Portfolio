import React from 'react';

import Cards from './Cards.js';
import Title from './Title';

class Work extends React.Component {
  render() {
    return (
      <div 
        className='work'
      > 
        <div id='work' className='anchor' style={this.props.screenWidth > 768 ? {marginTop: '-2.5rem'} : {marginTop: '-2rem'}}></div>
        <Title title='Work' screenWidth={this.props.screenWidth} /> 

        {this.props.screenWidth > 768 && 
          <>
            <h3 className='heading'> {'Featured'} </h3>
            <Cards group={'featured'} screenWidth={this.props.screenWidth} />
          </>
        }
        <h3 className='heading'> {'Case Studies'} </h3>
        <Cards group={'casestudies'} screenWidth={this.props.screenWidth} />
        <h3 className='heading'> {'Designs'} </h3>
        <Cards group={'designs'} screenWidth={this.props.screenWidth} />
      </div> 
    );
  }
}

export default Work
import React from 'react';

class Test extends React.Component {

  componentDidMount() {
    console.log('hello world');
  }

  render() {
    return (
      <div> <h1> hello world </h1> </div>
    );
  }

}

export default Test;
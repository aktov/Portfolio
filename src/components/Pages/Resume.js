import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  width: '90%',
  margin: 'auto',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

class Resume extends React.Component {
  render() {
    return (
      <div style={style}>
        <h2> Hi, I'm sorry to say this but this page is currently still under development. </h2>
        <h2> If you'd like, send an email to me and I'll gladly send over my resume! </h2>
        <Link to='/'> <button className='sadButton'> return home </button> </Link>
      </div>

    );
  }
}

export default Resume;
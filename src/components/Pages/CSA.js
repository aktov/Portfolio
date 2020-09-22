import { findAllByDisplayValue } from '@testing-library/react';
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

class CSA extends React.Component {
  render() {
    return (
      <div style={style}>
        <h2> Hi, I'm sorry to say this but this page is currently still under development. </h2>
        <h2> 
          {'The prototype of the page, however, is ready and can be read '}
          <a 
            href='https://www.figma.com/proto/7zBJtA5xKYSNlq1RKzRwJa/Portfolio?node-id=216%3A0&viewport=628%2C-176%2C0.10288254171609879&scaling=scale-down-width&hide-ui=1'
            target="_blank"
            rel="noopener noreferrer"
          >
            here.
          </a>
        </h2>
        <Link to='/'> <button className='sadButton'> return home </button> </Link>
      </div>
    );
  }
}

export default CSA;
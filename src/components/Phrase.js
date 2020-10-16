import React from 'react';

import bullet from '../images/bullet.svg';

const Phrase = (props) => {
  return (
    <div className='phrase'>
      <img src={bullet} alt='bullet' />
      <p> {props.text} </p>
    </div>
  );
}

export default Phrase;
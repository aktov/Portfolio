import React from 'react';

import bullet from '../images/bullet.svg';

const Phrase = (props) => {
  return (
    <div className='phrase'>
      <img src={bullet} alt='bullet' />

      {props.ital ? <p> <i> {props.text} </i> </p> : <p> {props.text} </p>}
    </div>
  );
}

export default Phrase;